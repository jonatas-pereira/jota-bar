<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['atualizar'])

interface Users {
  nome: string
  id: number
  valor: number
}

const novaConta = ref<Users>({
  nome: '',
  id: 0,
  valor: 0
})

function alterar() {
  emit('atualizar')
}
</script>

<template>
  <div class="nc-box">
    <div>
      <input v-on="novaConta.nome" type="text" placeholder="Digite o nome cliente" />
      <button>buscar</button>
    </div>
    <button @click="alterar">Voltar</button>
  </div>
</template>

<style scoped>
.nc-box {
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translate(-50%);
  z-index: 1;
}
</style>
