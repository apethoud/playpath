import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ContextType {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
}

const DestinationContext = createContext<ContextType | null>(null)

const DestinationProvider = ({ children }: { children: ReactNode }) => {
  const [ destination, setDestination ] = useState("Denver, CO")

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  )
}

export { DestinationContext, DestinationProvider }