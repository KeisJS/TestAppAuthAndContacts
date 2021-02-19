import React from 'react';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom';
import { Meta } from '@storybook/react';
import EditContact from './EditContact';
import { getMockStoreTestProvider } from '../../../utils/test';
import appRoutes from '../../../app/routes';

export default {
  title: 'Feature/Contacts/EditContact',
  component: EditContact
} as Meta;

const { TestProvider } = getMockStoreTestProvider({});

export const DefaultUse = () => (
  <TestProvider>
    <MemoryRouter initialEntries={[appRoutes.contacts.child.editNew.path]} initialIndex={1} >
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


