<script setup lang="ts">
interface ProductProp {
  nome: string
  valor: number
}

const props = defineProps<ProductProp>()
</script>

<template>
  <div class="user-card">
    <span class="text-muted">{{ props.nome }}</span>
    <div>
      <span class="text-muted">Valor total: </span>
      <span class="text-muted">{{ props.valor }}</span>
    </div>
  </div>
</template>

<style scoped>
span {
  margin: 0;
}

.user-card {
  width: 100%;
  height: 80px;
  padding: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--border-color-primary);
  border-radius: 10px;
}

/* Tablet */
@media (min-width: 600px) {
  span {
    font-size: 1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  span {
  }
}
</style>
