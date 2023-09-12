import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/contacts");
            return response.data
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contactData,thunkApi) => {
        try {
            const response = await axios.post("/contacts",contactData);
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
        try {
            await axios.delete(`/contacts/${contactId}`);
            return contactId
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)