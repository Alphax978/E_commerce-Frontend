<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <CContainer >
            <router-view />
            <WidgetsStatsA/>
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import { CContainer } from '@coreui/vue'
import AppFooter from '../components/AppFooter.vue'
import AppHeader from '../components/AppHeader.vue'
import AppSidebar from '../components/AppSidebar.vue'
import WidgetsStatsA from '../views/widgets/WidgetsStatsTypeA.vue'


export default {
  name: 'vendorLayout',
  components: {
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
    WidgetsStatsA,
   
  },
  mounted(){
    this.token = localStorage.getItem("token");
  }
  
}
</script>

<style lang="scss">
@import '../styles/style';
</style>
