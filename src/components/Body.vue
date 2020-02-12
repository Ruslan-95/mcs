<template>
  <div class="body">
    <div
            class="card"
            v-for="user in users"
            :key="user.username + user.email + user.id"
            @click="goToPage(user.id)"
    >
      <h1>{{ user.username }}</h1>
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
  data() {
    return {
      users: [
        {
          username: 'Ву Танг',
          email: 'tang@mail.ru',
          id: 1,
        },
        {
          username: 'Чанг Cу',
          email: 'su@mail.ru',
          id: 2,
        },
        {
          username: 'Брюс Ли',
          email: 'li@mail.ru',
          id: 3,
        },
        {
          username: 'Хан Чан',
          email: 'xan@mail.ru',
          id: 4,
        },
      ]
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
