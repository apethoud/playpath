import { Pressable, View } from "react-native";
import Text from "./Text";

export default function Button({ onPress, secondary, text }: { onPress: () => void, secondary?: boolean, text: string }) {
  return (
    <Pressable onPress={onPress}>
      <View className={`px-4 py-2 ${secondary ? "bg-white" : "bg-earth-kingdom-green-600"} rounded-lg`}>
        <Text white={!secondary}>{text}</Text>
      </View>
    </Pressable>
  )
}
