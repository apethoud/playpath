import Text from "../../components/Text";
import SelectAmenitiesView from "../../views/SelectAmenitiesView";
import SelectDestinationView from "../../views/SelectDestinationView";

export default function SearchCriteriaView() {
  return (
    <>
      <SelectDestinationView />
      <SelectAmenitiesView />
    </>
  )
}
