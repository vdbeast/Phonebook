export const selectContacts = (state) => state.phonebook.contacts.items;
export const selectContactsFilter = (state) => state.filter.filter;
export const selectIsLoading = (state) => state.phonebook.contacts.isLoading;
export const selectError = (state) => state.phonebook.contacts.error;

export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = selectContactsFilter(state);
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
};
