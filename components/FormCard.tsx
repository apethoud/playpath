import { View } from "react-native";
import Text from "./Text";

export default function FormCard({ option }) {
  return (
    <View className="border rounded p-2 w-5/12 mb-4 flex flex-col">
      <View className="w-18 h-12 bg-blue-400 m-2" />
      <Text tiny centered>{option.name}</Text>
    </View>
  )
}