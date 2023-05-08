import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilter } from 'redux/index';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.container}>
      <span className={css.title}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={({ currentTarget: { value } }) => dispatch(setFilter(value))}
        value={filter}
      />
    </label>
  );
};

export { Filter };
