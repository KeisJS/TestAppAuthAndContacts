import { RootState } from '../../../app/store';
import { createSelector } from '@reduxjs/toolkit';

const contactsStateSelector = (state: RootState) => state.contacts;
const contactsDataSelector = createSelector(contactsStateSelector, state => state.contacts);

const contactSelectors = {
  contactsStateSelector,
  contactsDataSelector
}

export default contactSelectors;
