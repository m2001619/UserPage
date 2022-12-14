import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faHeart,
  faGear,
  faDiagramProject,
  faGraduationCap,
  faSearch,
  faDollarSign,
  faCode,
  faUser,
  faSpinner,
  faCheck,
  faXmark,
  faServer,
  faStar,
  faPhone,
  faCodeCommit,
  faDownload,
  faAnglesUp,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";

const fontAwesomeIcons = (): void =>
  library.add(
    faCheckSquare,
    faCoffee,
    faHeart,
    faGear,
    faDiagramProject,
    faGraduationCap,
    faSearch,
    faDollarSign,
    faCode,
    faUser,
    faSpinner,
    faCheck,
    faXmark,
    faServer,
    faStar,
    faPhone,
    faCodeCommit,
    faDownload,
    faAnglesUp,
    faFileCsv
  );

export default fontAwesomeIcons;
