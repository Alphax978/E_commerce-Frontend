<template>
  <div class="container">

    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Admin</h2>
          <form  @submit="signin" class = "pt-4 pl-4 pr-4 pb-4">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                required
            
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
              
              />
            </div>
            <small class="form-text text-muted"
              >By continuing, you agree to Easy Shop Conditions of Use and
              Privacy Notice.</small
            >
            <button  class="btn btn-primary mt-2 py-0">
              Continue
            </button>
            <br/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';
import swal from 'sweetalert';
export default {
  props: ['baseURL'],
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      const body = {
        email: this.email,
        password: this.password,
      };
      await axios
          .post(`${this.baseURL}/backend/Admin/signIn`, body)
          .then((res) => {
            localStorage.setItem('token', res.data.token);
              swal({
              text: 'Admin Login successful',
              icon: 'success',
              closeOnClickOutside: false,
            });
            this.$emit('fetchData');
            this.$router.push({ name: 'Welcome' });
            
        })
        .catch((err) => {
          swal({
            text: "Please check your sign in credentials and try again!!",
            icon: "error",
            closeOnClickOutside: false,
          });
          console.log(err);
        })
        
      
   
    },
  },
  mounted(){
    window.history.forward();
  }
};
</script>

<style scoped>
.btn-dark {
  background-color: #e7e9ec;
  color: #000;
  font-size: smaller;
  border-radius: 0;
  border-color: #adb1b8 #a2a6ac #a2a6ac;
}
.btn-primary {
  background-color: #f0c14b;
  color: black;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 0;
}

.btn-secondary {
  background-color: #f0c14b;
  color: black;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 0;
}

@media only screen and (min-width: 992px) {
  #signin-div {
    width: 40%;
  }
}
</style>