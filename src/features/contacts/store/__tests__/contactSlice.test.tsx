import contactSlice, { initialContactState } from '../contactSlice';
import { Contact } from '../../interfaces';

describe('Test contactSlice', () => {
  const { reducer, actions, thunk } = contactSlice;
  let contacts: Contact[];
  let testState: typeof initialContactState;
  let testContact: Partial<Contact>;
  
  beforeEach(() => {
    contacts = Array(3).fill('').map((v, index) => ({
      id: index,
      name: `name_${index}`,
      phone: `phone${index}`
    }));
    
    testState = {
      contacts
    }
    
    testContact = { name: 'testName', phone: '123123123' };
  })
  
  it('Test initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialContactState);
  });
  
  it('Test create new contact', () => {
    testContact.id = 'temp_1';
    
    expect(reducer(testState, { type: thunk.create.fulfilled, payload: testContact }).contacts).toEqual(
      [testContact, ...contacts]
    );
  });
  
  it('Test remove contact', () => {
    const testId = 1;
    
    expect(reducer(testState, actions.remove(testId)).contacts).not.toContainEqual(
      expect.objectContaining({ id: testId })
    );
  });
  
  it('Test update contact', () => {
    const testUpdatedContact: Contact = {
      id: 2,
      name: 'update name',
      phone: '22222-22222'
    }
    
    const { contacts } = reducer(testState, { type: thunk.update.fulfilled, payload: testUpdatedContact });
    const updatedContacts = contacts.filter(contact => contact.id === testUpdatedContact.id);
    
    expect(updatedContacts).toHaveLength(1);
    expect(updatedContacts[0]).toEqual(testUpdatedContact);
  });
})
