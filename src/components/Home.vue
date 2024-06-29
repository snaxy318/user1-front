<template>
    <h3>Hello</h3>
</template>

<script>
    export default {
        name: 'Home',
        async created() {
            const response = await axios.get('user');
        }
    }
</script>