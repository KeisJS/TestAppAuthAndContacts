import React from 'react';
import { byRole, byText } from 'testing-library-selector';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { getMockStoreTestProvider } from '../../../../utils/test';
import AddContactButton from '../AddContactButton';
import { routes } from '../../../routes';

describe('Test AddContactButton', () => {
  it('Test default use', () => {
    const { TestProvider } = getMockStoreTestProvider({});
    const editNewBody = 'editNew';
    
    render((
      <MemoryRouter>
        <TestProvider>
          <Switch>
            <Route path={ `${ routes.contacts.pattern }/edit/:id`}>
              { editNewBody }
            </Route>
            <Route>
              <AddContactButton />
            </Route>
          </Switch>
        </TestProvider>
      </MemoryRouter>
    ));
    
    userEvent.click(byRole('button').get());
    
    expect(byText(editNewBody).query()).toBeInTheDocument();
  })
})
