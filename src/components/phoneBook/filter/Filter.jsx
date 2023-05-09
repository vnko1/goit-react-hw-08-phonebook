import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilter } from 'redux/index';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Box sx={{ mt: 1, mb: 2, mx: 'auto', width: 400 }}>
      <TextField
        id="filter"
        label="Search contacts"
        variant="outlined"
        sx={{ width: 1, mb: 2 }}
        name="filter"
        type="text"
        value={filter}
        onChange={({ currentTarget: { value } }) => dispatch(setFilter(value))}
      />
    </Box>
  );
};

export { Filter };
