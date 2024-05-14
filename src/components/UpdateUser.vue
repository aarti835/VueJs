<template>
    <div>
      <h2>Update User</h2>
      <form @submit.prevent="updateUser">
        <label for="id">ID:</label>
        <input type="text" id="id" v-model="user.id" disabled />
        <br />
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name" />
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name:"UpdateUser",
    data() {
      return {
        user: {
          id: 4, // Specify the user ID you want to update
          name: '',
          email: '',
        },
        message: ''
      };
    },
    created() {
      this.fetchUser();
    },
    methods: {
      fetchUser() {
        axios.get(`api/user/${this.user.id}`)
          .then(response => {
            this.user = response.data;
          })
          .catch(error => {
            this.message = 'Failed to fetch user';
            console.error('Error:', error);
          });
      },
      updateUser() {
        axios.put(`api/user/${this.user.id}`, this.user)
          .then(response => {
            this.message = 'User updated successfully';
          })
          .catch(error => {
            this.message = 'Failed to update user';
            console.error('Error:', error);
          });
      }
    }
  };
  </script>
  