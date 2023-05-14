<template>
  <CBreadcrumb class="d-md-down-none me-auto mb-0">
    <CBreadcrumbItem>
      <div v-for="alltoken in alltokens" :key="alltoken.id">
        <div class="txt" v-if="token == alltoken.token">
          Welcome: {{alltoken.vendor.firstName}}
        </div>
      </div>
    </CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script>
// import { onMounted, ref } from 'vue'
// import router from '@/router';
import axios from 'axios'

export default {
  name: 'AppBreadcrumb',
  data(){
    return{
      alltokens:[],
      token:null,
      baseURL:"http://localhost:8084"
    }
  },
  methods:{
    getTokens(){
      axios
        .get(`${this.baseURL}/backend/token/showsall`)
        .then((res) => (this.alltokens = res.data))
        .catch((err) => console.log(err));


    }
  },
  mounted(){
    this.token = localStorage.getItem("token");
    this.getTokens();

  }

}
</script>

<style scoped>
.txt {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>

