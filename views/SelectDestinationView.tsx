import { View } from "react-native";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import { Field } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export default function SelectDestinationView() {
  return (
    <View className="my-4 px-12">
      <View className="mx-2">
        <Text large bold>
          Where are you going?
        </Text>
      </View>
      <GooglePlacesAutocomplete 
        placeholder="Enter address or city (GooglePlacesAutocomplete)"
        query={{ key: API_KEY }}
        onPress={(data, details) => {
          console.log("data is: ", data)
          console.log("details is: ", details)
        }}
        onFail={error => console.log(error)}
        onNotFound={() => console.log("No results found.")}
        listEmptyComponent={() => (
          <Text>No results found.</Text>
        )}
      />
      <Field
        component={TextInput}
        name="destinationAddress"
        placeholder="Enter Address or city"
      />
    </View>
  )
}