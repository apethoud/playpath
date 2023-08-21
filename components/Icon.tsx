import Balloons from "../assets/icons/Balloons";
import PawPrint from "../assets/icons/PawPrint";
import PicnicTable from "../assets/icons/PicnicTable";
import PublicRestroom from "../assets/icons/PublicRestroom";
import Slide from "../assets/icons/Slide";
import Swings from "../assets/icons/Swings";
import WheelchairCircle from "../assets/icons/WheelchairCircle";
import Wheelchair from "../assets/icons/Wheelchair";

export type iconNameType = "balloons" | "pawPrint" | "picnicTable" | "publicRestroom" | "slide" | "swings" | "wheelchair" | "wheelchairCircle"

const icons = {
  balloons: Balloons,
  pawPrint: PawPrint,
  picnicTable: PicnicTable,
  publicRestroom: PublicRestroom,
  slide: Slide,
  swings: Swings,
  wheelchair: Wheelchair,
  wheelchairCircle: WheelchairCircle,
}

export default function Icon({ name }: { name: iconNameType }) {
  const SpecificIcon = icons[name];
  return <SpecificIcon />
}