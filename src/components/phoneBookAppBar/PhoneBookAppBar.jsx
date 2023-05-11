import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/operations';
import { useUser } from 'services';
import { useColorModeContext } from 'context/colorModeContext';
import { Filter } from 'components/phoneBook';
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

const PhoneBookAppBar = () => {
  const { isLoggedIn, user } = useUser();
  const theme = useTheme();
  const navigation = useNavigate();
  const { toggleColorMode } = useColorModeContext();

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
                  <Button onClick={() => navigation('register')}>
                    Register
                  </Button>
                </>
              )}
            </ButtonGroup>
          </Box>
          <Box sx={{ display: 'flex' }}>
            {isLoggedIn && <Filter />}
            <Filter />
            <Box sx={{ ml: theme.spacing(2) }}>
              {theme.palette.mode} mode
              <IconButton onClick={toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Box>
          </Box>
          {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}></Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PhoneBookAppBar;

// <AppBar position="static">
//     <Container maxWidth="xl">
//       <Toolbar disableGutters>
//         <Typography
//           variant="h6"
//           noWrap
//           sx={{
//             mr: 2,
//             display: { xs: 'none', md: 'flex' },
//             fontFamily: 'monospace',
//             fontWeight: 700,
//             letterSpacing: '.3rem',
//             color: 'inherit',
//             textDecoration: 'none',
//           }}
//         >
//           <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//             PHONEBOOK
//           </Link>
//         </Typography>

//         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//           <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//               display: { xs: 'block', md: 'none' },
//             }}
//           >
//             {pages().map(({ title, path }) => (
//               <MenuItem key={title} onClick={handleCloseNavMenu}>
//                 <Link to={path} style={{ textDecoration: 'none' }}>
//                   <Typography textAlign="center">{title}</Typography>
//                 </Link>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>

//         <Typography
//           variant="h5"
//           noWrap
//           component="a"
//           sx={{
//             mr: 2,
//             display: { xs: 'flex', md: 'none' },
//             flexGrow: 1,
//             fontFamily: 'monospace',
//             fontWeight: 700,
//             letterSpacing: '.3rem',
//             color: 'inherit',
//             textDecoration: 'none',
//           }}
//         >
//           PHONEBOOK
//         </Typography>

//         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//           {pages().map(({ title, path }) => (
//             <Link key={title} to={path} style={{ textDecoration: 'none' }}>
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {title}
//               </Button>
//             </Link>
//           ))}
//         </Box>
//         {isLoggedIn && (
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               <div
//                 style={{
//                   padding: 8,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Typography textAlign="center">{user.email}</Typography>
//                 <Button
//                   sx={{ color: '#000000' }}
//                   onClick={() => {
//                     dispatch(logOut());
//                   }}
//                 >
//                   <Typography
//                     textAlign="center"
//                     style={{ textTransform: 'capitalize' }}
//                   >
//                     Log out
//                   </Typography>
//                 </Button>
//               </div>
//             </Menu>
//           </Box>
//         )}
//       </Toolbar>
//     </Container>
//   </AppBar>
