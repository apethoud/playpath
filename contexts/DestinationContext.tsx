import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface DestinationType {
  shortAddress: string;
  placeId: string;
};

interface ContextType {
  destination: DestinationType
  setDestination: Dispatch<SetStateAction<DestinationType>>;
}

const DestinationContext = createContext<ContextType | null>(null)

const DestinationProvider = ({ children }: { children: ReactNode }) => {
  const [destination, setDestination] = useState({
    shortAddress: "",
    placeId: ""
  })

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  )
}

export { DestinationContext, DestinationProvider }