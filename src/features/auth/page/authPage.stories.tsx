import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AuthPage } from './AuthPage';

export default {
  title: 'Component/Auth/Page',
  component: AuthPage,
} as Meta;

export const DefaultUse: Story = () => <AuthPage user={ null } />
