import { ReactNode } from "react";
import { Text } from "react-native";

export default function Header({ children, centered }: { children: ReactNode, centered?: boolean }) {
  return (
    <Text 
      style={{ fontFamily: "DMSerifRegular", fontSize: 36, textAlign: centered ? "center" : "left" }}>
      {children}
    </Text>
  )
}
