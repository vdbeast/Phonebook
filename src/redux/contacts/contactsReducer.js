import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./api";

const contactInitialState = {
    contacts: [],
    isLoading: false,
    error: null
};

const handlePending = (state) => {
    state.isLoading  = true
};

const handleRejected = (state, action) => {
    state.isLoading  = false;
    state.error = action.payload
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = state.contacts.filter(
                    (contact) => contact.id !== action.payload
                );
            })
            .addCase(deleteContact.rejected, handleRejected);
    }
});

export default contactsSlice.reducer;


