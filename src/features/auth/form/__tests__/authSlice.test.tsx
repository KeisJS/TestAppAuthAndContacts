import authSlice from '../authSlice';
import { authProcessApi } from '../api';
import { testUser } from '../../../user/test.data';
import { userSlice } from 'features/user';
import getTestStoreCreator from '../../../../utils/getTestStore';

jest.mock('../api');

describe('Test authSlice', () => {
  const testFormData = {
    login: 'testLogin',
    password: 'testPassword'
  };
  const authProcessApiMock = authProcessApi as jest.MockedFunction<typeof authProcessApi>;
  
  it('default use', async () => {
    const { dispatch, getActions } = getTestStoreCreator({});
    const testResponse = { user: testUser };

    authProcessApiMock.mockResolvedValueOnce(testResponse);
    
    await dispatch(authSlice.actions.authProcess(testFormData));
    
    expect(authProcessApiMock).toHaveBeenCalledWith(testFormData);
    expect(getActions()).toContainEqual( userSlice.actions.set(testUser));
  })
})
