<template>
    <div class="container">

        <h2><p v-show="alert">{{alertMessage}}</p></h2>
        <div class="col-sm-6 col-sm-offset-3">

            <h1><span class="fa fa-sign-in"></span> Signup</h1>

            <!-- Register FORM -->
            <div class="form-group">
                <label>User Name</label>
                <input type="text" class="form-control" v-model="payload.username">
            </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="payload.email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="payload.password">
                </div>

                <button class="btn btn-warning btn-lg" @click="register">Signup</button>

            <hr>

            <p>Already have an account? <a @click="onLogin">Login</a></p>
            <p>Or go <a href="/">home</a>.</p>

        </div>

    </div>
</template>

<script>
    import authController from '../controller/authController'
    export default {
        name: "Register",
        data(){
            return {
                payload: {},
                alert: false,
                alertMessage: "nothing"
            }
        },
        methods:{
          register: async function () {
              //Register User
              console.log("Register Payload" + JSON.stringify(this.payload))
              let response = false
              try {
                  response = await authController.register(this.payload)
              }catch (e) {
                  console.error('Error in registring');
                  console.error(e)
              }
              if(response){
                  console.log("Registered Success!");
                  this.$router.push({path: 'login'})
              } else {
                  this.alert = true
                  this.alertMessage = "Registration Fail"
              }

          },
          onLogin: function () {
              //Jump to Login
              this.$router.push({path: 'login'})
          }
        }
    }
</script>

<style scoped>

</style>
