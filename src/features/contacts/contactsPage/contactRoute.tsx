import { generatePath } from 'react-router-dom';

const baseContacts = '/contacts';
const editById = `${baseContacts}/edit/:id`;
export const newId = 'new';

const contactRoute = {
  path: baseContacts,
  child: {
    editById: {
      path: editById,
      getPath: ({ id }: { id: string | number }) => generatePath(editById, { id: String(id) })
    },
    editNew: {
      path: generatePath(editById, { id: newId })
    },
  }
}

export default contactRoute;
