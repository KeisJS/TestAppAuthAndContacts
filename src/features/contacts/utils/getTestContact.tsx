import { Contact } from '../interfaces';
import getUniqueContactId from './getUniqueContactId';
import { uniqueId } from 'lodash';

function contactTemplate(id: string): Required<Contact> {
  return {
    id,
    name: `name_${id}`,
    phone: `1111111-${uniqueId()}`
  }
}

function getTestContacts(): Required<Contact>;
function getTestContacts(n: number): Required<Contact>[];
function getTestContacts(n?: number | undefined): Required<Contact> | Required<Contact>[] {
  if (typeof n === 'undefined') {
    return contactTemplate(getUniqueContactId());
  }
  
  return Array(n).fill('').map(() => contactTemplate(getUniqueContactId()));
}

export default getTestContacts;
