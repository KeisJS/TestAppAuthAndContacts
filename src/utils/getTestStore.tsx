import { getDefaultMiddleware } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import { AppDispatch } from '../app/store';

export default function getTestStoreCreator<State = {}>(initialState: State) {
  
  return configureStore<State, AppDispatch>(getDefaultMiddleware())(initialState);
}
