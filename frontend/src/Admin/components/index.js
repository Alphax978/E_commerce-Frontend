import FormgroupInput from "./Inputs/FormgroupInput.vue";

import DropDown from "./DropDown.vue";
import PaperTable from "./PaperTable.vue";
import Button from "./Button";

import CardShows from "./Cards/CardShows.vue";
import ChartCard from "./Cards/ChartCard.vue";
import StatsCard from "./Cards/StatsCard.vue";

import SidebarPlugin from "./SidebarPlugin/index";

let components = {
  FormgroupInput,
  CardShows,
  ChartCard,
  StatsCard,
  PaperTable,
  DropDown,
  SidebarPlugin,
};

export default components;

export {
  FormgroupInput,
  CardShows,
  ChartCard,
  StatsCard,
  PaperTable,
  DropDown,
  Button,
  SidebarPlugin,
};
