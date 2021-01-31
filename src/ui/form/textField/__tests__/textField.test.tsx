import React, { useState } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField, TextFieldProps, statusClasses } from '../TextField';
import { byRole, byText } from 'testing-library-selector';

describe('TextField test', () => {
  const testMsg = 'test msg';
  const statusText = 'status text';

  const textFieldSelector = byRole('textbox');
  const statusTextSelector = byText(statusText);
  
  const Container = (props: Partial<TextFieldProps>  = {}) => {
    const [value, setValue] = useState('');
    
    return (
      <TextField
        value={ value }
        onChange={ (e) => { setValue(e.target.value) } }
        { ...props }
      />
    )
  }
  
  it('default use', () => {
    render(<Container />);
    
    const textField = textFieldSelector.get();
    
    userEvent.type(textField, testMsg);
    
    expect(textField).toHaveValue(testMsg);
    expect(textField).toHaveAttribute('type', 'text');
  });
  
  it('test status text', () => {
    const { rerender } = render(<Container />);
    
    expect(statusTextSelector.query()).not.toBeInTheDocument();
    
    rerender(<Container statusText={statusText} />);
    
    expect(statusTextSelector.query()).toBeInTheDocument();
  });
  
  it('test validation status', () => {
    const { rerender } = render(<Container isValid statusText={ statusText } />);
    const textField = textFieldSelector.get();
    const statusTextBlock = statusTextSelector.get();
    
    expect(textField).toHaveClass(statusClasses.valid.control);
    expect(statusTextBlock).toHaveClass(statusClasses.valid.feedback)
  
    rerender(<Container isInvalid statusText={ statusText } />);
  
    expect(textField).not.toHaveClass(statusClasses.valid.control);
    expect(statusTextBlock).not.toHaveClass(statusClasses.valid.feedback);
  
    expect(textField).toHaveClass(statusClasses.invalid.control);
    expect(statusTextBlock).toHaveClass(statusClasses.invalid.feedback);
  });
})
