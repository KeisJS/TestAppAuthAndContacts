import React from 'react';

export interface TextFieldProps {
  /**
   * Field value
   */
  value: string;
  /**
   * Field label
   */
  label?: string;
  /**
   * Text under input field
   */
  statusText?: string;
  /**
   * For TextField container customize
   */
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
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
}

export const statusClasses = {
  valid: {
   control: 'is-valid',
   feedback: 'valid-feedback'
  },
  invalid: {
    control: 'is-invalid',
    feedback: 'invalid-feedback'
  }
}

export function TextField(props: TextFieldProps) {
  const {
    label,
    statusText,
    className = '',
    isValid,
    isInvalid,
    ...restProps
  } = props;
  
  const statusClasses = {
    valid: '',
    feedback: '',
  };
  
  if (isValid) {
    statusClasses.valid = 'is-valid';
    statusClasses.feedback = 'valid-feedback';
  } else if (isInvalid) {
    statusClasses.valid = 'is-invalid';
    statusClasses.feedback = 'invalid-feedback';
  }
  
  return (
    <div className={ className }>
      <label className="form-label">{ label }</label>
      <input type="text" className={ `form-control ${ statusClasses.valid }` } { ...restProps } />
      <div className={ `form-text ${ statusClasses.feedback }` }>{ statusText }</div>
    </div>
  )
}
