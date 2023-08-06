import { ReactNode } from "react";
import { Text as RNText } from "react-native";

type TailwindTextSizes =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"

export default function Text({ 
  children, 
  light,
  size
}: { 
  children: ReactNode, 
  light?: boolean,
  size?: TailwindTextSizes
}) {
  return (
    <RNText 
      style={{ fontFamily: "DMSansRegular" }}
      className={`text-${size ? size : "lg"} ${light ? "text-neutral-50" : "text-neutral-900"}`}>
      {children}
    </RNText>
  )
}