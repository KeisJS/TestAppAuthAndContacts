import { AppDispatch } from '../../../app/store';
import { ContactUserField, ContactId } from '../interfaces';
import contactSlice from '../store/contactSlice';
import { routes } from '../../routes/routes';

const { create, update } = contactSlice.thunk;

interface editContactActionParams {
  dispatch: AppDispatch,
  contactId: ContactId,
  contact: ContactUserField,
  history: { push(path: string): void }
}

export default async function editContactAction({
  dispatch, contactId, contact, history
}: editContactActionParams): Promise<any> {
  if (contactId === 'new') {
    await dispatch(create(contact));
    
    history.push(routes.contacts.pattern);
  } else {
    return dispatch(update({
      id: contactId,
      ...contact
    }))
  }
}
