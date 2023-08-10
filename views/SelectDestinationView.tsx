import { Control, UseFieldArrayProps } from "react-hook-form";
import Text from "../components/Text";
import TextInput from "../components/TextInput";

export default function SelectDestinationView({ control, name }: UseFieldArrayProps) {
  return (
    <>
      <Text large bold>
        Where are you going?
      </Text>
      <TextInput
        control={control}
        name={name}
      />
    </>
  )
}