import { Contact, ContactId } from '../interfaces';
import { createAction, PrepareAction } from '@reduxjs/toolkit';
import getUniqueContactId from '../utils/getUniqueContactId';

interface CreateActionPayload {
  (contact: Partial<Contact>): ReturnType<PrepareAction<Contact>>;
}

const contactActions = {
  create: createAction<CreateActionPayload>('contact/create', (contact) => ({
    payload: {
      id: getUniqueContactId(),
      ...contact
    }
  })),
  remove: createAction<ContactId>('contact/remove'),
  update: createAction<Contact>('contact/update'),
}

export default contactActions;
