<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2>Total Vendors</h2>
                    </div>
                </div>

            </div>
            <br/>
            <table class="table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="totalUser in totalUsers" :key="totalUser.id">
                     <td>{{totalUser.id}}</td>
                    <td>{{totalUser.firstName}}</td>
                    <td>{{totalUser.lastName}}</td>
                    <td>{{totalUser.email}}</td>
                    <!-- <td><button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td> -->
                </tr>
            </tbody>
            </table>



      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'
import axios from 'axios';




export default {

  name: "ViewUsers",
  components: {
        AppFooter,
        AppHeader,
        AppSidebar,
        // CContainer, 
    },
    data(){
       return{
        totalUsers:[],
   
       };
    },
    props:["baseURL"],
    methods:{
        async getVendors(){
            await axios
                .get(`${this.baseURL}/backend/Vendor/vreflect`)
                .then((res) => (this.totalUsers = res.data ))
                .catch((err) => console.log('err', err));

        }

    },
    mounted(){
        this.getVendors();
    }

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