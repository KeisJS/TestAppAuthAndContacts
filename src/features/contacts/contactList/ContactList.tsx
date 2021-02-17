import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import contactSelectors from '../store/selectors';
import selectContact from './selectContact';
import AddContactButton from '../addContactButton/AddContactButton';

export default function ContactList() {
  const contacts = useSelector(contactSelectors.contactsDataSelector);
  const history = useHistory();
  
  return (
    <>
      <div className="text-end">
        <AddContactButton />
      </div>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
        </tr>
        </thead>
        <tbody>
        { contacts.map(contact => (
          <tr key={ contact.id } onClick={ () => selectContact(contact.id, history)}>
            <td>{ contact.name }</td>
            <td>{ contact.phone }</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}
