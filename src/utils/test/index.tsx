import { getEmptyStoreTestProvider, spyStore, getTestProvider } from './getTestProvider';
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
  getEmptyStoreTestProvider,
  spyStore,
  getTestProvider,
}
