import React from 'react';
import { Button, ButtonProps } from './Button';
import { Story } from '@storybook/react';

const Template: Story<React.PropsWithChildren<ButtonProps>> = ({
   children,
   ...restProps
}) => (
  <Button { ...restProps }>
    { children }
  </Button>
)

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  children: 'simple button',
  primary: true
}

export const PreloaderButton = Template.bind({});

PreloaderButton.args = {
  preloader: true,
  primary: true,
  children: 'loading'
}
