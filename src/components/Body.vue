<template>
  <div class="body">
    <div
            class="card"
            v-for="user in getUsers"
            :key="'userPreview' + user.name.first + user.name.last"
            @click="goToPage(user.login.username)"
    >
      <h1>{{ user.name.first + ' ' + user.name.last }}</h1>
      <h2>{{ user.email }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch('getUsers')
  },
  computed: {
    getUsers() {
      return this.$store.getters['getUsers']
    }
  },
  methods: {
    goToPage(userId) {
      this.$router.push('id' + userId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.body {
  display: flex;
  flex-wrap: wrap;
}
  .card {
    cursor: pointer;
    border: 1px solid #cccccc;
    height: 170px;
    width: 250px;
    margin: 10px;
  }
</style>
