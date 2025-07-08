<script setup lang="ts">
import HomeCard from './HomeCard.vue'
import licor from '../assets/icon/licor.png'
import pessoas from '../assets/icon/pessoas.png'
import relatorio from '../assets/icon/relatorio.png'
import dinheiroIcon from '../assets/icon/dinheiro.png'
</script>

<template>
  <div class="container h-content">
    <div class="card-align">
      <router-link to="contas">
        <HomeCard :elemento="dinheiroIcon" descricao="Contas"></HomeCard>
      </router-link>
      <router-link to="produtos">
        <HomeCard :elemento="licor" descricao="Produtos"></HomeCard>
      </router-link>
    </div>
    <div class="card-align">
      <router-link to="/clientes">
        <HomeCard :elemento="pessoas" descricao="Clientes"></HomeCard>
      </router-link>
      <router-link to="/relatorios">
        <HomeCard :elemento="relatorio" descricao="Relatórios"></HomeCard>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.h-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0px 20px 0px;
}

.card-align {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Tablet */
@media (min-width: 600px) {
  .h-content {
    flex-direction: row;
    margin: auto;
    padding: 30px 0px 30px 0px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .h-content {
    margin: auto;
    padding: 50px 0px 50px 0px;
  }
}
</style>
