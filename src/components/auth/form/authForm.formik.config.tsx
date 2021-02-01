import { FormikConfig, FormikErrors } from 'formik';
import { AuthFormValues } from './interfaces';

const requireField = 'Field is not be empty';

export const authFormFormikConfig: FormikConfig<AuthFormValues> = {
  initialValues: {
    login: '',
    password: ''
  },
  onSubmit: (values, { setSubmitting }) => {},
  validate: values => {
    const errors: FormikErrors<AuthFormValues> = {};
    
    if (!values.login) {
      errors.login = requireField;
    }
    
    if (!values.password) {
      errors.password = requireField;
    }
    
    return errors;
  },
  initialErrors: {
    login: '*'
  }
}
