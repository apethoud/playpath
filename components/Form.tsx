import React from 'react';
import { Formik } from 'formik';

export default function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: any) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
        {() => <>{children}</>}
    </Formik>
  );
};