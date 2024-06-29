<template>
    <p>
        <NavTask/>
        Hello
        {{ hello.data }}
    </p>
</template>

<script>
    import axios from "axios"
    import NavUser from './NavUser.vue'
    export default{
        name:'HomeTask',
        components:{NavUser},
        data(){
           return { hello:[]}
        },
        created(){
            this.seeTask()
        },
        methods: {
            async seeTask(){
                try{
                    const response = await axios.get('http://localhost:3000/tasks/user/tasks');
                    console.log(response)
                    this.hello = response
                } catch(err){
                    console.error(err.message);
                }
            }
        }
    }
</script>