import { getTestStore } from 'utils/test';
import getTestContact from '../../utils/getTestContact';
import contactThunk from '../contactThunk';
import { createContactApi } from '../../api';
import { Contact } from '../../interfaces';

jest.mock('../../api');

describe('Test contact async thunk', () => {
  let store: ReturnType<typeof getTestStore>;
  let createContactApiMock: jest.MockedFunction<typeof createContactApi>;
  
  beforeEach(() => {
    store = getTestStore({});
    createContactApiMock = createContactApi as jest.MockedFunction<typeof createContactApi>;
  })
  
  it('test create thunk', async () => {
    const contact = getTestContact() as Partial<Contact>;
    delete contact.id;
    
    const resolvedContact = {
      id: 1,
      ...contact
    };
    createContactApiMock.mockResolvedValueOnce(resolvedContact)
    await store.dispatch(contactThunk.create(contact));
    
    const actions = store.getActions();
    const actionsFulfilled = actions.find(action => action.type === contactThunk.create.fulfilled.type);
    
    expect(createContactApiMock).toHaveBeenCalledWith(contact);
    expect(actionsFulfilled).toEqual(expect.objectContaining({
      payload: resolvedContact
    }))
  })
})
