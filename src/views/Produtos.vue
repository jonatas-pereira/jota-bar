<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Divider from '../components/Divider.vue'
import { ref, computed } from 'vue'
import ProductCard from '../components/productCard.vue'

const elemento = ref('')

const produtosFiltrados = computed(() => {
  return produtosDeBar.filter((produto) =>
    produto.nome.toLowerCase().includes(elemento.value.toLowerCase())
  )
})

const produtosDeBar = [
  { nome: 'Cerveja Pilsen', quantidade: 50, preco: 7.5 },
  { nome: 'Refrigerante Lata', quantidade: 30, preco: 5.0 },
  { nome: 'Água Mineral', quantidade: 40, preco: 3.5 },
  { nome: 'Caipirinha', quantidade: 20, preco: 12.0 },
  { nome: 'Porção de Batata Frita', quantidade: 15, preco: 18.0 },
  { nome: 'Whisky Dose', quantidade: 25, preco: 15.0 },
  { nome: 'Energético', quantidade: 10, preco: 8.5 },
  { nome: 'Chopp 300ml', quantidade: 35, preco: 6.0 },
  { nome: 'Pastel de Carne', quantidade: 20, preco: 6.5 },
  { nome: 'Espetinho de Frango', quantidade: 18, preco: 7.0 }
]
</script>

<template>
  <Header></Header>
  <div>
    <div class="container">
      <div class="title-box">
        <span class="h2">Produtos</span>
      </div>
      <input v-model="elemento" type="text" placeholder="buscar produtos" class="p-input" />
      <Divider></Divider>
      <ul class="list-prod">
        <li v-for="item in produtosFiltrados" :key="item.nome">
          <ProductCard
            :nome="item.nome"
            :preco="item.preco"
            :quantidade="item.quantidade"
          ></ProductCard>
        </li>
      </ul>
      <div class="btn-box">
        <button>Adicionar novo</button>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>

.title-box {
  padding-top: 15px;
}

.list-prod {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.p-input {
  border: 1px solid var(--border-color-primary);
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}

.btn-box {
  padding: 15px 0 15px 0;
  display: flex;
  justify-content: center;
}

button {
  padding: 5px;
}

/* Tablet */
@media (min-width: 600px) {
  
}

/* Desktop */
@media (min-width: 1024px) {
}
</style>
