export interface Contact {
  id: ContactId,
  name?: string,
  phone?: string
}

export type ContactUserField = Omit<Contact, 'id'>

export type ContactId = string | number;

export type ContactField = keyof Contact;
