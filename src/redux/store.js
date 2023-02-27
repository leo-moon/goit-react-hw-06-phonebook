import { createStore } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';
// import { ADD_CONTACT } from './types';
import reducer from './reducer';

// const reducer = (store, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       const newContact = [...store.contacts, payload];
//       return { ...store, contacts: newContact };
//     default:
//       return store;
//   }
// };

// const initialStore = {
//   contacts: [
//     { id: nanoid(), name: 'Eden Clements', number: '645-17-79', friend: true },
//     { id: nanoid(), name: 'Annie Copeland', number: '645-45-85', friend: true },
//     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56', friend: false },
//     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12', friend: true },
//   ],
//   filter: '',
// };

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// const startData = [
//   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];
