// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = createAsyncThunk(
//     "contacts/fetchAll",
//     async (_, thunkApi) => {
//         try {
//             const response = await axios.get("/contacts");
//             return response.data
            
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message)
//         }
//     }
// );

// export const addContact = createAsyncThunk(
//     "contacts/addContact",
//     async (contactData,thunkApi) => {
//         try {
//             const response = await axios.post("/contacts",contactData);
//             return response.data
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message)
//         }
//     }
// );

// export const deleteContact = createAsyncThunk(
//     "contacts/deleteContact",
//     async (contactId, thunkApi) => {
//         try {
//             await axios.delete(`/contacts/${contactId}`);
//             return contactId
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message)
//         }
//     }
// )




import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }

    try {
      const response = await axios.get('/contacts', {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      axios.defaults.headers.common.Authorization = null;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }

    try {
      const curentHeaders = setAuthHeader(persistedToken);
      const jsonData = JSON.stringify(contact);
      const response = await axios.post('/contacts', jsonData, {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }

    try {
      const response = await axios.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);