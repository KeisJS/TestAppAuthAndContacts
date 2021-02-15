import { uniqueId } from 'lodash';

interface GetContactUniqueId {
  (): string;
  prefix: string;
}

const getUniqueContactId = (() => {
  return uniqueId(getUniqueContactId.prefix);
}) as GetContactUniqueId;

getUniqueContactId.prefix = 'contactTmpId_';

export default getUniqueContactId;
