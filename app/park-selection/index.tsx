import { useContext } from "react";
import Text from "../../components/Text";
import { DestinationContext } from "../../contexts/DestinationContext";
import { View } from "react-native";

export default function ParkSelectionView() {
  const destination = useContext(DestinationContext);
  const loading = false;
  return (
    <View className="my-4 px-6 w-full">
      {destination && !loading ? (
        <>
          <View className="px-6">
            <Text large green displaySerif>Parks on the way to</Text>
            <Text large green displaySerif>{destination.destination.shortAddress}</Text>
          </View>
          <View>
            {/* Map goes here */}
            <View className="my-4 w-full h-72 bg-slate-400 rounded" />
          </View>
        </>
      ) : (
          <Text>Loading...</Text>
      )}
    </View>
  )
}