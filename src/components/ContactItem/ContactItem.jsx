import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ContactItem.module.css'

const ContactItem = ({ contact, onDelete }) => {
    return (
        <li className={style.item}>
            {contact.name}: {contact.number}
            <Button variant="outlined" onClick={() => onDelete(contact.id)} startIcon={<DeleteIcon />}>Delete</Button>
        </li>
)}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func,
}

export default ContactItem;
