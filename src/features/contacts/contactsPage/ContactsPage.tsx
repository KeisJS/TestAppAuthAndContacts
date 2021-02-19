import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactList from '../contactList/ContactList';
import EditContact from '../editContact/EditContact';
import contactRoute from './contactRoute';

function ContactsPage() {
  
  return (
    <>
      <Switch>
        <Route path={ `${ contactRoute.path }` } exact>
          <ContactList />
        </Route>
        <Route path={ `${ contactRoute.child.editById.path }` }>
          <EditContact />
        </Route>
      </Switch>
    </>
  )
}

export default ContactsPage;
