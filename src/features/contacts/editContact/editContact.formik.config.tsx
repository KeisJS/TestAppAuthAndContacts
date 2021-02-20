import { FormikConfig } from 'formik';
import { ContactUserField } from '../interfaces';

export default function getEditContactFormikConfig() {
  return {
    initialValues: {
      name: '',
      phone: ''
    },
    initialErrors: {
      name: '*'
    },
    validate: () => ({}),
    onSubmit: () => {}
  } as FormikConfig<ContactUserField>
}

