<template>
    <v-app id="#about">
        <h1>About</h1>
        <button @click="handelClick">Get user</button>
        <h2>User is:</h2>
        <transition name="fade">
            <div v-show="!ifChanged">
                <p>{{ getUser[0].name.first + ' ' + getUser[0].name.last }}</p>
                <p>{{ getUser[0].email }}</p>
                <p>{{ getUser[0].gender }}</p>
                <p>{{ getUser[0].phone }}</p>
            </div>
        </transition>
    </v-app>
</template>

<script>
  export default {
    data() {
      return {
        ifChanged: false
      }
    },
    filters: {
      uppercase(value) {
        return value.toUpperCase();
      }
    },
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
        this.ifChanged = true;
        return this.$store.dispatch('getUser')
          .then(() => {
            this.ifChanged = false;
          })
      }
    },
    computed: {
      getUser() {
        return this.$store.getters['getUser']
      },
      getName() {
        if(this.getUser.name) {
          return this.getUser[0].name.first + ' ' + this.getUser[0].name.last
        } else {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }
</style>
