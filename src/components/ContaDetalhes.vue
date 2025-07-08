<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
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
</template>

<style scoped></style>
