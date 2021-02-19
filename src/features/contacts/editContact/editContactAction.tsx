import { AppDispatch } from '../../../app/store';
import { ContactUserField, ContactId } from '../interfaces';
import contactThunk from '../store/contactThunk';
import appRoutes from '../../../app/routes';

const { create, update } = contactThunk;

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
    
    history.push(appRoutes.contacts.path);
  } else {
    return dispatch(update({
      id: contactId,
      ...contact
    }))
  }
}
