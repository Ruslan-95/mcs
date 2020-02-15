<template>
<div id="#about">
    <h1>About</h1>
    <button @click="handelClick">Click me!</button>
    <h2>User is:</h2>
    <p>{{getData.name.first + ' ' + getData.name.last}}</p>
    <p>{{getData.email}}</p>
    <p>{{getData.gender}}</p>
    <p>{{getData.phone}}</p>
    <p>{{getData.location.country}}</p>
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
        return this.$store.dispatch('getData')
      }
    },
    computed: {
      getData() {
        return this.$store.getters['getData']
      }
  }
  }
</script>

<style scoped>

</style>
