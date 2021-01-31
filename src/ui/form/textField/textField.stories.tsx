import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from './TextField';

const Template: Story<TextFieldProps> = props => <TextField { ...props } />;

export const DefaultUse = Template.bind({});

DefaultUse.args = {
  statusText: 'Simple status text',
  value: 'Simple value',
  label: 'Simple label',
  type: 'text',
}

export const ValidState = Template.bind({});

ValidState.args = {
  statusText: 'All OK',
  value: 'Success value',
  label: 'Simple label',
  isValid: true,
}

export const InValidState = Template.bind({});

InValidState.args = {
  statusText: 'Check value',
  value: 'Wrong value',
  label: 'Simple label',
  isInvalid: true,
}
