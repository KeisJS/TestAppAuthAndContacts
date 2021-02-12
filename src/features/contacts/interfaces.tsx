export interface Contact {
  name: string,
  phone: string
}

export type ContactField = keyof Contact;
