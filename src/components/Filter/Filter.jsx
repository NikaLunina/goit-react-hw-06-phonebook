import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filtercontainer}>
      <p className={css.title}>Find Contacts by name</p>
      <label>
        <input
          className={css.input}
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={onFilter}
          value={filterValue}
        />
      </label>
    </div>
  );
};
