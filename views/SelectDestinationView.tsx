import { View } from "react-native";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import { Field } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FormikGooglePlacesAutocompleteInput from '../components/FormikGooglePlacesAutocompleteInput';

export default function SelectDestinationView({ handleChange, handleBlur, setFieldTouched }) {
  return (
    <View className="my-4 px-12 w-full" style={{ zIndex: 9000, elevation: 100 }}>
      <View className="mx-2">
        <Text large bold>
          Where are you going?
        </Text>
      </View>
      <FormikGooglePlacesAutocompleteInput
        name="destinationAddress"
        handleChange={handleChange}
        handleBlur={handleBlur}
        setFieldTouched={setFieldTouched}
        placeholder="Enter Address or city"
      />
    </View>
  )
}