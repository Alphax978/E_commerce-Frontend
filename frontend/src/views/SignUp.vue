<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-3">
        <!-- display logo -->
      </div>
    </div>

    <!-- header -->

    <div class="row">
      <div class="col-12 justify-content-center d-flex pt-4">
        <div id="signup" class="flex-item border">
          <h2 class="pt-4 pl-4">Create Account</h2>
          <form @submit="signup" class="pt-4 pl-4 pr-4">
            <div class="form-group">
              <label for="Email">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                required
              />
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label> First Name</label>
                  <input
                    type="text"
                    v-model="firstName"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label> Last Name</label>
                  <input
                    type="text"
                    v-model="lastName"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- address -->
            <div class="form-group">
              <label for="Password">Address </label>
              <input
                type="text"
                class="form-control"
                required
              />
            </div>

            <!-- password -->
            <div class="form-group">
              <label for="Password"> Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                required
              />
            </div>

            <!-- confirm password -->
            <div class="form-group">
              <label for="Password"> Confirm password</label>
              <input
                type="password"
                v-model="confirmPassword"
                class="form-control"
                required
              />
            </div>
            <div class="text-center"><button class="btn btn-primary mt-2 mb-4 "  >Create Account</button></div>
            </form>
            <div class="text-center"><button class="btn btn-dark btn-lg mt-2 py-1" @click="nextportal" >Create Sellers Account</button></div>
            <hr />
            <small class="form-text text-muted pt-2 pl-4 text-center"
              >Already Have an Account?</small
            >
          <p class="text-center">
            <router-link
              class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
              :to="{ name: 'SignIn' }"
              >Signin Here</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <!-- form -->
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseURL"],
  data() {
    return {
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        // call signup api
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        };
        console.log("user", user);
        await axios
          .post(`${this.baseURL}/backend/user/signup`, user)
          .then(() => {
            this.$router.replace("/");
            swal({
              text: "User signup successful, please login",
              icon: "success",
            });
          })
          .catch((err) => console.log("err", err));
      } else {
        // show some error
        swal({
          text: "passwords dont match",
          icon: "error",
        });
      }
    },

    nextportal(){
      this.$router.replace("/vsells")
    }
  },
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

@media only screen and (min-width: 992px) {
  #signup-div {
    width: 40%;
  }
}
</style>