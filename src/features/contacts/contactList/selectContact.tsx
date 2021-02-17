import { ContactId } from '../interfaces';

export default function selectContact(id: ContactId, history: { push(s: string): void }) {
  history.push(`/contacts/edit/${ id }`);
}
