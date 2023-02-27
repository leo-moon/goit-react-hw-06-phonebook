import { SET_FILTER } from './filter-types';

export const filterContacts = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
