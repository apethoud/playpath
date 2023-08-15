import { View } from "react-native";
import Text from "./Text";
import { FieldProps } from "formik";
import { useEffect, useState } from "react";
import FormCard from "./FormCard";
import { ParkFeaturesTypes } from "../views/SelectParkFeaturesView";

type TextInputProps = FieldProps & {
  options: ParkFeaturesTypes[]
}

export default function CardSelectInput({
  options,
  field: { name, onChange, value },
  form: { errors, touched, setFieldTouched, setFieldValue },
  ...inputProps
}: TextInputProps) {
  // const [ selectedOptions, setSelectedOptions ] = useState<string[]>([])
  // console.log("selectedOptions is: ", selectedOptions)

  // useEffect(() => {
  //   console.log("selectedOptions in useEffect: ", selectedOptions)
  //   console.log("onChange is: ", onChange)
  //   onChange(name)(selectedOptions)
  // }, [onChange, selectedOptions])

  const setValue = (v) => {
    setFieldValue(name, v)
  }

  // const updateSelectedOptions = (updatedOptions) => {
  //   console.log("updatedOptions is: ", updatedOptions)
  //   console.log("onChange(name) is: ", onChange(name))
  //   console.log("onChange(name)(updatedOptions) is: ", onChange(name)(updatedOptions))
  //   onChange(name)(updatedOptions)
  // }

  return (
    <View className="w-full py-2 flex-row items-center">
      <View className="flex-1 flex-row flex-wrap justify-between">
        {options && options.map(option => (
          <FormCard 
            option={option}
            selected={value.some(o => o === option.name)}
            selectedOptions={value}
            setSelectedOptions={setValue}
          />
        ))}
      </View>
    </View>
  )
}