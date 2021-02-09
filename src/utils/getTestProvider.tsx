import { configureStore, Reducer, ReducersMapObject, createReducer, Store } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

export default function getTestProvider<S = any>(reducer: Reducer<S> | ReducersMapObject<S>) {
  const store  = configureStore({
    reducer,
    devTools: false
  });
  
  return {
    TestProvider: ({ children }: React.PropsWithChildren<any>) => (
      <Provider store={store}>
        { children }
      </Provider>
    ),
    store
  }
}

export function getEmptyStoreTestProvider() {
  const reducer = createReducer(null, {});
  
  return getTestProvider(reducer);
}

export function spyStore(store: Store) {
  return {
    dispatch: jest.spyOn(store, 'dispatch')
  }
}
