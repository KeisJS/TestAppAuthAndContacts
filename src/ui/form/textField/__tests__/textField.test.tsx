import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '../TextField';
import { byRole } from 'testing-library-selector';

describe('TextField test', () => {
  const textField = byRole('textbox');
  const testMsg = 'test msg';
  const Container = () => {
    const [value, setValue] = useState('');
    
    return (
      <TextField
        value={ value }
        onChange={ (e) => { setValue(e.target.value) } }
      />
    )
  }
  
  it('default use', async () => {
    render(<Container />);
    
    const testTextField = textField.get();
    
    await userEvent.type(testTextField, testMsg);
    
    expect(testTextField).toHaveValue(testMsg);
  })
})
