import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactList from '../contactList/ContactList';
import EditContact from '../editContact/EditContact';
import contactRoute from './contactRoute';
import userSelectors from 'features/user/selectors';
import appRoutes from '../../../app/routes';

function ContactsPage() {
  const user = useSelector(userSelectors.user);
  
  if (user === null) {
    return <Redirect to={ appRoutes.auth.path } />
  }
  
  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-12 mt-2">
          <Switch>
            <Route path={ `${ contactRoute.path }` } exact>
              <ContactList />
            </Route>
            <Route path={ `${ contactRoute.child.editById.path }` }>
              <EditContact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage;
