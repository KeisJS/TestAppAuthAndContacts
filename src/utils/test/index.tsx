import { getEmptyStoreTestProvider, spyStore, getTestProvider } from './getTestProvider';
import getTestStoreCreator from './getTestStore';
import { byLabelText } from 'testing-library-selector';

interface Selectors {
  [id: string]: ReturnType<typeof byLabelText>
}

export type {
  Selectors
}

export {
  getTestStoreCreator,
  getEmptyStoreTestProvider,
  spyStore,
  getTestProvider,
}
