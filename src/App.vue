<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="section-bg-primary">
    <Header class="header"></Header>
  </div>
  <router-view></router-view>
  <div class="section-bg-primary">
    <Footer class="footer"></Footer>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
}

.footer {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
