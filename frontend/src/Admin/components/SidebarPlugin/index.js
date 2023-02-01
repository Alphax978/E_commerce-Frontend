import Sidebar from "./SideBar.vue";
import SidebarLink from "./SidebarLink";

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(Vue) {
    let app = new Vue({
      data()
       {
        return{
        sidebarStore: SidebarStore,


        }
        
      },
    });

    Vue.prototype.$sidebar = app.sidebarStore;
    Vue.component("side-bar", Sidebar);
    Vue.component("sidebar-link", SidebarLink);
  },
};

export default SidebarPlugin;
