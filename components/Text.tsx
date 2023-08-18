import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({ 
  children, 
  displaySerif,
  green,
  white,
  huge,
  large,
  small,
  tiny,
  bold,
  centered
}: { 
  children: ReactNode, 
  displaySerif?: boolean,
  green?: boolean,
  white?: boolean,
  huge?: boolean,
  large?: boolean,
  small?: boolean,
  tiny?: boolean,
  bold?: boolean,
  centered?: boolean
}) {
  return (
    <RNText 
      style={{ 
        fontFamily: displaySerif ? "DMSerifRegular" : bold ? "DMSansBold" : "DMSansRegular"
      }}
      className={`
        ${huge ? "text-4xl" : large ? "text-xl" : small ? "text-base" : tiny? "text-sm" : "text-lg"}
        ${bold ? "font-bold" : "font-normal"}
        ${green ? "text-elf-green-700" : white ? "text-neutral-50" : "text-neutral-900"}
        ${centered ? "text-center" : "text-left"}
      `}>
      {children}
    </RNText>
  )
}
