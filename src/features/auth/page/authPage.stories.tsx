import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AuthPage } from './AuthPage';
import { getTestProvider } from '../../../utils/test';
import { userSlice } from '../../user';

export default {
  title: 'Feature/Auth/Page',
  component: AuthPage,
} as Meta;

const { reducer } = userSlice;
const { TestProvider } = getTestProvider({ user: reducer });

export const DefaultUse: Story = () => (
  <TestProvider>
    <AuthPage />
  </TestProvider>
)
