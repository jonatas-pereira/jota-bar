<script setup lang="ts">
import logo from '../assets/jota-bar-logo.png'
</script>

<template>
  <div class="container">
    <router-link to="/">
      <img :src="logo" />
    </router-link>
  </div>
</template>

<style scoped>
img {
  width: 120px;
}
</style>
