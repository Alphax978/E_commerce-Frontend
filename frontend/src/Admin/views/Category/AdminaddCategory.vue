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
                            <input type="file" class="form-control" @change="handleFileUpload" />
                            
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
            image:null,
            
        }

    },
    methods: {
        addCategory()
        {
            console.log(this.categoryName, this.description);
              

                const baseURL = "http://localhost:8084/backend/category";
                const formData = new FormData();

                // Convert the binary image data to base64
                const reader = new FileReader();
                reader.readAsDataURL(this.image);
                reader.onload = () => {
                    const base64Image = reader.result.split(',')[1];
                    // const blob = this.base64ToBlob(base64Image);
                    formData.append("image", base64Image);
                    formData.append("categoryName", this.categoryName);
                    formData.append('description', this.description);


                    const headers = {
                            'Content-Type': `multipart/form-data`
                    };

                    axios.post(`${baseURL}/create`, formData, { headers })
        

                    .then(() => {
                        sweetalert({
                            text: 'Category has been added',
                            icon: "success",

                        });
                            
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                };

        },

       

        handleFileUpload(e) {
            if (e.target.files.length > 0) {
                this.image = e.target.files[0];
            }
        },
    },
    
};
</script>


<style >

</style>