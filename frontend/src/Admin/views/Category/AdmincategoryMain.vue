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
                    <br/>
                    <br/>
                </div>
            </div>

            <div class="row">
                  <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="category in categories" :key="category.id">
                            <td>{{category.id}}</td>
                            <td>{{category.categoryName}}</td>
                            <td>{{category.description}}</td>
                            <td> 
                              <router-link :to="{name: 'Adminedits', params: {id: category.id}}" >
                                <button type="button" class="btn btn-info"><i class="far fa-edit"></i></button>
                              </router-link>
                              <button type="button" class="btn btn-danger" @click="deleteItem(category.categoryName)"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                  </table>
               
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
import axios from 'axios'
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'



// import CategoryBox from "../../components/CategoryBox.vue";

export default {
  name: "AdmincategoryMain",
  components: { 
        AppFooter,
        AppHeader,
        AppSidebar,
        // CContainer, 
    },
    props:["categories","baseURL"],
    methods:{
         deleteItem(name) {
                  axios
                    .delete(`${this.baseURL}/backend/category/delete/${name}`)
                    .then((res) => {
                      if (res.status == 200) {
                        this.$router.go(0);
                        
                      }
                    })
                    .catch((err) => console.log('err', err));
            },
    }
};
</script>


<style >

</style>