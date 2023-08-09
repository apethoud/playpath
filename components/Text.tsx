import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({ 
  children, 
  light,
}: { 
  children: ReactNode, 
  light?: boolean,
}) {
  return (
    <RNText 
      style={{ fontFamily: "DMSansRegular" }}
      // The tailwind compiler only processes valid tailwind classes that it sees in the files at the time of compilation of each individual file, so it won't accurately interpret class names that are assembled together after that time, such as this text size logic.
      className={`text-xl ${light ? "text-neutral-50" : "text-neutral-900"}`}>
      {children}
    </RNText>
  )
}
