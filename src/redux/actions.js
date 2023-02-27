import { nanoid } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const filterContacts = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
