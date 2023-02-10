<template>
<div>
    <NavbarShow/>

    <div class="container">
        <div class="row">
                <div class="col-12 text-center">
                    <h3 class="pt - 3">Our Categories</h3>
                </div>
        </div>
        <div class="row">
            <div v-for = "category of categories" :key="category.id" class="col-xl=4 col-md-6 col-12 pt-3 d-flex" >
                <category-box :category="category" />
            </div>
        </div>

    </div>
    <FooterShow/>
</div>
       
</template>

<script>


const axios = require("axios");
import CategoryBox from "../../components/Category/CategoryBox.vue";
import NavbarShow from '../../components/NavbarShow';
import FooterShow from '../../components/FooterShow';



export default {
  name: "CategoryMain",
  components: { CategoryBox,NavbarShow,FooterShow },

    data() {
        return {
            baseURL: "https://limitless-lake-55070.herokuapp.com",
            categories: [],
           
        };

    },
    methods: {
        async getCategories(){
            await axios
                .get(`${this.baseURL}/category/`)
                .then((res) => (this.categories = res.data ))
                .catch((err) => console.log(err));
        },
      
    },
    mounted()
    {
        this.getCategories();
    },
  

};
</script>


<style >

</style>