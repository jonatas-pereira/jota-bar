<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <Header></Header>
  <div class="container">
    <div>
      <span>Nome: mock</span>
    </div>
    <div>
      <span>Produtos</span>
      <div>
        <div></div>
      </div>
    </div>

    <div>
      <span>{{ id }}</span>
    </div>
    <div>
      <router-link to="/contas">
        <button>Voltar</button>
      </router-link>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
