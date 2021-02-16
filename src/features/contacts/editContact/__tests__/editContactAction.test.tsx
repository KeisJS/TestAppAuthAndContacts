import editContactFactory from '../editContactAction';
import getTestContact from '../../utils/getTestContact';
import contactThunk from '../../store/contactThunk';
import { routes } from '../../../routes';

jest.mock('../../store/contactThunk');

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
    
    expect(contactThunk.create).toHaveBeenCalledWith(contact);
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
    expect(contactThunk.update).toHaveBeenCalledWith(contact);
  });
})
