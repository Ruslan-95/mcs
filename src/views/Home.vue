<template>
<div class="home">
    <Body msg="Welcome to vue.js"/>
</div>
</template>

<script>
    import Body from "../components/Body";
    import mixin from "../mixins/mixin";
  export default {
    name: "home",
    mixins: [mixin],
    components: {
      Body
    }
  }
</script>

<style scoped>

</style>
