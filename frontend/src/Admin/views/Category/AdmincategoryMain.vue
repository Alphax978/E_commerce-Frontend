<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
            <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Our Category</h2>
                    <router-link :to="{ name: 'Add Category'}">
                        <button type="button" class="btn btn-primary"  style="float:right">Add Category </button>
                    </router-link>
                </div>
            </div>

            <div class="row">
                <div v-for = "category of categories" :key="category.id" class="col-xl=4 col-md-6 col-12 pt-3 d-flex" >
                    <category-box :category="category" />
                </div>
            </div>
            </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>


  <!-- <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
           
      </div>
      <AppFooter />
    </div>
  </div> -->

       

<script>
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'



import CategoryBox from "../../components/CategoryBox.vue";

export default {
  name: "AdmincategoryMain",
  components: { CategoryBox,  
        AppFooter,
        AppHeader,
        AppSidebar,
        // CContainer, 
    },
    props:["categories"],
};
</script>


<style >

</style>