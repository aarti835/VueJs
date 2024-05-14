<template>
    <div>
      <h1>Add User</h1>
      <form @submit.prevent="addUser">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        name: "",
        email: "",
      };
    },
    methods: {
      addUser() {
        const user = {
          name: this.name,
          email: this.email,
        };
        axios.post('/api/user', user)
         .then(response => {
            console.log(response.data)
            alert('User added successfully')
            this.name = '';
            this.email = '';
          })
          .catch(error => {
            console.log(error);
            alert('Failed to add user. Please try again')
          })
      },
    },
  };
  </script>