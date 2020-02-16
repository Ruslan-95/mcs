<template>
    <v-app id="app" >
        <navigation/>
        <transition name="bounce" mode="out-in">
            <router-view/>
        </transition>
    </v-app>
</template>

<script>
  import navigation from './components/Nav.vue'

  export default {
    components: {
      navigation
    },
    name: 'app',
  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
