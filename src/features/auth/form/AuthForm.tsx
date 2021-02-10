import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from 'components/ui/form/textField/TextField';
import { Button } from 'components/ui/button/Button';
import { useFormik } from 'formik';
import { authFormFormikConfig } from './authForm.formik.config';
import styles from './styles.module.scss';
import authSlice from './authSlice';

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

export const AuthForm = function () {
  const {
    values, errors, touched,
    getFieldProps,
    isValid,
    isSubmitting,
    handleSubmit,
    setSubmitting,
  } = useFormik(authFormFormikConfig);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(isSubmitting && isValid) {
      dispatch(authSlice.actions.authProcess({
        login: values.login,
        password: values.password
      }))
    }
  }, [isSubmitting, isValid, values, setSubmitting, dispatch]);
  
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
