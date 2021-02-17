import React from 'react';
import ContactList from './ContactList';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { getMockStoreTestProvider } from '../../../utils/test';
import getTestContacts from '../utils/getTestContact';
import { routes } from '../../routes';

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
          <Route path={`${routes.contacts.pattern}/edit/:id`}>
            <>
              edit contact. <Link to={ `${ routes.contacts.pattern }` }>Back to contacts</Link>
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
