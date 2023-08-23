import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ContextType {
  apiKey: string;
}

const GoogleMapsApiKeyContext = createContext<ContextType | null>(null)

const GoogleMapsApiKeyProvider = ({ children }: { children: ReactNode }) => {
  const [ apiKey, setApiKey ] = useState(null)

  return (
    <GoogleMapsApiKeyContext.Provider value={{ apiKey, setApiKey }}>
      {children}
    </GoogleMapsApiKeyContext.Provider>
  )
}

export { GoogleMapsApiKeyContext, GoogleMapsApiKeyProvider }