import { Pressable, View } from "react-native";
import Text from "./Text";
import { useRouter } from "expo-router";

export default function Button({ navTo, secondary, text }: { navTo: string, secondary?: boolean, text: string }) {
  const navigation = useRouter()

  return (
    <Pressable onPress={() => {
      navigation.push(navTo)
    }}>
      <View className="px-2 py-1 bg-neutral-600 rounded-lg">
        <Text light={!secondary}>{text}</Text>
      </View>
    </Pressable>
  )
}
