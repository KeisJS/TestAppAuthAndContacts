import { Meta, Story } from '@storybook/react';
import { AuthForm } from './AuthForm';
import { AuthFormProps } from './interfaces';

export default {
  title: 'Component/Auth/Form',
  component: AuthForm
} as Meta;

export const DefaultUse: Story<AuthFormProps> = props => <AuthForm { ...props } />

DefaultUse.args = {
  onSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 1000)
  }
}
