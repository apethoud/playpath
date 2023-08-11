import Text from "../components/Text";
import TextInput from "../components/TextInput";
import { Field } from "formik";

export default function SelectDestinationView() {
  return (
    <>
      <Text large bold>
        Where are you going?
      </Text>
      <Field
        component={TextInput}
        name="destinationAddress"
        placeholder="Enter Address or city"
      />
    </>
  )
}