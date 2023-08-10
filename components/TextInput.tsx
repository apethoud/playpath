import { Dispatch, SetStateAction } from "react";
import { Control, Controller, UseFieldArrayProps } from "react-hook-form";
import { TextInput as RNTextInput } from "react-native";

export default function CustomTextInput({ control, name }: UseFieldArrayProps) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <RNTextInput
          className="border rounded w-full"
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name={name}
      rules={{ required: true }}
    />
  )
}