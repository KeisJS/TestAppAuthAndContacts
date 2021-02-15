import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { TextField } from '../../../components/ui/form/textField/TextField';
import { Button } from '../../../components/ui/button/Button';
import { ContactFormField } from './interfaces';
import editContactFormikConfig from './editContact.formik.config';
import editContactAction from './editContactAction';

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

interface ContactRouteParams {
  id: string;
}

export default function EditContact() {
  const {
    values, isValid, handleSubmit, isSubmitting, getFieldProps, setSubmitting
  } = useFormik(editContactFormikConfig);
  
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<ContactRouteParams>();
  
  useEffect( () => {
    if(isValid && isSubmitting) {
      editContactAction({
        dispatch,
        contactId: id,
        contact: values,
        history
      }).finally(() => {
        setSubmitting(false);
      });
    }
  }, [isValid, isSubmitting, dispatch, id, values, history, setSubmitting])
  
  return (
    <form onSubmit={ handleSubmit }>
      { contactFields.map(contact => (
        <TextField
          label={ contact.label }
          key={ contact.id }
          id={ contact.id }
          { ...getFieldProps(contact.id)}
        />
      ))}
      <div className="text-end">
        <Button primary type={ 'submit' } disabled={ !isValid } preloader={ isSubmitting }>
          Save
        </Button>
      </div>
    </form>
  );
}
