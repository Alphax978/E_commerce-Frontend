<template>
    <div class="container">
        <div class="row">
                <div class="col-12 text-center">
                    <h3>Category</h3>
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
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
       
</template>

<script>

// const axios = require("axios");
export default {

    data() {
        return {
           
        };

    },
    methods: {
      
    },
};
</script>


<style >

</style>