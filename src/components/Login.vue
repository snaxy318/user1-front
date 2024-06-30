<template>
    <Nav/>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>

        <div class="form-group">
            <label for="username">Username</label>
            <input id="username" type="text" class="form-control" v-model="username" placeholder="Username">

        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" v-model="password" placeholder="Password">
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
    import Nav from './Nav.vue'
    import axios from 'axios';
    export default {
        name:'Login'
        ,
        components: {
            Nav,
        },
        data () {
            return {
                username:'',
                password:''
            }
        }, 
        methods:{
            async handleSubmit() {
                const response = await axios.post('http://localhost:3000/auth/login',{
                    username: this.username,
                    password: this.password
                });

                localStorage.setItem('token',response.data.token);
                this.$router.push('/task');
            }
        }
    }

</script>