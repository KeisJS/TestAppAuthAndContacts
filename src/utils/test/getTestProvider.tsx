import {
  configureStore, Reducer, ReducersMapObject, Store, ConfigureStoreOptions
} from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { getTestStore } from './';

export function getTestProvider<S = any>(reducer: Reducer<S> | ReducersMapObject<S>, empty = false) {
  const config: ConfigureStoreOptions<S> = {
    reducer,
    devTools: false
  }
  
  if(empty) {
    config.middleware = getDefaultMiddleware => getDefaultMiddleware({
      immutableCheck: false
    })
  }
  
  const store  = configureStore(config);
  
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
  const store = getTestStore({});
  
  return {
    TestProvider: ({ children }: React.PropsWithChildren<any>) => (
      <Provider store={store}>
        { children }
      </Provider>
    ),
    store
  };
}

export function spyStore(store: Store) {
  return {
    dispatch: jest.spyOn(store, 'dispatch')
  }
}
