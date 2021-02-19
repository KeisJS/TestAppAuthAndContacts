import userSlice from 'features/user/userSlice';
import contactSlice from '../features/contacts/store/contactSlice';

const rootReducerMap = {
  user: userSlice.reducer,
  contacts: contactSlice.reducer
};

export default rootReducerMap;
