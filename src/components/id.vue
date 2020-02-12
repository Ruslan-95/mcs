<template>
<h1>{{ getRoute }}</h1>
</template>

<script>
  export default {
    computed: {
      getRoute() {
        return this.$route.path
      }
    },
    created() {
      setTimeout(() => {
        this.$router.replace('/about')
      }, 2500)
    }
  }
</script>

<style scoped>

</style>
