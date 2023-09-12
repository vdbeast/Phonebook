import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/api";
import { nanoid } from 'nanoid';
import { selectContacts } from "redux/contacts/selectors";
import { Button, TextField } from "@mui/material";
import style from './ContactForm.module.css'

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
        const existingContact = contacts.find(contact => contact.name === name);

        if (existingContact) {
            alert("Contact already exists");
        } else {
            dispatch(addContact({ id: nanoid(), name, number }));
            setName('');
            setNumber('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.input_wrapper}>
                <TextField
                    margin="normal"
                    required
                    type="text"
                    label="Name"
                    onChange={e => setName(e.target.value)} />
                <TextField
                    margin="normal"
                    required
                    type="tel"
                    label="Number"
                    onChange={e => setName(e.target.value)} />
            </div>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Add Contact
            </Button>
    </form>
    );
};

export default ContactForm;
