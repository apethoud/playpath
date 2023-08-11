import { TextInput as RNTextInput, View } from "react-native";
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
    <View className="w-full py-2 flex-row items-center">
      <RNTextInput
        className="border rounded flex-1 p-2"
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
    </View>
  )
}