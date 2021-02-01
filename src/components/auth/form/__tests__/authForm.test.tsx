import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthForm, authFields } from '../AuthForm';
import { byRole, byLabelText } from 'testing-library-selector';

describe('Auth form', () => {
  const form = {
    login: byLabelText(authFields.login.label),
    password: byLabelText(authFields.password.label),
    submitButton: byRole('button')
  };
  
  const testLogin = 'someLogin';
  const testPassword = 'somePassword';
  const onSubmit = jest.fn();
  
  it('default use', async () => {
    render(<AuthForm onSubmit={ onSubmit }/>);
    
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
    
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toEqual({
      login: testLogin,
      password: testPassword
    });
  });
})
