// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { Search, StyledInputBase, SearchIconWrapper } from './Filter.styled';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilter } from 'redux/index';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search contacts"
        inputProps={{ 'aria-label': 'search' }}
        name="filter"
        value={filter}
        onChange={({ currentTarget: { value } }) => dispatch(setFilter(value))}
        autoComplete="false"
      />
    </Search>
  );
};

export { Filter };
//  <Box sx={{ mt: 1, mb: 2, mx: 'auto', width: 400 }}>
//    <TextField
//      id="filter"
//      label="Search contacts"
//      variant="outlined"
//      sx={{ width: 1, mb: 2 }}
//      name="filter"
//      type="text"
//      value={filter}
//      onChange={({ currentTarget: { value } }) => dispatch(setFilter(value))}
//    />
//  </Box>;
