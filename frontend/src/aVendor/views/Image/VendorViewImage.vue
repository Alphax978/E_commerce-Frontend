<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
       <div class="body flex-grow-1 px-3">
              <div class="container">
                <div class="row">
                <div class="col-12 text-center">
                    <h4 class="pt-3">Product Images</h4>
                    <router-link id="add-image" :to="{name : 'Adminadd Image'}">
                        <button class="btn btn-primary">Add a new Image</button>
                    </router-link>
                </div>
                </div>

                <div class="row">
                <div v-for="image of images" :key="image.name" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                    <ImageBox :image="image"></ImageBox>
                </div>
                </div>
            </div>
        </div>

   
        <div></div>
      <AppFooter />
    </div>

    
  </div>
    
</template>


<script>
const axios = require('axios');
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'
import ImageBox from '../../components/ImageBox.vue'
export default {
     components:{
        AppFooter,
        AppHeader,
        AppSidebar,
        ImageBox,
       
    },
    data() {
      return {
          images : null,
      }
    },
    props : ["baseURL"],
    methods : {
        async fetchImages(){
        // fetch products
        await axios.get(this.baseURL + "/backend/vendor/fileUpload/")
            .then(res => this.images = res.data)
            .catch(err => console.log(err));
        }
    },
    mounted() {
        if (!localStorage.getItem('token')) {
        this.$router.push({name : 'Signin'});
        return;
        }
        this.fetchImages();
    }
  
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>