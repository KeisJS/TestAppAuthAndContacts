import getUniqueContactId from '../getUniqueContactId';

describe('Test getContactUniqueId', () => {
  it('default use', () => {
    expect(getUniqueContactId()).toBe(`${getUniqueContactId.prefix}1`);
    expect(getUniqueContactId()).toBe(`${getUniqueContactId.prefix}2`);
  })
})
