import { View } from "react-native";
import Text from "../components/Text";
import { Field } from "formik";
import CardSelectInput from "../components/CardSelectInput";
import { exampleParkFeatures } from "../api/exampleData";

export interface ParkFeaturesTypes {
  id: number;
  name: string;
  category: string;
}

export default function SelectParkFeaturesView() {
  return (
    <View className="my-4 px-12">
      <View className="mx-2">
        <Text large bold>
          What park features do you need?
        </Text>
      </View>
      <Field
        component={CardSelectInput}
        name="selectedParkFeatures"
        options={exampleParkFeatures}
      />
    </View>
  )
}