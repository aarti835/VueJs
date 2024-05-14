<template>
    <div>
      <h2>Users</h2>
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <p v-else>No users found.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
export default {
  data() {
    return {
      users: [] 
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get('http://localhost:8090/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Failed to get users:', error);
        });
    }
  }
}
  </script>
  
  <style scoped>
  </style>
  