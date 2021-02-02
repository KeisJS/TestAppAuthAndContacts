import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes/routes';
import { AuthPage } from '../AuthPage';
import { byText } from 'testing-library-selector';

describe('Auth path', () => {
  const contactsBody = 'Contact content';
  const defaultRouteBody = 'default route';
  const testUser = {
    id: 123
  }
  
  const contactsPageSelector = byText(contactsBody);
  
  it('default use', () => {
    render((
      <MemoryRouter>
         <Switch>
           <Route path={ routes.auth.pattern }>
             <AuthPage user={ testUser } />
           </Route>
           <Route path={ routes.contacts.pattern }>
             { contactsBody }
           </Route>
           <Route>
             <Redirect to={ routes.auth.pattern } />
           </Route>
         </Switch>
      </MemoryRouter>
    ));
    
    const contactsPage = contactsPageSelector.get();
  })
})
