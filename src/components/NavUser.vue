<template>
    <nav class="navbar navbar-expand navbar-light fixed-top bg-dark" data-bs-theme="dark">
        <div class="container">
            <a href="/user-details" class="navbar-brand">User Details</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="/task" class="nav-link">Task Details</a>
                    </li>
                    <li class="nav-item">
                        <a href="/create-task" class="nav-link">Create Task</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <button class="btn btn-danger" @click="logout">Logout</button>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
    export default {
        name: 'NavUser'
    }
</script>

<style scoped>
/* Add any relevant styling here */
.nav-item button {
    margin-top: 0px;
    margin-right: 20px;
}
</style>