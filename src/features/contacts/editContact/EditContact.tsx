import React from 'react';
import { TextField } from '../../../components/ui/form/textField/TextField';
import { Button } from '../../../components/ui/button/Button';
import { ContactFormField } from './interfaces';
import { useFormik } from 'formik';
import editContactFormikConfig from './editContact.formik.config';

export const contactFields: ContactFormField[] = [
  {
    label: 'Contact name',
    id: 'name',
  },
  {
    label: 'Contact phone',
    id: 'phone'
  }
];

export default function EditContact() {
  const {
    values, errors, touched, isValid,
    getFieldProps
  } = useFormik(editContactFormikConfig);
  
  return (
    <form>
      { contactFields.map(contact => (
        <TextField
          label={ contact.label }
          key={ contact.id }
          id={ contact.id }
          { ...getFieldProps(contact.id)}
        />
      ))}
      <Button type={ 'submit' } disabled={ !isValid }>
        Save
      </Button>
    </form>
  );
}
