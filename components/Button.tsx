import { Pressable, View } from "react-native";
import Text from "./Text";
import { useRouter } from "expo-router";

export default function Button({ onPress, secondary, text }: { onPress: () => void, secondary?: boolean, text: string }) {
  return (
    <Pressable onPress={onPress}>
      <View className="px-2 py-1 bg-neutral-600 rounded-lg">
        <Text light={!secondary}>{text}</Text>
      </View>
    </Pressable>
  )
}
