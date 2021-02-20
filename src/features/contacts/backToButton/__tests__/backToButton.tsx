import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { byRole } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import BackToButton from '../BackToButton';
import { SetSpiedHistory, SpiedHistory } from '../../../../utils/test/SetSpiedHistory';

describe('Test BackToButton.', () => {
  let history = {} as SpiedHistory;
  
  it('Test default use', () => {
    
    render((
      <MemoryRouter>
        <SetSpiedHistory outHistory={ history }/>
        <BackToButton />
      </MemoryRouter>
    ));
    
    userEvent.click(byRole('button').get());
    
    expect(history.goBack).toHaveBeenCalled();
  });
})
