import { AuthFormData } from './authSlice';
import { User } from '../../user';

interface AuthSuccessResponse {
  user: User
}

export async function authProcessApi(data: AuthFormData): Promise<AuthSuccessResponse> {
  const { login, password } = data;
  
  const response = await fetch(`/api/auth/process/${login}:${password}`);
  
  return response.json();
}
