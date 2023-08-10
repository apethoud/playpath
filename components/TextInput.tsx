import { Dispatch, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";
import { TextInput as RNTextInput } from "react-native";

export default function TextInput({ control, name }: { control: Control<{ destination: string }>, name: "destination" }) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <RNTextInput
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