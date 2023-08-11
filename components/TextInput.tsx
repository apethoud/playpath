import { TextInput as RNTextInput } from "react-native";
import Text from "./Text";
import { FieldProps } from "formik";

type TextInputProps = FieldProps & {
  placeholder: string;
}

export default function TextInput({
  placeholder,
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  ...inputProps
}: TextInputProps) {
  return (
    <>
      <RNTextInput
        className="border rounded w-full"
        placeholder={placeholder}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        value={value}
        autoCorrect={false}
        {...inputProps}
      />
      {errors[name] && touched[name] && (
        <>
          <Text>Something went wrong.</Text>
        </>
      )}
    </>
  )
}