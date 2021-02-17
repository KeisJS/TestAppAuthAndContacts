import React from 'react';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom';
import { Meta } from '@storybook/react';
import EditContact from './EditContact';
import { getMockStoreTestProvider } from '../../../utils/test';
import { routes } from '../../routes';

export default {
  title: 'Feature/Contacts/editContact',
  component: EditContact
} as Meta;

const { TestProvider } = getMockStoreTestProvider({});
const { pattern: contactBase } = routes.contacts;

export const DefaultUse = () => (
  <TestProvider>
    <MemoryRouter initialEntries={[`${ contactBase }/edit/new`]} initialIndex={1} >
      <Switch>
        <Route path={ contactBase } exact>
          <Link to={ `${ contactBase }/edit/new` }>Back to edit/new</Link>
        </Route>
        <Route path={ `${ contactBase }/edit/:id` }>
          <EditContact />
        </Route>
      </Switch>
    </MemoryRouter>
  </TestProvider>
)


