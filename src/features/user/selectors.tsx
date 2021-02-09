import { RootState } from '../../app/store';

const user = (state: RootState) => state.user;

const userSelectors = {
  user
}

export default userSelectors;
