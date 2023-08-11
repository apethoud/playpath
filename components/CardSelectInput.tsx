import { View } from "react-native";
import Text from "./Text";
import { FieldProps } from "formik";
import { useState } from "react";
import FormCard from "./FormCard";
import { ParkFeaturesTypes } from "../views/SelectParkFeaturesView";

type TextInputProps = FieldProps & {
  options: ParkFeaturesTypes[]
}

export default function CardSelectInput({
  options,
  field: { name, onChange, value },
  form: { errors, touched, setFieldTouched },
  ...inputProps
}: TextInputProps) {
  const [ selectedOptions, setSelectedOptions ] = useState<string[]>([])
  console.log("selectedOptions is: ", selectedOptions)

  return (
    <View className="w-full py-2 flex-row items-center">
      <View className="flex-1 flex-row flex-wrap justify-between">
        {options && options.map(option => (
          <FormCard 
            option={option}
            selected={selectedOptions.some(o => o === option.name)}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        ))}
      </View>
    </View>
  )
}