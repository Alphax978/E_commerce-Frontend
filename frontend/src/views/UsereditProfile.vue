<template>
<div>
    <NavbarShow />
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
                                <label>Address</label>
                                <input type="text" class="form-control"  required/>
                            </div>
                            <button  class="btn btn-primary">Submit</button>
                        </form>

             
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>

           




    <FooterShow />
</div>

</template>

<script>
import axios from 'axios';
import NavbarShow from '../components/NavbarShow';
import FooterShow from '../components/FooterShow';
import swal from "sweetalert";

export default {
    name:"UsereditProfile",
    components:{NavbarShow, FooterShow},
    props:["baseURL"],
    data()
    {
       return{
           email: null,
            firstName: null,
            lastName: null,
            // OldPassword: null,
            // password:null,
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
            .get(`${this.baseURL}/backend/token/show`)
            .then((res) => (this.alltokens = res.data))
            .catch((err) => console.log(err));
          
        },
        getId() 
        {
            axios
                .get(`${this.baseURL}/backend/token/show`)
                .then((res) => 
                {
                    this.alldata = res.data;
                    for (let i = 0; i < this.alldata.length; i++) 
                    {
                        if (this.token == this.alldata[i].token) 
                        {
                            this.userid = this.alldata[i].user.id;
                            console.log(this.userid);
                            break;
                        }
                    }
                })
                .catch((err) => console.log(err));
        },

        async updateUser(e) {
            e.preventDefault();
                // call signup api
                const user = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                };
                await axios
                .post(`${this.baseURL}/backend/user/update/${this.userid}`, user)
                .then(() => {
                    this.$router.replace("/");
                    swal({
                        text: "User Update successful",
                        icon: "success",
                        closeOnClickOutside: false,
                    });

                    
                })
                .catch((error) => {this.error = error});
          
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