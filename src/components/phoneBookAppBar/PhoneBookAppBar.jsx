import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/operations';
import { useUser } from 'services';
import { Filter } from 'components/phoneBook';
import { setTheme } from 'redux/index';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { useShowModalContext } from 'context/ContactModalContext';

const PhoneBookAppBar = () => {
  const { isLoggedIn, user } = useUser();
  const theme = useTheme();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const renderSearchInput = location.pathname.includes('contacts');
  const { setShowAddContact } = useShowModalContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h1"
              noWrap
              component="div"
              onClick={() => navigation('/')}
              sx={{ cursor: 'pointer', mr: theme.spacing(4) }}
            >
              PHONEBOOK
            </Typography>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group small"
              size="small"
            >
              <Button onClick={() => navigation('/')}>Home</Button>
              {isLoggedIn ? (
                <Button onClick={() => navigation('/contacts')}>
                  Contacts
                </Button>
              ) : (
                <>
                  <Button onClick={() => navigation('/login')}>Login</Button>
                  <Button onClick={() => navigation('/register')}>
                    Register
                  </Button>
                </>
              )}
            </ButtonGroup>
          </Box>
          {renderSearchInput && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => setShowAddContact(true)}
              >
                <AddBoxIcon fontSize="inherit" color="secondary" />
              </IconButton>
              <Filter />
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(1),
              alignItems: 'center',
            }}
          >
            {isLoggedIn && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography component="p">{user.email}</Typography>
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  sx={{ cursor: 'ponter' }}
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  <LogoutIcon />
                </IconButton>
              </Box>
            )}
            <Box sx={{ ml: theme.spacing(2) }}>
              {theme.palette.mode} mode
              <IconButton onClick={() => dispatch(setTheme())} color="inherit">
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PhoneBookAppBar;
