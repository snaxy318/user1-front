<template>
    <p>
        Hello
        {{ hello.data }}
    </p>
</template>

<script>
    import axios from "axios"
    export default{
        name:'HomeTask',
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