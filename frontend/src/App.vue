<template>
<div>
    <NavbarShow  />
    <!-- <router-view
      v-if="categories && products"
      style="min-height: 60vh"
      :baseURL="baseURL"
      :categories="categories"
      :products="products"
      @fetchData="fetchData"
    >
    </router-view> -->

</div>
</template>

<script>
import NavbarShow from './components/NavbarShow';
// import FooterShow from './components/FooterShow';
// import axios from 'axios';
export default {
  components: { NavbarShow},

};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>