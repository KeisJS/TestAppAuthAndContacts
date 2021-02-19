import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage  from '../AuthPage';
import { byText, byRole } from 'testing-library-selector';
import { getTestProvider } from '../../../../utils/test';
import { userSlice } from 'features/user';
import appRoutes from '../../../../app/routes';

describe('Auth path', () => {
  const contactsBody = 'Contact content';
  const testUser = { id: 123 };
  const { actions, reducer } = userSlice;
  const contactsPageSelector = byText(contactsBody);
  const authPageLogin = byRole('textbox', { name: 'Login' });
  
  it('default use', async () => {
    const { TestProvider, store } = getTestProvider({ user: reducer });

    render((
      <TestProvider>
        <MemoryRouter>
          <Switch>
            <Route path={ appRoutes.auth.path }>
              <AuthPage />
            </Route>
            <Route path={ appRoutes.contacts.path }>
              { contactsBody }
            </Route>
            <Route>
              <Redirect to={ appRoutes.auth.path } />
            </Route>
          </Switch>
        </MemoryRouter>
      </TestProvider>
    ));
    
    expect(authPageLogin.query()).toBeInTheDocument();

    store.dispatch(actions.set(testUser));

    expect(contactsPageSelector.query()).toBeInTheDocument();
  });
})
