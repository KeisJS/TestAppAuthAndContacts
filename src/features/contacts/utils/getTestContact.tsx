import { Contact } from '../interfaces';
import getUniqueContactId from './getUniqueContactId';
import { uniqueId } from 'lodash';

export default function (): Required<Contact> {
  const id = getUniqueContactId();
  
  return {
    id,
    name: `name_${id}`,
    phone: `1111111-${uniqueId()}`
  }
}
