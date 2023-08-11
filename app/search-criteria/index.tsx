import SelectParkFeaturesView from "../../views/SelectParkFeaturesView";
import SelectDestinationView from "../../views/SelectDestinationView";
import * as Yup from 'yup';
import Form from "../../components/Form";
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
    <Form
      initialValues={{ destinationAddress: '' }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValueTypes) => console.log(values)}>
        <>
          <SelectDestinationView />
          <SelectParkFeaturesView />
          <FormSubmitButton 
            text="Find Parks On The Way" 
          />
        </>
      </Form>
  )
}
