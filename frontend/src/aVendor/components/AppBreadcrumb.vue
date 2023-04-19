<template>
  <CBreadcrumb class="d-md-down-none me-auto mb-0">
    <CBreadcrumbItem>
      <div v-for="alltoken in alltokens" :key="alltoken.id">
        <div class="txt" v-if="token == alltoken.token">
          Welcome {{alltoken.vendor.firstName}}
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
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:ital,wght@1,600&display=swap');
.txt{
  font-family: 'Sofia Sans Condensed', sans-serif;
  font-size: 21px;
}
</style>


