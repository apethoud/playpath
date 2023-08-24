import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { TextInput, ScrollView } from 'react-native';
import Text from '../components/Text';
import { setFieldTouched, useFormikContext } from 'formik'
import { useContext } from 'react'
import { DestinationContext } from '../contexts/DestinationContext'

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export default function FormikGooglePlacesAutocompleteInput({
  name,
  handleChange,
  handleBlur,
  setFieldTouched
}) {
  const formik = useFormikContext();
  const { setDestination } = useContext(DestinationContext);
  return (
    <ScrollView>
      <GooglePlacesAutocomplete
        query={{ key: API_KEY }}
        textInputProps={{
          onChangeText: () => handleChange(name),
          onBlur: () => {
            setFieldTouched(name)
            handleBlur(name)
          },
        }}
        onPress={(data, details) => {
          formik.setFieldValue(name, data.description)
          setDestination({
            shortAddress: data.structured_formatting.main_text,
            placeId: data.place_id
          })
        }}
        onFail={error => console.log(error)}
        onNotFound={() => console.log("No results found.")}
        listEmptyComponent={() => (
          <Text>No results found.</Text>
        )}
        styles={{
          container: {
            flex: 1,
          },
          textInputContainer: {
            flexDirection: 'row',
          },
          textInput: {
            backgroundColor: '#FFFFFF',
            height: 44,
            borderWidth: 1,
            borderColor: '#a3a3a3',
            borderStyle: "solid",
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 15,
            flex: 1,
            marginBottom: 5,
          },
          listView: {
            borderWidth: 1,
            borderColor: '#c8c7cc',
            borderStyle: 'solid',
            borderRadius: 5,
          },
          row: {
            backgroundColor: '#FFFFFF',
            padding: 13,
            minHeight: 44,
            flexDirection: 'row',
          },
          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          },
          description: {},
          separator: {
            height: 1,
            backgroundColor: '#c8c7cc',
          },
          poweredContainer: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: '#c8c7cc',
            borderTopWidth: 0.5,
          },
          powered: {},
        }}
      />
    </ScrollView>
  )
}