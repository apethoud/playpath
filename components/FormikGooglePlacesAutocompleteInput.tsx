import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { TextInput, ScrollView } from 'react-native';
import Text from '../components/Text';
import { setFieldTouched, useFormikContext } from 'formik'

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export default function FormikGooglePlacesAutocompleteInput({
  name,
  handleChange,
  handleBlur,
  setFieldTouched
}) {
  const formik = useFormikContext();
  return (
    <ScrollView>
      <GooglePlacesAutocomplete
        query={{ key: API_KEY }}
        // suppressDefaultStyles
        textInputProps={{
        //   // inputComp: TextInput,
          onChangeText: () => handleChange(name),
          onBlur: () => {
            setFieldTouched(name)
            handleBlur(name)
          },
          // className: "border rounded border-neutral-400 flex-1 p-2"
        }}
        onPress={(data, details) => {
          console.log("data is: ", data)
          console.log("details is: ", details)
          formik.setFieldValue(name, data.description)
          // also save it to the DestinationContext...
        }}
        onFail={error => console.log(error)}
        onNotFound={() => console.log("No results found.")}
        listEmptyComponent={() => (
          <Text>No results found.</Text>
        )}
        styles={{
          container: {
            flex: 1,
            // zIndex: 10,
            // overflow: 'visible',
            // height: 50,
            // flexGrow: 0,
            // flexShrink: 0,
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



        // styles={{
        //   container: {
        // //     // zIndex: 10,
        // //     // elevation: 300,
        //     // height: 50,
        //     // overflow: 'visible',
        // //     backgroundColor: '#ff9999',
        // //     flexGrow: 0,
        // //     // flexShrink: 0
        //   },
        //   textInputContainer: {
        //     // backgroundColor: "blue"
        //     // height: 50,
        //   },
        //   textInput: {
        //     borderWidth: 1,
        //     borderColor: "#a3a3a3",
        //     borderStyle: "solid",
        //     // height: 50,
        //   }
        // //   listView: {
        // //     position: 'absolute',
        // //     top: 44,
        // //     // left: 10,
        // //     // right: 10,
        // //     backgroundColor: '#9999ff',
        // //     borderRadius: 5,
        // //     borderWidth: 1,
        // //     borderColor: '#dddddd',
        // //     flex: 1,
        // //     // elevation: 3,
        // //     // zIndex: 10
        // //   }
        // }}
      />
    </ScrollView>
  )
}