import React from 'react';
import { useSelector } from 'react-redux';
import { AuthForm } from '../form/AuthForm';
import { Redirect } from 'react-router-dom';
import { userSelectors } from 'features/user';
import appRoutes from '../../../app/routes';

const AuthPage = function () {
  const user = useSelector(userSelectors.user);
  
  return (
    <>
      { user !== null
        ? <Redirect to={ appRoutes.contacts.path } />
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

export default AuthPage;
