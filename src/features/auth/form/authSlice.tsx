import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSlice } from '../../user';
import { authProcessApi } from './api';

export interface AuthFormData {
  login: string,
  password: string
}

const authProcess = createAsyncThunk<void, AuthFormData>(
  'auth/process',
  async (authFormData, thunkAPI) => {
    const { user } = await authProcessApi(authFormData);
    
    thunkAPI.dispatch(userSlice.actions.set(user));
  }
)

const authSlice = {
  actions: {
    authProcess
  }
}

export default authSlice;
