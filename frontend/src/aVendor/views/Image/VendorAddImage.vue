<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
       <div class="body flex-grow-1 px-3">
            <div class="container">
                <div class="row">
                <div class="col-12 text-center">
                    <h4 class="pt-3">Add a new Image</h4>
                </div>
                </div>

                <div class="row">
                <div class="col-3"></div>
                <div class="col-md-6 px-5 px-md-0 pt-5">
                    <div class="form-group">
                    <label for="myfile">Select image :</label>
                    <input type="file" id="myfile" class="form-control-file" @change="onFileSelected">
                    </div>
                    <button type="button" class="btn btn-info" @click="onUpload">Upload</button>
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
const swal = require('sweetalert');
export default {
     components:{
        AppFooter,
        AppHeader,
        AppSidebar,
       
    },
      data(){
        return {
            selectedFile : null
        }
    },
    props : ["baseURL"],
    methods : {
        onFileSelected(event){
            //this will always update the selected file whenever user changes files
            this.selectedFile = event.target.files[0];
        },
        async onUpload(){
            if(!this.selectedFile) {
                swal({
                    text: "Select a file first",
                    icon: "warning",
                    closeOnClickOutside: false,
                });
                return;
            }
            if(this.selectedFile.type !== "image/jpeg" && this.selectedFile.type !== "image/png" &&
               this.selectedFile.type !== "image/jpg") {
                //file format is not correct
                swal({
                    text: "Select a image/jpeg file!",
                    icon: "error",
                    closeOnClickOutside: false,
                });
                return;
            }
            const formData = new FormData();
            formData.append('file', this.selectedFile);

            await axios({
                method: 'post',
                url: this.baseURL + "/backend/vendor/fileUpload/",
                data : formData,
            })
            .then(() => {
                this.$router.push({name : "vendorview Image"});
                swal({
                    text: "Image Added Successfully!",
                    icon: "success",
                    closeOnClickOutside: false,
                });
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push({name : 'AdminLogin'});
        }
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