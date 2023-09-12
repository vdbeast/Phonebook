import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
      dispatch(setFilter(e.target.value));
    };

  return (
    <div>
      <TextField
        margin="normal"
        fullWidth
        id="query"
        label="Search name"
        name="name"
        autoComplete="name"
        autoFocus
        onChange={handleFilterChange}
      />
    </div>
    );
};

export default Filter;

