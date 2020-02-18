<template>
    <nav class="nav">
        <router-link to="/">
            <v-btn>Home</v-btn>
        </router-link>
        <router-link to="/about">
            <v-btn>About</v-btn>
        </router-link>
        <router-link to="/faq">
            <v-btn>FAQ</v-btn>
        </router-link>
    </nav>
</template>

<script>
  export default {
    name: "Nav"
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
