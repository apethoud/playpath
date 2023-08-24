import SelectParkFeaturesView from "../../views/SelectParkFeaturesView";
import SelectDestinationView from "../../views/SelectDestinationView";
import * as Yup from 'yup';
import { Formik } from "formik";
import FormSubmitButton from "../../components/FormSubmitButton";

const validationSchema = Yup.object().shape({
  destinationAddress: Yup.string()
    .required('Destination address or city is required.')
    .label('Destination Address'),
  selectedParkFeatures: Yup.array()
    .of(Yup.string())
    .label('Park Features')
})

interface FormValueTypes {
  destinationAddress: string;
  selectedParkFeatures: string[];
}

export default function SearchCriteriaView() {
  return (
    <Formik
      initialValues={{ destinationAddress: '', selectedParkFeatures: [] }}
      // validationSchema={validationSchema}
      validator={() => ({})}
      onSubmit={(values: FormValueTypes) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, setFieldTouched, values }) => (
          <>
            <SelectDestinationView
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldTouched={setFieldTouched}
            />
            <SelectParkFeaturesView />
            <FormSubmitButton
              text="Find Parks On The Way"
            />
          </>
        )}
      </Formik>
  )
}
