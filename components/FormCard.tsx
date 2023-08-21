import { Pressable, View } from "react-native";
import Text from "./Text";
import { Dispatch, SetStateAction } from "react";
import { ParkFeaturesTypes } from "../views/SelectParkFeaturesView";
import Icon from "./Icon";

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
        `border rounded p-2 w-5/12 mb-4 flex items-center flex-col
        ${selected 
          ? "bg-neutral-200 border-neutral-400 shadow-lg" 
          : "bg-white border-neutral-300 shadow"}`
      }
      onPress={() => toggleCardSelection(option.name)}>
      <Icon name={option.iconName} />
      <Text tiny centered>{option.name}</Text>
    </Pressable>
  )
}