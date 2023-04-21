<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
        <div class="body flex-grow-1 px-3">

             <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h4 class="pt-3">Edit Your Profile</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <form @submit="updateUser">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" class="form-control" v-model="firstName" required/>
                            </div>
                             <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" class="form-control" v-model="lastName"  required/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control"  v-model="email" required/>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control"  required/>
                            </div>
                            <div class="form-group">
                                <label>Old Password</label>
                                <input type="text" class="form-control" v-model="OldPassword" required/>
                            </div>
                            <div class="form-group">
                                <label>New Password</label>
                                <input type="text" class="form-control" v-model="password" required/>
                            </div>
                            <button  class="btn btn-primary">Submit</button>
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
import axios from 'axios';
import swal from "sweetalert";
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'

export default {
    name:"UsereditProfile",
      components: {
            AppFooter,
            AppHeader,
            AppSidebar,
        },
    props:["baseURL"],
    data()
    {
       return{
           email: null,
            firstName: null,
            lastName: null,
            OldPassword: null,
            password:null,
            alltokens:[],
            alldata:[],
            token:null,
            userid:[],
       }
    },
    methods:{
        getTokens()
        {
            axios
            .get(`${this.baseURL}/backend/token/adshows`)
            .then((res) => (this.alltokens = res.data))
            .catch((err) => console.log(err));
          
        },
        getId() 
        {
            axios
                .get(`${this.baseURL}/backend/token/adshows`)
                .then((res) => 
                {
                    this.alldata = res.data;
                    for (let i = 0; i < this.alldata.length; i++) 
                    {
                        if (this.token == this.alldata[i].token) 
                        {
                            this.userid = this.alldata[i].admin.id;
                            console.log(this.userid);
                            break;
                        }
                    }
                })
                .catch((err) => console.log(err));
        },

        async updateUser(e) {
            e.preventDefault();
            if (this.OldPassword === this.password) {
                // call signup api
                const user = {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                };
                await axios
                .post(`${this.baseURL}/backend/Admin/update/${this.userid}`, user)
                .then(() => {
                    this.$router.replace("/vendorpannel");
                    swal({
                        text: "Update successful",
                        icon: "success",
                        closeOnClickOutside: false,
                    });

                    
                })
                .catch((error) => {this.error = error});
            } else  {
                // show some error
                swal({
                    text: "passwords dont match",
                    icon: "error",
                    closeOnClickOutside: false,
                });
            }
        },
   
    },
    mounted(){
        this.token = localStorage.getItem("token")
        this.getTokens();
        this.getId();
    }
    
}
</script>


<style scoped>

</style>