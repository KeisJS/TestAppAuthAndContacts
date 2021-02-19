import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, useHistory } from 'react-router-dom';
import { byRole } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import BackToButton from '../BackToButton';

describe('Test BackToButton.', () => {
  let history: ReturnType<typeof useHistory>;
  let goBack: jest.SpiedFunction<typeof history.goBack>;
  
  it('Test default use', () => {
    
    render((
      <MemoryRouter>
        <Route component={ () => {
          history = useHistory();
          goBack = jest.spyOn(history, 'goBack');
          return null;
        }}/>
        <BackToButton />
      </MemoryRouter>
    ));
    
    userEvent.click(byRole('button').get());
    
    expect(goBack).toHaveBeenCalled();
  });
})
