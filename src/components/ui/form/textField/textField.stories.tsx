import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from './TextField';

const Template: Story<TextFieldProps> = props => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <TextField { ...props } />
      </div>
    </div>
  </div>
);

export const DefaultUse = Template.bind({});

DefaultUse.args = {
  statusText: 'Simple status text',
  value: 'Simple value',
  label: 'Simple label',
  type: 'text',
  id: 'simpleId'
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
