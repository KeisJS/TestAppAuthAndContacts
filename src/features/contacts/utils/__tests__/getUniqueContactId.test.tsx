import getUniqueContactId from '../getUniqueContactId';
import getContacts from '../getTestContact';

describe('Test getContactUniqueId', () => {
  it('Test One contact call', () => {
    expect(getUniqueContactId()).toBe(`${getUniqueContactId.prefix}1`);
    expect(getUniqueContactId()).toBe(`${getUniqueContactId.prefix}2`);
  });
  
  it('Test n - contacts call', () => {
    const contacts = getContacts(3);
    
    expect(contacts).toHaveLength(3);
  })
})
