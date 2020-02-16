<template>
<div id="#about">
    <h1>About</h1>
    <button @click="handelClick">Get user</button>
    <h2>User is:</h2>
    <p>{{ getName }}</p>
    <p>{{ getUser.email }}</p>
    <p>{{ getUser.gender }}</p>
</div>
</template>

<script>
  export default {
    name: "about",
    beforeRouteLeave(to, from, next) {
      const answer = window.confirm('Do u really wanna leave?');
      if(answer) {
        next()
      } else {
        answer(false)
      }
    },
    methods: {
      handelClick() {
        return this.$store.dispatch('getUser')
      }
    },
    computed: {
      getUser() {
        return this.$store.getters['getUser']
      },
      getName() {
        if(this.getUser.name) {
          return this.getUser.name.first + ' ' + this.getUser.name.last
        } else {
          return ''
        }
      }
  }
  }
</script>

<style scoped>

</style>
