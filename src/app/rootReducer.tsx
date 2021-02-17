import userSlice from 'features/user/user.slice';
import contactSlice from '../features/contacts/store/contactSlice';

const rootReducerMap = {
  user: userSlice.reducer,
  contacts: contactSlice.reducer
};

export default rootReducerMap;
