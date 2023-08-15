import { Pressable, View } from "react-native";
import Text from "./Text";
import { Dispatch, SetStateAction } from "react";
import { ParkFeaturesTypes } from "../views/SelectParkFeaturesView";

export default function FormCard({ 
  option,
  selected,
  selectedOptions,
  setSelectedOptions
}: {
  option: ParkFeaturesTypes,
  selected: boolean,
  selectedOptions: string[],
  setSelectedOptions: (v: string[]) => void
}) {
  const toggleCardSelection = (cardName: string) => {
    // if name is already in selectedOptions, remove it. If not, add it.
    if (selectedOptions.some(o => o === cardName)) {
      const filteredOptions = selectedOptions.filter(o => o !== cardName)
      setSelectedOptions(filteredOptions)
    } else {
      const tempOptions = [...selectedOptions]
      tempOptions.push(cardName)
      setSelectedOptions(tempOptions)
    }
  }
  return (
    <Pressable 
      className={
        `border rounded p-2 w-5/12 mb-4 flex flex-col
        ${selected ? "bg-green-400" : "bg-transparent"}`
      }
      onPress={() => toggleCardSelection(option.name)}>
      <View className="w-18 h-12 bg-blue-400 m-2" />
      <Text tiny centered>{option.name}</Text>
    </Pressable>
  )
}