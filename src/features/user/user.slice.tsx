import { createAction, createReducer  } from '@reduxjs/toolkit';

interface User {
  id: number
}

type UserState = User | null;

const actions = {
  set: createAction<User>('user/set')
}

const reducer = createReducer(null as UserState, builder => {
  builder.addCase(actions.set, (user, { payload }) => {
    return payload;
  })
})

export default {
  actions,
  reducer
}
