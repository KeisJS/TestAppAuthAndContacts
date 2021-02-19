import React from 'react';
import ContactList from './ContactList';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { getMockStoreTestProvider } from '../../../utils/test';
import getTestContacts from '../utils/getTestContact';
import routes from '../../../app/routes';
import appRoutes from '../../../app/routes';

const meta: Meta = {
  title: 'Feature/contacts/ContactList',
  component: ContactList
}

export const DefaultUse = () => {
  const { TestProvider } = getMockStoreTestProvider({
    contacts: {
      contacts: getTestContacts(3)
    }
  });
  
  return (
    <MemoryRouter>
      <TestProvider>
        <Switch>
          <Route path={ routes.contacts.child.editById.path }>
            <>
              Edit or Create new contact. <Link to={ `${ appRoutes.contacts.path }` }>Back to contacts</Link>
            </>
          </Route>
          <Route>
            <ContactList />
          </Route>
        </Switch>
      </TestProvider>
    </MemoryRouter>
  )
};

export default meta;
