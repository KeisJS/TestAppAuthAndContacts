import React, { useState } from 'react';
import { TextField } from './TextField';

export const DefaultUse = () => {
  const [value, setValue] = useState('');
  
  return (
    <TextField
      value={ value }
      onChange={ (e) => { setValue(e.target.value) } }
    />
  )
}
