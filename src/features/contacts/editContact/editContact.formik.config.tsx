import { FormikConfig } from 'formik';
import { Contact } from '../interfaces';

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
} as FormikConfig<Contact>
