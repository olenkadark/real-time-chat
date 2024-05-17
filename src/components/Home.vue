<template>
  <div class="home">
    <h1>Welcome to Vue Chat App!</h1>
    <p>This is a real-time chat application built with Vue.js 3 and Firebase. Connect and communicate with others instantly!</p>
    <div>
      <router-link to="/login" class="button">Login</router-link>
      <router-link to="/signup" class="button">Sign Up</router-link>
      <a href="https://starryarray.com/olena/contact/" class="button">Contact Me</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppHome'
};
</script>
<style scoped>
.home {
  text-align: center;
  padding: 50px;
  margin-top: 50px;
}

h1 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
  color: #666;
  font-size: 18px;
}

.button {
  margin: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #4CAF50;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.button:hover {
  background-color: #45a049;
}
</style>
