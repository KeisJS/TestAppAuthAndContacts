import React from 'react';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom';
import { Meta } from '@storybook/react';
import EditContact from './EditContact';
import { getMockStoreTestProvider } from '../../../utils/test';
import appRoutes from '../../../app/routes';
import getTestContact from '../utils/getTestContact';

export default {
  title: 'Feature/Contacts/EditContact',
  component: EditContact
} as Meta;

const contact = getTestContact();
const { TestProvider } = getMockStoreTestProvider({
  contacts: {
    contacts: [contact]
  }
});

export const DefaultUse = () => (
  <TestProvider>
    <MemoryRouter initialEntries={ [appRoutes.contacts.child.editById.getPath({id: contact.id})] }>
      <Switch>
        <Route path={ appRoutes.contacts.path } exact>
          <Link to={ appRoutes.contacts.child.editNew.path }>Back to edit/new</Link>
        </Route>
        <Route path={ appRoutes.contacts.child.editById.path }>
          <EditContact />
        </Route>
      </Switch>
    </MemoryRouter>
  </TestProvider>
)


