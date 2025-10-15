<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-logo">Portfolio</router-link>
    </div>
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Contribution</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script></script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  color: white;
  border-radius: 10px;
}

.navbar-logo {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  margin-left: 1rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
}

.navbar-links a:hover {
  text-decoration: underline;
}
</style>
