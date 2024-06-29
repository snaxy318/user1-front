<template>
    <div>
        <NavUser/>
        <div class="user-details">
            <h1>User Details</h1>
            <div class="user-info">
                <p><strong>First Name:</strong> {{ user.firstname }}</p>
                <p><strong>Last Name:</strong> {{ user.lastname }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
                <p><strong>Mobile:</strong> {{ user.mobile }}</p>
                <p><strong>Department:</strong> {{ user.Department ? user.Department.departmentname : 'N/A' }}</p>
                <p><strong>Designation:</strong> {{ user.Designation ? user.Designation.designationname : 'N/A' }}</p>
                <p><strong>Username:</strong> {{ user.username }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import NavUser from './NavUser.vue'
    export default{
        name:'UserDetails',
        components:{NavUser},
        data(){
           return { user:[]}
        },
        created(){
            this.seeTask()
        },
        methods: {
            async seeTask(){
                try{
                    console.clear()
                    const response = await axios.get('http://localhost:3000/users/id');
                    console.log(response.data.Department.departmentname)
                    this.user = response.data
                } catch(err){
                    console.error(err.message);
                }
            }
        }
    }
</script>

<style scoped>
.user-details {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.user-info {
  font-size: 1em;
  color: #555;
}

.user-info p {
  margin: 10px 0;
}

.user-info strong {
  color: #222;
}

@media (max-width: 768px) {
  .user-details {
    padding: 15px;
    font-size: 0.9em;
  }
}
</style>