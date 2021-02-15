import { Contact } from '../interfaces';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactActions';
import contactThunk from './contactThunk';

export const initialContactState = {
  contacts: [] as Contact[]
}

const reducer = createReducer(initialContactState, builder => {
    builder
      .addCase(contactThunk.create.fulfilled, (state, { payload }) => {
        state.contacts.unshift(payload)
      })
      .addCase(actions.remove, (state, { payload: contactId }) => {
        const index = state.contacts.findIndex(contact => contact.id === contactId);
        
        if (index !== -1) {
          state.contacts.splice(index, 1);
        }
      })
      .addCase(contactThunk.update.fulfilled, (state, { payload}) => {
        const workContact = state.contacts.find(contact => contact.id === payload.id);
        
        if (workContact) {
          Object.assign(workContact, payload);
        }
      })
  }
)

const contactSlice = {
  reducer,
  actions,
  thunk: contactThunk
}

export default contactSlice;
