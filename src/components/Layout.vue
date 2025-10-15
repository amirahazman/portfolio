<!-- Layout.vue -->
<template>
  <div class="app-layout">
    <Navbar />
    <div class="main-content">
      <!-- <Sidebar /> -->
      <main class="page-content">
        <router-view />
        <!-- This slot will render the current page component -->
      </main>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import Navbar from "./Navbar/Navbar.vue";
// import Sidebar from './Sidebar.vue';
// import Footer from './Footer.vue';
</script>

<style scoped>
.app-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex: 1; /* Allows main content to take up remaining vertical space */
}

.page-content {
  flex: 1; /* Allows page content to take up remaining horizontal space */
  padding: 20px;
}
</style>
