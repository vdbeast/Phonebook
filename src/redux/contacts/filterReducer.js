import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;