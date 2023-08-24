import { View } from "react-native";
import Text from "../components/Text";
import { Field } from "formik";
import CardSelectInput from "../components/CardSelectInput";
import { exampleParkFeatures } from "../api/exampleData";
import { iconNameType } from "../components/Icon";

export interface ParkFeaturesTypes {
  id: number;
  name: string;
  category: string;
  iconName: iconNameType;
}

export default function SelectParkFeaturesView() {
  return (
    <View className="mt-16 mb-4 px-12">
      <View className="mx-2">
        <Text large bold>
          What park features do you need?
        </Text>
        <View className="my-2">
          <Text tiny grey>
            {"(Optional, and you can change these later.)"}
          </Text>
        </View>
      </View>
      <Field
        component={CardSelectInput}
        name="selectedParkFeatures"
        options={exampleParkFeatures}
      />
    </View>
  )
}