<template>
    <div>
        <h5
                v-for="(elem, index) in user"
                :key="index + elem"
        >
            <span v-if="typeof elem !== 'object'">
                {{ index + ': ' + elem}}
            </span>
        </h5>
    </div>
</template>

<script>
  export default {
    name: "Body",
    computed: {
      user() {
        let user = {};
        for (let elem of this.getUsers) {
          if(elem.login.username === this.$route.params.id) {
            user = elem
          }
        }
        return user
      },
      getUsers() {
        return this.$store.getters['getUsers']
      }
    }
  }
</script>

<style scoped>

</style>
