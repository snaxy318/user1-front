<template>
    <Nav/>
    <h3>Hello</h3>
</template>

<script>
    import Nav from './Nav.vue'
    export default {
        name: 'Home'
        ,
        components: {
            Nav,
        },
        async created() {
            const response = await axios.get('user');
        }
    }
</script>