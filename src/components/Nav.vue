<template>
    <nav class="navbar navbar-expand navbar-light fixed-top bg-dark" data-bs-theme="dark">
        <div class="container">
            <a href="/" class="navbar-brand">Home</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="./login" class="nav-link">Log in</a>
                    </li>
                    <li class="nav-item">
                        <a href="./signup" class="nav-link">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>