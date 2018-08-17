<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="myNavbar">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" width="30" height="30" alt="">
            </a>
            <router-link class="mr-auto" to="/posts">Posts</router-link>
            <router-link to="/add">Add</router-link>
        </nav>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
#myNavbar {
    box-shadow: 0 2px 4px rgba(0,0,0,.08);
}
</style>


