import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Link, Route, useHistory } from 'react-router-dom';
import { byText } from 'testing-library-selector';
import { getMockStoreTestProvider } from '../utils/test';
import App from '../App';
import ContactsPage from '../features/contacts/contactsPage/ContactsPage';
import AuthPage from '../features/auth/page/AuthPage';
import appRoutes from '../app/routes';

jest.mock('../features/contacts/contactsPage/ContactsPage', () => ({
  __esModule: true,
  default: () => <>contacts</>
}));

jest.mock('../features/auth/page/AuthPage', () => ({
  __esModule: true,
  default: () => <>auth</>
}));

describe('Test App', () => {
  const pages = {
    contacts: byText('contacts'),
    auth: byText('auth')
  };
  let testHistory: ReturnType<typeof useHistory>;
  
  it('Test default use', async () => {
    const { TestProvider } = getMockStoreTestProvider({});
    
    render((
      <TestProvider>
        <MemoryRouter>
          <Route component={ () => {
            testHistory = useHistory();
            return null
          }} />
          <App />
        </MemoryRouter>
      </TestProvider>
    ));
  
    expect(pages.contacts.query()).toBeInTheDocument();

    testHistory.push(appRoutes.auth.path);
    
    expect(pages.auth.query()).toBeInTheDocument();

    testHistory.push(appRoutes.contacts.path);
  
    expect(pages.contacts.query()).toBeInTheDocument();
  })
})
