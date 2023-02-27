import { nanoid } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './types';

const initialStore = {
  contacts: [
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79', friend: true },
    { id: nanoid(), name: 'Annie Copeland', number: '645-45-85', friend: true },
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56', friend: false },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12', friend: true },
  ],
  filter: '',
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContactsAdd = [...store.contacts, action.payload];
      return { ...store, contacts: newContactsAdd };
    case DELETE_CONTACT:
      const newContactsDelete = store.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      return { ...store, contacts: newContactsDelete };
    case SET_FILTER:
    //   const filterContacts = 5;
    //   return 5;
      return { ...store, filter: action.payload };
    default:
      return store;
  }
};

export default reducer;
