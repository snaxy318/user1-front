<template>
    <form @submit.prevent="handleSubmit" method="post">
        <label>Email: </label>
        <input type="email" required v-model="email" >

        <label>First Name: </label>
        <input type="text" required v-model="fName">

        <label>Last Name: </label>
        <input type="text" required v-model="lName" >

        <label>Phone Number: </label>
        <input type="tel" required v-model="phNumber">

        <label>User Name: </label>
        <input type="text" required v-model="username">

        <label>Password: </label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label>Department: </label>
        <select v-model="department">
            <option v-for="department in departments" :value="department.departmentid" :key="department.departmentid">{{ department.departmentname }}</option>
        </select>

        <label>Designation: </label>
        <select v-model="designation">
            <option v-for="designation in designations" :value="designation.designationtid" :key="designation.designationtid">{{ designation.designationname }}</option>
        </select>

        <div class="submit">
            <button>Create User</button>
        </div>
    </form>
    <div>{{ error }}</div>
</template>

<script>
import axios from 'axios'
export default{
    data() {
        return {
            designations:[],
            departments:[],
            email: '',
            username:'',
            password:'',
            fName:'',
            lName:'',
            designation:'',
            department:'',
            passwordError:'',
            phNumber:'',
            user:[],
            error:''
        }
    },
    created() {
        this.getdepartments();
        this.getdesignations();
    },
    methods: {
        async getdepartments(){
            try{
                const response = await axios.get('http://localhost:3000/departments');
                this.departments=response.data;
            }catch(err){
                console.error(err);
            }
        },
        async getdesignations(){
            try{
                const response = await axios.get('http://localhost:3000/designations');
                this.designations=response.data;
            }catch(err){
                console.error(err);
            }
        },
        async handleSubmit() {
            console.clear();
            console.log("heheh");
            this.user = {
                firstname:this.fName,
                lastname:this.lName,
                email:this.email,
                departmentid:this.department,
                designationid:this.designation,
                mobile:this.phNumber,
                username:this.username,
                password:this.password};

            if (this.password.length < 6) {
                this.passwordError = 'Password should be at least of length 6';
                return;
            }
            this.passwordError='';
    
            try { 
                // const result = await axios.post('http://localhost:3000/users/register',this.user);
                console.warn(this.user);
                alert("User has been created");
                this.$router.push('/login');
            } catch(err){
                console.error(err);
                this.err=err.message;
            }
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