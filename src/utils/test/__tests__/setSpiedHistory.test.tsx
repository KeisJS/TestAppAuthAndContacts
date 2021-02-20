import React from 'react';
import { MemoryRouter, useHistory, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { SpiedHistory, SetSpiedHistory } from '../SetSpiedHistory';

describe('Test GetSpyHistory', () => {
  let history = {} as SpiedHistory;
  
  it('Test default use', () => {
    render((
      <MemoryRouter initialEntries={[ '/root', '/route']} initialIndex={2}>
        <SetSpiedHistory outHistory={ history } />
        <Route path={'/route'} component={() => {
          const history = useHistory();
          
          history.goBack();
          history.push('/root')
          return null;
        }} />
      </MemoryRouter>
    ));
    
    expect(history.goBack).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalled();
  })
})
