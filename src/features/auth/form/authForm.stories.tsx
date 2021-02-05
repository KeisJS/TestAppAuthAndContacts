import { Meta, Story } from '@storybook/react';
import { AuthForm } from './AuthForm';
import { AuthFormProps } from './interfaces';

export default {
  title: 'Component/Auth/Form',
  component: AuthForm
} as Meta;

export const DefaultUse: Story<AuthFormProps> = props => (
  <div className="container">
    <div className="row vh-100 justify-content-center align-items-center">
      <div className="col-4">
        <AuthForm { ...props } />
      </div>
    </div>
  </div>
)

DefaultUse.args = {
  onSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 1000)
  }
}
