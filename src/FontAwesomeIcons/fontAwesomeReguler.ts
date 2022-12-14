import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faChartBar,
  faUser,
  faCircleUser,
  faFile,
  faCreditCard,
  faBell,
  faRectangleList,
  faCheckCircle,
  faRectangleXmark,
  faTrashCan,
  faComments,
  faStar,
  faEnvelope,
  faFaceSmile,
  faNewspaper,
  faFilePdf,
  faImages,
  faFileWord,
} from "@fortawesome/free-regular-svg-icons";

const fontAwesomeRegular = (): void =>
  library.add(
    faHeart,
    faChartBar,
    faUser,
    faCircleUser,
    faFile,
    faCreditCard,
    faBell,
    faRectangleList,
    faCheckCircle,
    faRectangleXmark,
    faTrashCan,
    faComments,
    faStar,
    faEnvelope,
    faFaceSmile,
    faNewspaper,
    faFilePdf,
    faImages,
    faFileWord
  );

export default fontAwesomeRegular;
