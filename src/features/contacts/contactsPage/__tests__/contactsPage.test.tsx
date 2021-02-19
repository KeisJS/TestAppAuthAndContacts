import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Link, Route } from 'react-router-dom';
import ContactsPage from '../ContactsPage';
import { byRole, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import ContactList from '../../contactList/ContactList';
import EditContact from '../../editContact/EditContact';
import contactRoute from '../contactRoute';
import { getMockStoreTestProvider } from '../../../../utils/test';
import appRoutes from '../../../../app/routes';

jest.mock('../../contactList/ContactList', () => ({
  __esModule: true,
  default: () => <>contacts</>
}));

jest.mock('../../editContact/EditContact', () => ({
  __esModule: true,
  default: () => <>edit</>
}));

describe('Test ContactsPage', () => {
  const page = {
    contactList: byText('contacts'),
    editContact: byText('edit'),
  };
  
  
  it('Test default use', () => {
    const { TestProvider } = getMockStoreTestProvider({ user: {} });
    
    render((
      <MemoryRouter initialEntries={[ contactRoute.path ]}>
        <TestProvider>
          <Link to={ contactRoute.path }/>
          <Link to={ contactRoute.child.editNew.path }/>
          <Link to={ contactRoute.child.editById.getPath({ id: String(1) }) }/>
          <ContactsPage />
        </TestProvider>
      </MemoryRouter>
    ));
    
    const [toContacts, toEditNew, toEditById] = byRole('link').getAll();
    
    expect(page.contactList.query()).toBeInTheDocument();
    
    userEvent.click(toEditNew);

    expect(page.editContact.query()).toBeInTheDocument();

    userEvent.click(toContacts);

    expect(page.editContact.query()).not.toBeInTheDocument();
    
    userEvent.click(toEditById);
    
    expect(page.editContact.query()).toBeInTheDocument();
  });
  
  it('Test redirect if no auth', () => {
    const { TestProvider } = getMockStoreTestProvider({ user: null });
    
    render((
      <MemoryRouter initialEntries={[ contactRoute.path ]}>
        <TestProvider>
          <ContactsPage />
          <Route path={ appRoutes.auth.path }>
            auth
          </Route>
        </TestProvider>
      </MemoryRouter>
    ));
    
    expect(byText('auth').query()).toBeInTheDocument();
  })
})
