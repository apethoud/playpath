import React from 'react';
import Button from './Button';
import { useFormikContext } from 'formik';

interface FormSubmitButtonProps {
  text: string;
}

const FormSubmitButton = ({ text }: FormSubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} text={text} />;
};

export default FormSubmitButton;