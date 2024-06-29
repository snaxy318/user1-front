<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
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
            </div>
        </div>

    </nav>
</template>

<script>
    export default {
        name: 'NavUser'
    }
</script>