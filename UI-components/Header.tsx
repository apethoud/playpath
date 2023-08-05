import { ReactNode } from "react";
import { Text } from "react-native";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <Text style={{ fontFamily: "DMSerifDisplayRegular" }}>
      {children}
    </Text>
  )
}