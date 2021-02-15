import editContactFactory from '../editContactAction';
import contactSlice from '../../store/contactSlice';
import getTestContact from '../../utils/getTestContact';
import { routes } from '../../../routes';

jest.mock('../../store/contactSlice');

describe('Test editContactAction', () => {
  let dispatch: jest.MockedFunction<any>;
  let history: { push(s: string): void }
  
  beforeEach(() => {
    dispatch = jest.fn().mockResolvedValue({});
    history = { push: jest.fn() }
  });
  
  it('Test editContactAction Create', async () => {
    const contact = {};
    
    await editContactFactory({
      dispatch,
      contactId: 'new',
      contact,
      history
    });
    
    expect(contactSlice.thunk.create).toHaveBeenCalledWith(contact);
    expect(history.push).toHaveBeenCalledWith(routes.contacts.pattern);
  });
  
  it('Test editContactAction Update', async () => {
    const contact = getTestContact();
    
    await editContactFactory({
      dispatch,
      contactId: contact.id,
      contact,
      history
    });
    expect(contactSlice.thunk.update).toHaveBeenCalledWith(contact);
  });
})
