import { getMockStoreTestProvider, spyStore, getTestProvider } from './getTestProvider';
import getTestStore from './getTestStore';
import { byLabelText } from 'testing-library-selector';

interface Selectors {
  [id: string]: ReturnType<typeof byLabelText>
}

export type {
  Selectors
}

export {
  getTestStore,
  getMockStoreTestProvider,
  spyStore,
  getTestProvider,
}
