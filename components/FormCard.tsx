import { Pressable, View } from "react-native";
import Text from "./Text";
import { Dispatch, SetStateAction } from "react";
import { ParkFeaturesTypes } from "../views/SelectParkFeaturesView";
import Icon from "./Icon";

export default function FormCard({ 
  option,
  index,
  selected,
  selectedOptions,
  setSelectedOptions
}: {
  option: ParkFeaturesTypes,
  index: number,
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
    <View className={`w-1/2 my-3 ${index % 2 ? "pl-3" : "pr-3"}`}>
      <Pressable 
        className={
          `border rounded p-2 w-full flex items-center flex-col
          ${selected 
            ? "bg-water-tribe-blue-200 border-water-tribe-blue-400 shadow-lg" 
            : "bg-neutral-50 border-neutral-200 shadow"}`
        }
        onPress={() => toggleCardSelection(option.name)}>
        <Icon name={option.iconName} />
        <Text tiny centered>{option.name}</Text>
        {selected && (
          <View className="absolute top-2 left-2">
            <Icon name="checkmark" />
          </View>
        )}
      </Pressable>
    </View>
  )
}
