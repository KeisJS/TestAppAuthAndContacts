import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { byLabelText, byRole } from 'testing-library-selector';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditContact, { contactFields } from '../EditContact';
import { Selectors } from '../../../../utils/test';
import editContactAction from '../editContactAction';
import getTestContact from '../../utils/getTestContact';
import { getMockStoreTestProvider } from '../../../../utils/test';
import { Contact } from '../../interfaces';
import appRoutes from '../../../../app/routes';

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
  
  it('Test edit new contact', async () => {
    const { TestProvider, store } = getMockStoreTestProvider();
    editContactActionMock.mockResolvedValue({})
  
    render((
      <TestProvider>
        <MemoryRouter initialEntries={[appRoutes.contacts.child.editNew.path]} initialIndex={1} >
          <Route path={ appRoutes.contacts.child.editById.path }>
            <EditContact />
          </Route>
        </MemoryRouter>
      </TestProvider>
    ));
    
    const nameField = form.name.get();
    const phoneField = form.phone.get();
    const button = form.button.get();
    
    expect(byRole('button', { name: 'Back' }).query()).toBeInTheDocument();
    
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
