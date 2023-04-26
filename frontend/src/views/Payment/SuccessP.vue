<template>
  <div class="text-center">
    <h1>Success</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'PaymentSuccess',
    props:["baseURL"],
    data() {
    return {
      token: null,
      sessionId:null
    }
  },
  methods:{
      saveOrder() { 
           axios.post(this.baseURL+"/backend/order/add/?token="+this.token+"&sessionId="+this.sessionId)
                  .then(()=>{
                     window.location.href = '/'
                  }).catch((error)=>{
                    console.log(error);
                  })
      }
  },
  mounted(){
      this.token = localStorage.getItem("token");
      this.sessionId = localStorage.getItem("sessionId");
      this.saveOrder()
  }
}
</script>