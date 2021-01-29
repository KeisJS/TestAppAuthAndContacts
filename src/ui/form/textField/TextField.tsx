import React from 'react';

export interface TextFieldProps {
  /**
   * Field value
   */
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  /**
   * Option onblur handler
   * @param e
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
}

export function TextField(props: TextFieldProps) {
  return (
    <input type="text" { ...props } />
  )
}
