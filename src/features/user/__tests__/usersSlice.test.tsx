import userSlice from '../user.slice';

describe('user slice', () => {
  const testUser = {
    id: 100
  };
  
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
