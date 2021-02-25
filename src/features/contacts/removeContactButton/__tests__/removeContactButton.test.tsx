import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { byRole } from 'testing-library-selector';
import RemoveContactButton from '../RemoveContactButton';
import { getMockStoreTestProvider } from '../../../../utils/test';
import contactThunk from '../../store/contactThunk';

jest.mock('../../store/contactThunk');

describe('Test RemoveContactButton', () => {
  it('Test default use', async () => {
    const { TestProvider, store } = getMockStoreTestProvider({});
    const id = 'TestId';
    store.dispatch = jest.fn();
    
    render((
      <TestProvider>
        <RemoveContactButton id={ id } />
      </TestProvider>
    ));
    
    userEvent.click(byRole('button').get());
    
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalled();
    })
    
    expect(contactThunk.remove).toHaveBeenCalledWith(id);
  })
})
