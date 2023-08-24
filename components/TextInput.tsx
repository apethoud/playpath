import { TextInput as RNTextInput, View } from "react-native";
import Text from "./Text";
import { FieldProps } from "formik";

type TextInputProps = FieldProps & {
  placeholder: string;
}

export default function TextInput({
  placeholder,
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  ...inputProps
}: TextInputProps) {
  console.log("name is: ", name);
  console.log("value is: ", value);
  return (
    <View className="w-full py-2 flex-row items-center">
      <RNTextInput
        className="border rounded border-neutral-400 flex-1 p-2"
        placeholder={placeholder}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        value={value}
        autoCorrect={false}
        {...inputProps}
      />
      {errors[name] && touched[name] && (
        <>
          <Text>Something went wrong.</Text>
        </>
      )}
    </View>
  )
}

// -----

// function TextInput({ form, field: { name, onChange } }) {
//   return (
//     <RNTextInput 
//     onChangeText={text => onChange(name)(text)}
//     value={value}
//     />
//   )
// }

// const CustomField = <Field
//   component={TextInput}
//   name="destinationAddress"
//   placeholder="Enter Address or city"
// />

// <GooglePlacesAutocomplete
//   textInputProps={{
//     // Doesn't work because inputComp doesn't process Field properly. It expects an input only.
//     inputComp: CustomField
//   }}
// />

// -----

// // If inputComp expects an input only...

// const CustomField = <Field
//   component={FormikGooglePlacesAutocomplete}
//   name="destinationAddress"
//   placeholder="Enter Address or city"
// />

// function FormikGooglePlacesAutocomplete({ field: { name, onBlur, onChange, value }, form: { errors, touched, setFieldTouched }}) {
//   return (
//     <GooglePlacesAutocomplete
//       suppressDefaultStyles
//       textInputProps={{
//         // Doesn't work because inputComp doesn't process Field properly. It expects an input only.
//         inputComp: TextInput // (the one from RN)
//         onChangeText: onChange
//         onBlur: () => {
//           setFieldTouched(name)
//           onBlur(name)
//         })
//         className: "border rounded border-neutral-400 flex-1 p-2"
//       }}
//     />
//   )
// }