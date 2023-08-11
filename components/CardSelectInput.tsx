import { View } from "react-native";
import Text from "./Text";
import { FieldProps } from "formik";
import { useState } from "react";
import FormCard from "./FormCard";

type TextInputProps = FieldProps & {
  options: {
    name: string;
    category: string;
  }[]
}

export default function CardSelectInput({
  options,
  field: { name, onChange, value },
  form: { errors, touched, setFieldTouched },
  ...inputProps
}: TextInputProps) {
  const [ selectedOptions, setSelectedOptions ] = useState([])

  return (
    <View className="w-full py-2 flex-row items-center">
      <View className="flex-1 flex-row flex-wrap justify-between">
        {options && options.map(option => (
          <FormCard option={option} />
        ))}
      </View>
    </View>
  )
}