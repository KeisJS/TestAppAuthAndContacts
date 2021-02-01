import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, buttonClasses } from '../Button';
import { byRole, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';

describe('Test Button', () => {
  const buttonSelector = byRole('button');
  const buttonText = 'ok';
  const onClick = jest.fn();
  
  beforeEach(() => {
    onClick.mockReset();
  })
  
  it('default use', () => {
    render((
      <Button onClick={onClick}>
        { buttonText }
      </Button>
    ));
    
    const button = buttonSelector.get();
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
    
    userEvent.click(button);
    
    expect(onClick).toHaveBeenCalled();
  });
  
  it('attr use', () => {
    const { rerender, getByText } = render((
      <Button disabled primary>
        { buttonText }
      </Button>
    ));
  
    const button = buttonSelector.get();
  
    expect(button).toBeDisabled();
    expect(button).toHaveClass(buttonClasses.primary);
  });
  
  it('preloader use', () => {
    render((
      <Button preloader primary>
        { buttonText }
      </Button>
    ));
  
    const button = buttonSelector.get();
  
    expect(button).toBeDisabled();
    expect(button).toContainElement(byRole('status').get());
  });
})
