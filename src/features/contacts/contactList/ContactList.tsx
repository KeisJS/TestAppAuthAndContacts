import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import contactSelectors from '../store/selectors';
import selectContact from './selectContact';

export default function ContactList() {
  const contacts = useSelector(contactSelectors.contactsDataSelector);
  const history = useHistory();
  
  return (
    <table>
      <tbody>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
      </tr>
      { contacts.map(contact => (
        <tr key={ contact.id } onClick={ () => selectContact(contact.id, history)}>
          <td>{ contact.name }</td>
          <td>{ contact.phone }</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
