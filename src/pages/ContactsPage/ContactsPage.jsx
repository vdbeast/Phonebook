import React, {useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/contacts/api';
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import Loader from 'components/Loader/Loader';
import style from './ContactPage.module.css'

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
        <h1 className={style.phonebook_title}>Phonebook</h1>
        <ContactForm />
      <div>
        <h2 className={style.phonebook_title}>Contacts</h2>
        <Filter />
        {isLoading && <Loader/>}
        {error && <p className="error">{error}</p>}
        {!isLoading && !error && <ContactList />}
      </div>
    </div>
  )
}

export default ContactsPage