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
                          <label>ImageURL</label>
                            <input type="url" class="form-control" v-model="imageURL" required>       
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
            baseURL: "http://localhost:8084/backend/category",
            categoryName: null,
            description: null,
            imageURL:null,
            
        }

    },
    methods: {
            async addCategory()
            {
                console.log(this.categoryName, this.description);
        
                        const newcategory = {
                                categoryName: this.categoryName,
                                description: this.description,
                                imageUrl: this.imageUrl
                        };

                        await axios
                            .post(`${this.baseURL}/create`, newcategory)
                            .then(() => {
                                sweetalert({
                                    text: 'Category has been added',
                                    icon: "success",

                                });
                                    
                            })
                            .catch((err) => {
                                console.log(err);
                            })
            },

       
    },
    
};
</script>


<style scoped>
h2 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>