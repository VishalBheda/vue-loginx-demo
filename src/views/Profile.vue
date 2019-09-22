<template>
<div>
    <h1>Welcome to VueProfileX</h1>
    <pre>
        USERNAME: {{userDetail.username}}
        EMAIL: {{userDetail.email}}
    </pre>

    <button @click="logout">Logout</button>
</div>
</template>

<script>
    export default {
        name: "Profile",
        data(){
            return{
                userDetail: "unknown"
            }
        },
        mounted() {
            console.log(this.$cookie.get("useremail"))
            this.userDetail = this.$root.$data.userDetail
            if(!this.$cookie.get("useremail")){
                this.$router.push({path: 'login'})
            }
        },
        methods:{
            logout: function () {
                this.$root.$data.userDetail = null
                this.$cookie.delete("useremail")
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style scoped>

</style>
