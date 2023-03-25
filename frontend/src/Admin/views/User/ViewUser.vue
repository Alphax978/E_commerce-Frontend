<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2>Users</h2>
                    </div>
                </div>

            </div>
            <table class="table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="totalUser in totalUsers" :key="totalUser.id">
                    <td>{{totalUser.first_name}}</td>
                    <td>{{totalUser.last_name}}</td>
                    <td>{{totalUser.email}}</td>
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
        getUsers(){
            axios
                .get(`${this.baseURL}/backend/user/reflect`)
                .then((res) => {
                    const result = res.data;
                    this.totalUsers = result.totalUsers;
                })
                .catch((err) => console.log('err', err));

        }

    },
    mounted(){
        this.getUsers();
    }

};
</script>