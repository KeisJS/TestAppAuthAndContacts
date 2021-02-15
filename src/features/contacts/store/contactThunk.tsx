import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact, ContactUserField } from '../interfaces';
import { createContactApi } from '../api';

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
  )
};

export default contactThunk;
