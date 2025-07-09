<script setup lang="ts">
import { ref, computed } from 'vue'
import UserCard from '../components/UserCard.vue'
import NovaConta from '../components/NovaConta.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Divider from '../components/Divider.vue'

interface Users {
  nome: string
  id: number
  valor: number
}

const result = ref('')
const modal = ref(false)

const users = ref<Users[]>([
  { nome: 'João Silva', id: 1, valor: 20 },
  { nome: 'Maria Oliveira', id: 2, valor: 30 },
  { nome: 'Carlos Souza', id: 3, valor: 40 },
  { nome: 'Ana Paula', id: 4, valor: 25 },
  { nome: 'Fernanda Lima', id: 5, valor: 170 }
])

const usersFiltrados = computed(() => {
  return users.value.filter((item) => item.nome.toLowerCase().includes(result.value.toLowerCase()))
})

function ordenar() {
  users.value.sort((a, b) => a.nome.localeCompare(b.nome))
}

function closeModal() {
  modal.value = !modal.value
}

ordenar()
</script>

<template>
  <Header></Header>
  <div class="container p-box">
    <div class="c-title">
      <span class="h2">Contas abertas</span>
    </div>
    <div>
      <div>
        <input v-model="result" type="text" placeholder="Buscar conta" class="c-input" />
      </div>
      <Divider></Divider>
      <ul class="user-cards">
        <li v-for="user in usersFiltrados" :key="user.id" class="c-item">
          <router-link :to="`contas/${user.id}`">
            <UserCard :nome="user.nome" :valor="user.valor"></UserCard>
          </router-link>
        </li>
        {{
          usersFiltrados.length == 0
            ? 'nenhum usuário encontrado'
            : `${usersFiltrados.length} usuários encontrados`
        }}
      </ul>
      <div class="c-box">
        <button @click="closeModal" class="c-btn">Abrir nova conta</button>
      </div>
    </div>
  </div>
  <NovaConta @atualizar="closeModal" v-if="modal"></NovaConta>
  <Footer></Footer>
</template>

<style scoped>
.p-box {
  position: relative;
}

.user-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 0px 15px 0px;
}

.c-title {
  margin-top: 15px;
}

.c-box {
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
}

button {
  padding: 5px;
}

.c-item {
  width: 100%;
  margin: auto;
}

.c-input {
  border: 1px solid var(--border-color-primary);
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}

/* Tablet */
@media (min-width: 600px) {
  .c-input {
    width: 400px;
  }

  .c-item {
    width: 80%;
    margin: auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
}
</style>
