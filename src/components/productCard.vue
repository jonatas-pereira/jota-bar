<script setup lang="ts">
interface ProductProp {
  nome: string
  preco: number
  quantidade: number
}

const props = defineProps<ProductProp>()

function exibir() {}
</script>

<template>
  <div class="product-card">
    <span>{{ props.nome }}</span>
    <span>{{ props.preco }}</span>
    <span>{{ props.quantidade }}</span>
    <div>
      <button @click="exibir">ver</button>
      <button>editar</button>
      <button>excluir</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(202, 202, 202);
}
</style>
