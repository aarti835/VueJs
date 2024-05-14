<template>
    <div>
      <button @click="deleteUser">Delete User</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async deleteUser() {
        const userId = 5; 
        try {
          const response = await fetch(`api/user/${userId}`, {
            method: 'DELETE',
          });
  
          if (response.ok) {
            console.log('User deleted successfully!');
          } else {
            console.error('Error deleting user:', await response.text());
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  }
  </script>
  