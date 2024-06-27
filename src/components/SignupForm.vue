<template>
    <form @submit.prevent="handleSubmit" method="post">
        <label>Email: </label>
        <input type="email" required v-model="email">

        <label>First Name: </label>
        <input type="text" required v-model="fName">

        <label>Last Name: </label>
        <input type="text" required v-model="lName">

        <label>Phone Number: </label>
        <input type="tel" required v-model="phNumber">

        <label>Password: </label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label>Role: </label>
        <select v-model="role">
            <option v-for="role in roles" :value="role.roleid" :key="role.roleid">{{ role.Name }}</option>
        </select>

        <div class="submit">
            <button>Create User</button>
        </div>
    </form>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default{
    data() {
        return {
            roles:[],
            email: '',
            password:'',
            fName:'',
            lName:'',
            role:'',
            passwordError:'',
            phNumber:''
        }
    },
    created() {
        this.getroles();
    },
    methods: {
        async getroles(){
            try{
                const response = await axios.get('http://localhost:3000/api/roles');
                this.roles=response.data;
            }catch(err){
                console.error(err);
            }
        },
        handleSubmit() {
            console.log("heheh");
            this.passwordError = this.password.length > 5 ? '' :'Password should be atleast of length 6';
            user={
                firstname:this.fname,
                lastname:this.lname,
                email:this.email,
                usertypeid:this.role
            };
            this.axios.post("//users",this.user)
            .then((result)=>{
                console.warn(result);

            });

            //get user id
            this.axios.get("")

            userCred={
                // userid:
                email:this.email,
                mobile:this.phNumber,
                password:this.password
            }
            this.axios.post("//usercredentials",this.userCred)
            .then((result)=>{
                console.warn(result);

            });
        }
    }

}
</script>

<style>
form{
    max-width:420px;
    margin: 30px auto;
    background: white;
    text-align:left;
    padding: 40px;
    border-radius:10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #131212;
    color: #555;
}
button {
    background: rgb(67, 67, 241);
    border: 0px;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
.error {
    color:rgb(196, 37, 37);
    margin-top:10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>