import React from 'react';
import { MemoryRouter, Route, useHistory, Switch } from 'react-router-dom';
import { byLabelText, byRole, byTestId } from 'testing-library-selector';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditContact, { contactFields } from '../EditContact';
import { Selectors } from '../../../../utils/test';
import editContactAction from '../editContactAction';
import getTestContact from '../../utils/getTestContact';
import { getMockStoreTestProvider } from '../../../../utils/test';
import { Contact } from '../../interfaces';
import appRoutes from '../../../../app/routes';
import { initialContactState } from '../../store/contactSlice';
import { SetSpiedHistory, SpiedHistory } from '../../../../utils/test/SetSpiedHistory';
import { newId } from '../../contactsPage/contactRoute';

jest.mock('../editContactAction')

describe('Test AddContact', () => {
  const editContactActionMock = editContactAction as jest.MockedFunction<typeof editContactAction>;
  let contact: Required<Contact>;
  let history = {} as SpiedHistory;
  
  const form = contactFields.reduce((result, contact) => {
    result[contact.id] = byLabelText(contact.label);
    
    return result;
  }, {} as Selectors);
  
  form.button = byRole('button', { name: 'Save' });
  
  beforeEach(() => {
    contact = getTestContact();
    
    editContactActionMock.mockReset();
    editContactActionMock.mockResolvedValue({});
  });
  
  it('Test edit new contact', async () => {
    const { TestProvider, store } = getMockStoreTestProvider({
      contacts: {
        contacts: [contact]
      }
    });
  
    render((
      <TestProvider>
        <MemoryRouter initialEntries={ [appRoutes.contacts.child.editNew.path] } initialIndex={ 1 }>
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
      contactId: newId,
      contact: expect.objectContaining({
        name: contact.name,
        phone: contact.phone
      }),
      history: expect.objectContaining({
        push: expect.any(Function)
      })
    });
  });
  
  it('Test edit exist contact', async () => {
    const { TestProvider, store } = getMockStoreTestProvider({
      contacts: {
        contacts: [contact]
      }
    });
  
    render((
      <TestProvider>
        <MemoryRouter initialEntries={[appRoutes.contacts.child.editById.getPath({ id: contact.id })]} >
          <Route path={ appRoutes.contacts.child.editById.path }>
            <EditContact />
          </Route>
        </MemoryRouter>
      </TestProvider>
    ));
  
    const nameField = form.name.get();
    const phoneField = form.phone.get();
    const button = form.button.get();
  
    expect(button).toBeDisabled();
    
    expect(nameField).toHaveValue(contact.name);
    expect(phoneField).toHaveValue(contact.phone);
    
    const editedName = 'editedName';
    
    userEvent.type(nameField, editedName);
    
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
    
    userEvent.click(button);
  
    await waitFor(() => {
      expect(editContactActionMock).toHaveBeenCalledWith({
        dispatch: store.dispatch,
        contactId: contact.id,
        contact: expect.objectContaining({
          name: contact.name + editedName,
          phone: contact.phone
        }),
        history: expect.objectContaining({
          push: expect.any(Function)
        })
      });
    });
  });
  
  it('Test contact not exist/remove', () => {
    const { TestProvider } = getMockStoreTestProvider({
      contacts: initialContactState
    });
    const contactTestId = 'contactsId';
  
    render((
      <TestProvider>
        <MemoryRouter initialEntries={ [appRoutes.contacts.path, appRoutes.contacts.child.editById.getPath({id: contact.id})] }>
          <SetSpiedHistory outHistory={ history } />
          <Switch>
            <Route path={ appRoutes.contacts.path } exact>
              <div data-testid={ contactTestId }></div>
            </Route>
            <Route path={ appRoutes.contacts.child.editById.path }>
              <EditContact />
            </Route>
          </Switch>
        </MemoryRouter>
      </TestProvider>
    ));
    
    expect(byTestId(contactTestId).query()).toBeInTheDocument();
  })
});
