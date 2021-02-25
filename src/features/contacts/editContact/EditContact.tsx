import React, { useEffect } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '../../../components/ui/form/textField/TextField';
import { Button } from '../../../components/ui/button/Button';
import { ContactFormField } from './interfaces';
import getEditContactFormikConfig from './editContact.formik.config';
import editContactAction from './editContactAction';
import BackToButton from '../backToButton/BackToButton';
import RemoveContactButton from '../removeContactButton/RemoveContactButton';
import contactSelectors from '../store/selectors';
import appRoutes from '../../../app/routes';
import { newId } from '../contactsPage/contactRoute';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const contacts = useSelector(contactSelectors.contactsDataSelector);
  const { id } = useParams<ContactRouteParams>();
  const contact = contacts.find(currentContact => currentContact.id === id);
  let editContactFormikConfig = getEditContactFormikConfig();
  
  if (contact) {
    editContactFormikConfig.initialValues = {
      name: contact.name,
      phone: contact.phone,
    }
  }

  const {
    values, isValid, handleSubmit, isSubmitting, getFieldProps, setSubmitting
  } = useFormik(editContactFormikConfig);
  
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
  }, [isValid, isSubmitting, dispatch, id, values, history, setSubmitting]);
  
  return (
    <>
      { id === newId || contact ?
        <form onSubmit={ handleSubmit }>
          <div className="row">
            { id !== newId ? (
              <div className="col-12 text-end">
                <RemoveContactButton id={ id } />
              </div>
            ) : null }
          </div>
          { contactFields.map(contact => (
            <TextField
              label={ contact.label }
              key={ contact.id }
              id={ contact.id }
              { ...getFieldProps(contact.id)}
            />
          ))}
          <div className="row">
            <div className="col-6">
              <BackToButton />
            </div>
            <div className="col-6 text-end">
              <Button primary type={ 'submit' } disabled={ !isValid } preloader={ isSubmitting }>
                Save
              </Button>
            </div>
          </div>
        </form>
        : <Redirect to={appRoutes.contacts.path} /> }
    </>
  );
}
