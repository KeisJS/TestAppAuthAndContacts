import React from 'react';
import { render } from '@testing-library/react';
import { byRole } from 'testing-library-selector';
import { Spinner } from '../Spinner';

describe('Test spinner', () => {
  it('default use', () => {
    render(<Spinner />);
    
    expect(byRole('status').query()).toBeInTheDocument();
  })
})
