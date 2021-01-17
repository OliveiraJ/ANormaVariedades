import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faHome, faSearch , faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faHome, faSearch, faQuestionCircle);

Vue.component("fa-icon", FontAwesomeIcon);
