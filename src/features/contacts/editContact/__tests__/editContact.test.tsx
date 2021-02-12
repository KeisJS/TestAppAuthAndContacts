import React from 'react';
import { byLabelText, byRole } from 'testing-library-selector';
import { render, waitFor, screen } from '@testing-library/react';
import EditContact, { contactFields } from '../EditContact';
import userEvent from '@testing-library/user-event';
import { Selectors } from '../../../../utils/test';

describe('Test AddContact', () => {
  const nameValue = 'test name';
  const phoneValue = 'phone value';
  const form = contactFields.reduce((result, contact) => {
    result[contact.id] = byLabelText(contact.label);
    
    return result;
  }, {} as Selectors);
  
  form.button = byRole('button', { name: 'Save' });
  
  it('default use', async () => {
    render((
      <EditContact />
    ));
    
    const nameField = form.name.get();
    const phoneField = form.phone.get();
    const button = form.button.get();
    
    expect(button).toBeDisabled();
    
    userEvent.type(nameField, nameValue);
    userEvent.type(phoneField, phoneValue);
    
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  })
});
