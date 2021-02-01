export interface AuthFormValues {
  login: string;
  password: string;
}

export interface AuthFormProps {
  onSubmit(
    values: AuthFormValues,
    bugs: { setSubmitting(a: boolean): void }
  ): void;
}
