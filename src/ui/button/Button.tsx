import React from 'react';
import { Spinner } from 'ui/spinner/Spinner';

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  /**
   * Primary button attr
   */
  primary?: boolean;
  type?: 'button' | 'submit';
  preloader?: boolean;
}

export const buttonClasses = {
  primary: 'btn-primary'
}

export const Button: React.FC<ButtonProps> = function ({
  children,
  primary,
  type = 'button',
  disabled,
  preloader,
  ...restProps
}) {
  
  return (
    <button
      type={ type }
      className={`btn ${ primary ? buttonClasses.primary : ''}`}
      { ...restProps }
      disabled={ preloader ? true : disabled }
    >
      { preloader ? (
        <>
          { children }&nbsp;
          <Spinner />
        </>
      ): children }
    </button>
  )
}
