<template>
<div id="#about">
    <p>about</p>
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
    }
  }
</script>

<style scoped>

</style>
