<script setup lang="ts">
import logo from '../assets/jota-bar-logo.png'
</script>

<template>
  <div class="section-bg-primary">
    <div class="container header-box">
      <router-link to="/">
        <img :src="logo" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 110px;
}

.header-box {
  display: flex;
  justify-content: center;
  height: 110px;
}
</style>
