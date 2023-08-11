import { View } from "react-native";
import Text from "./Text";
import { FieldProps } from "formik";

type TextInputProps = FieldProps & {
  options: {
    name: string;
    category: string;
  }[]
}

export default function CardSelectInput({
  options,
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  ...inputProps
}: TextInputProps) {
  return (
    <View className="w-full py-2 flex-row items-center">
      <View className="flex-1">
        <Text>CardSelectInput</Text>
      </View>
    </View>
  )
}