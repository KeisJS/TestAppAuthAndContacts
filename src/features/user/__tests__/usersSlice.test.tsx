import userSlice from '../user.slice';
import { testUser } from '../test.data';

describe('user slice', () => {
  const { reducer: userReducer } = userSlice;
  
  it('test set feature', () => {
    const setAction = userSlice.actions.set;
    expect(setAction(testUser)).toEqual({
      type: setAction.type,
      payload: testUser
    });
    
    expect(userReducer(null, setAction(testUser))).toEqual(testUser);
  });
})
