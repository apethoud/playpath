import { Formik } from "formik";
import Button from "../../components/Button";
import SelectAmenitiesView from "../../views/SelectAmenitiesView";
import SelectDestinationView from "../../views/SelectDestinationView";
import * as Yup from 'yup';
import Form from "../../components/Form";
import FormSubmitButton from "../../components/FormSubmitButton";
import { View } from "react-native";

const validationSchema = Yup.object().shape({
  destinationAddress: Yup.string()
    .required('Destination address or city is required.')
    .label('Destination Address')
})

interface FormValueTypes {
  destinationAddress: string;
}

export default function SearchCriteriaView() {
  return (
    <Form
      initialValues={{ destinationAddress: '' }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValueTypes) => console.log(values)}>
        <>
          <SelectDestinationView />
          <SelectAmenitiesView />
          <FormSubmitButton 
            text="Find Parks On The Way" 
          />
        </>
      </Form>
  )
}
