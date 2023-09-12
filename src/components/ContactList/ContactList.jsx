import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/api';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = useCallback(
    (contactId) => {
      dispatch(deleteContact(contactId));
    },
    [dispatch]
  );

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={handleDeleteContact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
};

export default ContactList;
