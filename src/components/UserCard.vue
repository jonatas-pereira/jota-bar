<script setup lang="ts">
interface ProductProp {
  nome: string
  valor: number
}

const props = defineProps<ProductProp>()
</script>

<template>
  <div class="user-card">
    <span>{{ props.nome }}</span>
    <div>
      <span>Valor total:</span>
      <span>{{ props.valor }}</span>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--border-color-primary);
  border-radius: 10px;
}
</style>
