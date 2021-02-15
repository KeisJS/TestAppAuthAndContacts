import { Contact } from './interfaces';
import getUniqueContactId from './utils/getUniqueContactId';

export async function createContactApi(contact: Partial<Contact>): Promise<Contact> {
  return Promise.resolve({
    id: getUniqueContactId(),
    ...contact
  })
}
