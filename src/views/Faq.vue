<template>
    <div id="faq">
        <h1>FAQ</h1>
        <h2>{{ getCounter }}</h2>
    </div>
</template>

<script>
  export default {
    name: "faq",
    computed: {
      getCounter() {
        return this.$store.getters['getCounter']
      }
    }
  }
</script>

<style scoped>

</style>
