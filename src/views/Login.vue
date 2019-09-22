<template>
    <div class="container">


        <h2><p v-show="alert">{{alertMessage}}</p></h2>
        <div class="col-sm-6 col-sm-offset-3">

            <h1><span class="fa fa-sign-in"></span> Login</h1>

            <!-- LOGIN FORM -->

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="payload.email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="payload.password">
                </div>

                <button class="btn btn-warning btn-lg" @click="login">Login</button>

            <hr>

            <p>Need an account? <a @click="onSignup">Signup</a></p>
            <p>Or go <a href="/">home</a>.</p>

        </div>

    </div>
</template>

<script>
    import authController from '../controller/authController'
    export default {
        name: "Login",
        data(){
            return {
                payload: {},
                alert: false,
                alertMessage: "nothing"
            }
        },
        methods: {
            login: async function () {
                //Try to Login
                console.log("Login Payload " + JSON.stringify(this.payload))
                let response = false
                try {
                   response  = await authController.login(this.payload)
                } catch (e) {
                    console.error('Error in Login')
                    console.error(e)
                }
                if(response){
                    this.$root.$data.userDetail = response
                    this.$cookie.set('useremail',response.email , 1);
                    this.$router.push({
                        name: "profile"
                    });
                } else{
                    this.alert = true
                    this.alertMessage = "Authentication Fail"
                }
            },
            onSignup: function () {
                // Jump to Signup
                this.$router.push({path: 'register'})
            }
        }
    }
</script>

<style scoped>

</style>
