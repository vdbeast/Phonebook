import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await instance.get("/contacts");
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
            const response = await instance.post("/contacts",contactData);
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
            await instance.delete(`/contacts/${contactId}`);
            return contactId
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
