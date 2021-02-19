import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import './app/fas.config';
import ContactsPage from './features/contacts/contactsPage/ContactsPage';
import AuthPage from './features/auth/page/AuthPage';
import appRoutes from './app/routes';

function App() {
  return (
    <>
      <Switch>
        <Route path={ appRoutes.auth.path }>
          <AuthPage />
        </Route>
        <Route>
          <ContactsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
