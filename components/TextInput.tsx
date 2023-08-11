import { TextInput as RNTextInput } from "react-native";
import Text from "./Text";

export default function TextInput({
  placeholder,
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  ...inputProps
}) {
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
      {errors[name] && touched[name]}
      <Text>{errors[name]}</Text>
    </>
  )
}