import authSlice from '../authSlice';
import { authProcessApi } from '../api';
import { AppDispatch } from '../../../../app/store';
import store from '../../../../app/store';
import { testUser } from '../../../user/test.data';
import { userSlice } from 'features/user'

jest.mock('../api');

describe('Test authSlice', () => {
  const testFormData = {
    login: 'testLogin',
    password: 'testPassword'
  };
  const authProcessApiMock = authProcessApi as jest.MockedFunction<typeof authProcessApi>;
  
  
  it('default use', async () => {
    const { authProcess } = authSlice.actions;
    const testThunkAction = authProcess(testFormData);
    const testDispatch: jest.MockedFunction<AppDispatch> = jest.fn();
    const testGetState: jest.MockedFunction<typeof store.getState> = jest.fn();
    const testResponse = { user: testUser };
    authProcessApiMock.mockResolvedValueOnce(testResponse);
    
    await testThunkAction(testDispatch, testGetState, undefined);
    
    expect(authProcessApiMock).toHaveBeenCalledWith(testFormData);
    expect(testDispatch).toHaveBeenNthCalledWith(2, userSlice.actions.set(testUser));
  })
})
