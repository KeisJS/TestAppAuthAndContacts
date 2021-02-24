import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact, ContactUserField } from '../interfaces';
import { createContactApi } from '../api';
import { ContactId } from '../interfaces';

const contactThunk = {
  create: createAsyncThunk<Contact, ContactUserField>(
    'contact/async/create',
    async (contact, thunkApi) => {
      return createContactApi(contact);
    }
  ),
  update: createAsyncThunk<Contact, Contact>(
    'contact/async/update',
    async (contact) => {
      return Promise.resolve(contact);
    }
  ),
  remove: createAsyncThunk<ContactId, ContactId>(
    'contact/async/remove',
    async (id) => {
      return Promise.resolve(id)
    }
  )
};

export default contactThunk;
