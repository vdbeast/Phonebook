export const selectContacts = (state) => state.phonebook.contacts;
export const selectContactsFilter = (state) => state.filter.filter;
export const selectIsLoading = (state) => state.phonebook.isLoading;
export const selectError = (state) => state.phonebook.error;

