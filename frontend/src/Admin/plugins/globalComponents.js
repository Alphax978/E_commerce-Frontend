import { FormgroupInput, CardShows, DropDown, Button } from "../components/index";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("fg-input", FormgroupInput);
    Vue.component("drop-down", DropDown);
    Vue.component("cardShows", CardShows);
    Vue.component("p-button", Button);
  },
};

export default GlobalComponents;