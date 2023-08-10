import Button from "../../components/Button";
import SelectAmenitiesView from "../../views/SelectAmenitiesView";
import SelectDestinationView from "../../views/SelectDestinationView";
import { useForm } from "react-hook-form"

export default function SearchCriteriaView() {
  const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      destination: "",
    }
  })

  const onSubmit = (data: { destination: string }) => {
    console.log("data is: ", data)
  }

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);

  return (
    <>
      <SelectDestinationView
       control={control}
       name="destination" 
      />
      <SelectAmenitiesView />
      <Button 
        text="Find Parks On The Way" 
        onPress={handleSubmit(onSubmit)} 
      />
    </>
  )
}
