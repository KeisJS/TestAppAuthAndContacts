import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { byLabelText, byRole } from 'testing-library-selector';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditContact, { contactFields } from '../EditContact';
import { Selectors } from '../../../../utils/test';
import editContactAction from '../editContactAction';
import getTestContact from '../../utils/getTestContact';
import { getMockStoreTestProvider } from '../../../../utils/test';
import { routes } from '../../../routes';
import { Contact } from '../../interfaces';

jest.mock('../editContactAction')

describe('Test AddContact', () => {
  let contact: Required<Contact>;
  let editContactActionMock: jest.MockedFunction<typeof editContactAction>;
  
  const form = contactFields.reduce((result, contact) => {
    result[contact.id] = byLabelText(contact.label);
    
    return result;
  }, {} as Selectors);
  
  form.button = byRole('button', { name: 'Save' });
  
  beforeEach(() => {
    contact = getTestContact();
    editContactActionMock = editContactAction as jest.MockedFunction<typeof editContactAction>;
    
    editContactActionMock.mockReset();
  });
  
  it('Test edit contact', async () => {
    const { TestProvider, store } = getMockStoreTestProvider();
    const { pattern: contactBase } = routes.contacts;
    editContactActionMock.mockResolvedValue({})
  
    render((
      <TestProvider>
        <MemoryRouter initialEntries={[`${contactBase}/edit/new`]} initialIndex={1} >
          <Route path={ `${ contactBase }/edit/:id` }>
            <EditContact />
          </Route>
        </MemoryRouter>
      </TestProvider>
    ));
    
    const nameField = form.name.get();
    const phoneField = form.phone.get();
    const button = form.button.get();
    
    expect(button).toBeDisabled();
    
    userEvent.type(nameField, contact.name);
    userEvent.type(phoneField, contact.phone);
    
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
    
    userEvent.click(button);
  
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    })
  
    expect(editContactActionMock).toHaveBeenCalledWith({
      dispatch: store.dispatch,
      contactId: 'new',
      contact: expect.objectContaining({
        name: contact.name,
        phone: contact.phone
      }),
      history: expect.objectContaining({
        push: expect.any(Function)
      })
    });
  });
});
