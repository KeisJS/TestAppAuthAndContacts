import React, { useEffect } from 'react';
import { TextField } from 'components/ui/form/textField/TextField';
import { Button } from 'components/ui/button/Button';
import { useFormik } from 'formik';
import { authFormFormikConfig } from './authForm.formik.config';
import { AuthFormProps } from './interfaces';
import styles from './styles.module.scss';

export const authFields = {
  login: {
    label: 'Login',
    id: 'loginField'
  },
  password: {
    label: 'Password',
    id: 'passwordField'
  }
}

export const AuthForm: React.FC<AuthFormProps> = function ({ onSubmit }) {
  const {
    values, errors, touched,
    getFieldProps,
    isValid,
    isSubmitting,
    handleSubmit,
    setSubmitting,
  } = useFormik(authFormFormikConfig);
  
  useEffect(() => {
    if(isSubmitting && isValid) {
      onSubmit(values, { setSubmitting });
    }
  }, [isSubmitting, isValid, onSubmit, values, setSubmitting]);
  
  return (
    <div className={ styles.form }>
      <form onSubmit={ handleSubmit }>
        <TextField label={ authFields.login.label }
                   id={ authFields.login.id }
                   { ...getFieldProps('login') }
                   statusText={ touched.login && errors.login ? errors.login : '' }
                   isValid={ Boolean(touched.login && !errors.login) }
                   isInvalid={ Boolean( touched.login && errors.login )}
        />
        <TextField label={ authFields.password.label }
                   id={ authFields.password.id }
                   { ...getFieldProps('password')}
                   statusText={ touched.password && errors.password ? errors.password : '' }
                   isValid={ Boolean(touched.password && !errors.password)}
                   isInvalid={ Boolean(touched.password && errors.password) }
        />
        <div className="text-end">
          <Button primary type="submit" disabled={ !isValid } preloader={ isSubmitting }>
            Enter
          </Button>
        </div>
      </form>
    </div>
  );
}
