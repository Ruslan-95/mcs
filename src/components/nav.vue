<template>
    <nav class="nav">
        <router-link to="/">Main</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/faq">FAQ</router-link>
    </nav>
</template>

<script>
  export default {
    name: "nav"
  }
</script>

<style scoped>
    .nav {
        display: flex;
        justify-content: space-around;
        margin: 20px auto;
        max-width: 60%;
    }
</style>
