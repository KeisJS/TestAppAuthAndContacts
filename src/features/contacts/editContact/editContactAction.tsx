import { AppDispatch } from '../../../app/store';
import { ContactUserField, ContactId } from '../interfaces';
import contactThunk from '../store/contactThunk';
import appRoutes from '../../../app/routes';
import { newId } from '../contactsPage/contactRoute';

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
  if (contactId === newId) {
    await dispatch(create(contact));
    
    history.push(appRoutes.contacts.path);
  } else {
    return dispatch(update({
      id: contactId,
      ...contact
    }))
  }
}
