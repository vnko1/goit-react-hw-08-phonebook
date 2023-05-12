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
        autoComplete="off"
      />
    </Search>
  );
};

export { Filter };
