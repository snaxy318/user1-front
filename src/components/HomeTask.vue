<template>
    <NavUser/>
    <div class="tasks-list">
        <h1>Task List</h1>
        <div v-if="tasks.length > 0" class="tasks-container">
        <div v-for="task in tasks" :key="task.taskid" class="task-item">
            <p><strong>Task Name:</strong> {{ task.taskname }}</p>
            <p><strong>Date:</strong> {{ task.taskdate }}</p>
            <p><strong>Working Hours:</strong> {{ task.workinghours }}</p>
            <p><strong>Description:</strong> {{ task.description }}</p>
        </div>
        </div>
        <div v-else>No tasks available.</div>
    </div>
</template>

<script>
    import axios from "axios"
    import NavUser from './NavUser.vue'
    export default{
        name:'HomeTask',
        components:{NavUser},
        data(){
           return { tasks:[]}
        },
        created(){
            this.seeTask()
        },
        methods: {
            async seeTask(){
                try{
                    const response = await axios.get('http://localhost:3000/tasks/user/tasks');
                    console.log(response.data)
                    this.tasks = response.data
                } catch(err){
                    console.error(err.message);
                }
            }
        }
    }
</script>

<style scoped>
.tasks-list {
  max-width: 800px;
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

.tasks-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-item {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-item p {
  margin: 5px 0;
}

@media (max-width: 768px) {
  .tasks-list {
    padding: 15px;
    font-size: 0.9em;
  }
}
</style>