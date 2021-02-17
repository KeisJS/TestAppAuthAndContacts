import React from 'react';
import { render } from '@testing-library/react';
import { byRole, byText } from 'testing-library-selector';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { getMockStoreTestProvider } from '../../../../utils/test';
import getTestContacts from '../../utils/getTestContact';
import contactSlice from '../../store/contactSlice';
import ContactList from '../ContactList';
import selectContact from '../selectContact';

jest.mock('../selectContact');

describe('Test ContactList', () => {
  let contactState: ReturnType<typeof contactSlice.reducer>;
  let contactsList = {
    contacts: byRole('row')
  }
  let countContacts = 3;
  
  beforeEach(() => {
    contactState = {
      contacts: getTestContacts(countContacts)
    }
  })
  
  it('Default use', async () => {
    const { TestProvider } = getMockStoreTestProvider({
      contacts: contactState
    });
    
    render((
      <MemoryRouter>
        <TestProvider>
          <Route>
            <ContactList />
          </Route>
        </TestProvider>
      </MemoryRouter>
    ));
    
    const contactRows = contactsList.contacts.getAll();
    const testContactData = contactState.contacts[1];
    const testContact = byText(testContactData.name as string).get();
    
    expect(contactRows).toHaveLength(countContacts + 1);
    
    userEvent.click(testContact);
    
    expect(selectContact).toHaveBeenCalledWith(
      testContactData.id,
      expect.objectContaining({ push: expect.any(Function) })
    );
  })
})
