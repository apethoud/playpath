import { View } from "react-native";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import { Field } from "formik";

export default function SelectDestinationView() {
  return (
    <View className="my-4 px-12 bg-orange-200">
      <View className="mx-2">
        <Text large bold>
          Where are you going?
        </Text>
      </View>
      <Field
        component={TextInput}
        name="destinationAddress"
        placeholder="Enter Address or city"
      />
    </View>
  )
}