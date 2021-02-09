import React from 'react';
import { useSelector } from 'react-redux';
import { AuthForm } from '../form/AuthForm';
import { Redirect } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { userSelectors } from 'features/user';

export const AuthPage = function () {
  const user = useSelector(userSelectors.user);
  
  return (
    <>
      { user !== null
        ? <Redirect to={ routes.contacts.pattern } />
        : (
          <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
              <div className="col-12 col-md-4">
                <AuthForm />
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
