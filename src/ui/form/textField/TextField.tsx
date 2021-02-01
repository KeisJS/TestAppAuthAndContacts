import React from 'react';

export interface TextFieldProps {
  /**
   * Field value
   */
  value: string;
  /**
   * Field label
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  label?: string;
  /**
   * Text under input field
   */
  statusText?: string;
  /**
   * For TextField container customize
   */
  className?: string;
  /**
   * Option onblur handler
   * @param e
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  /**
   * For validations needs
   */
  isValid?: boolean;
  /**
   * For validations needs
   */
  isInvalid?: boolean;
  /**
   * Type text or password
   */
  type?: 'text' | 'password';
  id?: string;
}

export const statusClasses = {
  valid: {
   control: 'is-valid',
   feedback: 'valid-feedback'
  },
  invalid: {
    control: 'is-invalid',
    feedback: 'invalid-feedback'
  },
  default: {
    control: '',
    feedback: ''
  }
}

export const TextField: React.FC<TextFieldProps> = function ({
  label,
  statusText,
  className = '',
  isValid,
  isInvalid,
  type = 'text',
  id = '',
  ...restProps
}) {
  
  const statusKey = isValid ? 'valid' : isInvalid ? 'invalid' : 'default';
  
  return (
    <div className={ className }>
      <label className="form-label" htmlFor={ id }>{ label }</label>
      <input id={ id } type={ type } className={ `form-control ${ statusClasses[statusKey].control }` } { ...restProps } />
      <div className={ `form-text ${ statusClasses[statusKey].feedback }` }>{ statusText }</div>
    </div>
  )
}
