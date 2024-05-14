<template>
  <div id="app">
    <nav>
      <router-link to="/list">List</router-link>
      <router-link to="/add">Create</router-link>
      <router-link to="/update">update</router-link>
      <router-link to="/delete">Delete</router-link>
    </nav>

    <router-view />
  </div>
</template>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
  background-color: #f1f1f1;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  transition: all 0.3s ease;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  color: #42b983;
}

.router-view {
  padding: 20px;
}
</style>