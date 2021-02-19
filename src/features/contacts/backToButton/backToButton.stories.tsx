import React from 'react';
import { Meta } from '@storybook/react';
import { MemoryRouter, Route } from 'react-router-dom';
import BackToButton from './BackToButton';

const meta: Meta = {
  title: 'Feature/Contacts/BackToButton',
  component: BackToButton
}

export const DefaultUse = () => (
  <MemoryRouter>
    <Route>
      <BackToButton />
    </Route>
  </MemoryRouter>
)

export default meta;
