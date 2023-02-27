import { createStore } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';
// import { ADD_CONTACT } from './types';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
