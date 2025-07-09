<script setup lang="ts">
interface ProductProp {
  nome: string
  preco: number
  quantidade: number
}

const props = defineProps<ProductProp>()

</script>

<template>
  <div class="product-card">
    <div class="p-data">
      <span class="p-nome">{{ props.nome }}</span>
      <span class="p-preco">Preço: R${{ props.preco }}</span>
    </div>
    <div class="btn-product-container">
      <button class="p-button">e</button>
      <button class="p-button">e</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgb(202, 202, 202);
  border-radius: 5px;
  padding: 10px;
}

.p-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-product-container {
  display: flex;
  gap: 5px;
}

.p-button {
  width: 40px;
  height: 40px;
}

.p-nome {
  font-family: 0.875rem;
}

.p-preco {
  font-family: 0.875rem;
  width: 100%;
}

/* Tablet */
@media (min-width: 600px) {
  .product-card {
    width: 80%;
    margin: auto;
  }

  .p-data {
    flex-direction: row;
    gap: 100px;
    align-items: center;
  }

  .p-nome {
    width: 190px;
  }


}

/* Desktop */
@media (min-width: 1024px) {
  .p-data {
    flex-direction: row;
    gap: 150px;
    align-items: center;
  }

  .p-nome {
    width: 400px;
  }
}
</style>
