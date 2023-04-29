

<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />

      <div class="body flex-grow-1 px-3">
            <div class="container">


                <div class="row">
                    <div class="col-12 text-center">
                        <h2>Add Category</h2>
                    </div>
                </div>


                <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" v-model="categoryName" />
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea type="text" class="form-control" v-model="description"/>
                        </div>
                        <div class="form-group">
                            <label>Image</label>
                            <input type="text" class="form-control" v-model="imageUrl">
                        </div>
                        <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
                    </form>
                </div>
                <div class="col-3"></div>
                </div>


            </div>
        </div>
    
      <AppFooter />
    </div>

    
  </div>
</template>

<script>
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'
const axios = require("axios");
const sweetalert = require('sweetalert');
export default {
    components:{
        AppFooter,
        AppHeader,
        AppSidebar,
       
    },

    data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: "",
        }

    },
    methods: {
        addCategory()
        {
            console.log(this.categoryName, this.description);
                const newCategory = {
                    categoryName: this.categoryName,
                    description: this.description,
                    imageUrl: this.imageUrl,
                };

                const baseURL = "http://localhost:8084/backend/category";

                axios({
                    method: "Post",
                    url:`${baseURL}/create`,
                    data: JSON.stringify(newCategory),
                    headers: {
                        "content-Type":"application/json"
                    },
                })

                .then(() => {
                    sweetalert({
                        text: 'Category has been added',
                        icon: "success",

                    });
                    
                })
                .catch((err) => {
                    console.log(err);
                })

                //ALL OF THIS WILL EXECUTE AFTER SWGAGER AND GUTHUB SETUP AND AFTER DEVELOPIHG BACKEND

                //PART 1: 30:01







        }
    },
};
</script>


<style >

</style>