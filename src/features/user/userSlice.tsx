import { createAction, createReducer  } from '@reduxjs/toolkit';
import { User } from './interfaces';

type UserState = User | null;

const actions = {
  set: createAction<User>('user/set')
}

const initialState = null as UserState;

const reducer = createReducer(initialState, builder => {
  builder.addCase(actions.set, (user, { payload }) => {
    return payload;
  })
});

const userSlice = {
  actions,
  reducer
}

export default userSlice;
