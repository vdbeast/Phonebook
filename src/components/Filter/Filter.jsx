import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterReducer";
import { selectContactsFilter } from "redux/contacts/selectors"

const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
      dispatch(setFilter(e.target.value));
    };

  return (
    <div>
      <label className="label">Filter contacts:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
    );
};

export default Filter;

