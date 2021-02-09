import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthForm, authFields } from '../AuthForm';
import { byRole, byLabelText } from 'testing-library-selector';
import { getEmptyStoreTestProvider, spyStore } from '../../../../utils/getTestProvider';

describe('Auth form', () => {
  const form = {
    login: byLabelText(authFields.login.label),
    password: byLabelText(authFields.password.label),
    submitButton: byRole('button')
  };
  
  const testLogin = 'someLogin';
  const testPassword = 'somePassword';
  const { TestProvider, store } = getEmptyStoreTestProvider();
  
  it('default use', async () => {
    const { dispatch } = spyStore(store);
    
    render((
      <TestProvider>
        <AuthForm />
      </TestProvider>
    ));
    
    const loginInput = form.login.get();
    const passwordInput = form.password.get();
    const submitButton = form.submitButton.get();
    
    expect(submitButton).toBeDisabled();

    userEvent.type(loginInput, testLogin);
    userEvent.type(passwordInput, testPassword);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
    
    userEvent.click(submitButton);
  
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
    
    expect(dispatch).toHaveBeenCalled();
  });
})
