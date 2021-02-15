import { FormikConfig } from 'formik';
import { ContactUserField } from '../interfaces';

export default  {
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
