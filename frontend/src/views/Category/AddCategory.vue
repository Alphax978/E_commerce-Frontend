<template>
    <div class="container">
        <div class="row">
                <div class="col-12 text-center">
                    <h3>Add Category</h3>
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
       
</template>

<script>

const axios = require("axios");
const sweetalert = require('sweetalert');
export default {

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
                const newcategory = {
                    categoryName: this.categoryName,
                    description: this.description,
                    imageUrl: this.imageUrl,
                };

                const baseURL = "https://limitless-lake-55070.herokuapp.com";

                axios({
                    method: "Post",
                    url:`${baseURL}/category/create`,
                    data: JSON.stringify(newcategory),
                    Headers: {
                        "content-Type": "application/json",
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