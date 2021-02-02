import React from 'react';
import { AuthForm } from '../form/AuthForm';
import { Redirect } from 'react-router-dom';
import { routes } from '../../../routes/routes';

interface User {
  id: number;
}

interface AuthPageProps {
  user: User | null
}

export const AuthPage: React.FC<AuthPageProps> = function ({ user = null }) {
  return (
    <>
      { user !== null
        ? <Redirect to={ routes.contacts.pattern } />
        : (
          <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
              <div className="col-12 col-md-4">
                <AuthForm onSubmit={() => {}} />
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
