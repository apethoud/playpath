import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({ children }: { children: ReactNode}) {
  return (
    <RNText style={{ fontFamily: "DMSansRegular", fontSize: 18 }}>
      {children}
    </RNText>
  )
}