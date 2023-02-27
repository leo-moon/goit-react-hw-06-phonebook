import { nanoid } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

const initialStore = [
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79', friend: true },
  { id: nanoid(), name: 'Annie Copeland', number: '645-45-85', friend: true },
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56', friend: false },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12', friend: true },
];

const contactsReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...store, payload];
    case DELETE_CONTACT:
      return store.filter(contact => contact.id !== payload.id);
    default:
      return store;
  }
};

export default contactsReducer;
