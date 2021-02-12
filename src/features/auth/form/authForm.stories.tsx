import { Meta } from '@storybook/react';
import { AuthForm } from './AuthForm';
import { getEmptyStoreTestProvider } from '../../../utils/test/getTestProvider';

export default {
  title: 'Component/Auth/Form',
  component: AuthForm
} as Meta;

const { TestProvider } = getEmptyStoreTestProvider();

export const DefaultUse = () => (
  <div className="container">
    <div className="row vh-100 justify-content-center align-items-center">
      <div className="col-4">
        <TestProvider>
          <AuthForm />
        </TestProvider>
      </div>
    </div>
  </div>
)
