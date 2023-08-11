import { View } from "react-native";
import Text from "../components/Text";
import { Field } from "formik";
import CardSelectInput from "../components/CardSelectInput";
import { exampleParkFeatures } from "../api/exampleData";

export interface ParkFeaturesTypes {
  name: string;
  category: string;
}

export default function SelectParkFeaturesView() {
  return (
    <View className="my-4 px-12 bg-purple-200">
      <View className="mx-2">
        <Text large bold>
          What park features do you need?
        </Text>
      </View>
      <Field
        component={CardSelectInput}
        options={exampleParkFeatures}
      />
    </View>
  )
}