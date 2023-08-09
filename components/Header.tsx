import { ReactNode } from "react";
import Text from "./Text";

export default function Header({ 
  children, 
  centered, 
  displaySerif,
  huge,
  large,
  small
}: { 
  children: ReactNode, 
  centered?: boolean,
  displaySerif?: boolean,
  huge?: boolean,
  large?: boolean,
  small?: boolean,
}) {
  return (
    <Text 
      displaySerif={displaySerif}
      centered={centered}
      huge={huge}
      large={large}
      small={small}>
      {children}
    </Text>
  )
}
