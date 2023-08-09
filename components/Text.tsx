import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({ 
  children, 
  displaySerif,
  light,
  huge,
  large,
  small,
  bold,
  centered
}: { 
  children: ReactNode, 
  displaySerif?: boolean,
  light?: boolean,
  huge?: boolean,
  large?: boolean,
  small?: boolean,
  bold?: boolean,
  centered?: boolean
}) {
  return (
    <RNText 
      style={{ fontFamily: displaySerif ? "DMSerifRegular" : bold ? "DMSansBold" : "DMSansRegular" }}
      // The tailwind compiler only processes valid tailwind classes that it sees in the files at the time of compilation of each individual file, so it won't accurately interpret class names that are assembled together after that time, such as this text size logic.
      className={`
        ${huge ? "text-3xl" : large ? "text-xl" : small ? "text-base" : "text-lg"}
        ${bold ? "font-bold" : "font-normal"}
        ${light ? "text-neutral-50" : "text-neutral-900"}
        ${centered ? "text-center" : "text-left"}
      `}>
      {children}
    </RNText>
  )
}
