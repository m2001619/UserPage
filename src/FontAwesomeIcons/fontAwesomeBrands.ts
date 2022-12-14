import {
  fab,
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const fontAwesomeIcons = (): void =>
  library.add(fab, faTwitter, faFacebookF, faYoutube, faLinkedin);

export default fontAwesomeIcons;
