import Text from "../components/Text";
import { Control } from "react-hook-form"
import TextInput from "../components/TextInput";

export default function SelectDestinationView({ control, name }: { control: Control<{ destination: string }>, name: "destination" }) {
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