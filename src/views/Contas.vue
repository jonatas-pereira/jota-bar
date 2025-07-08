<script setup lang="ts">
import { ref, computed } from 'vue'
import UserCard from '../components/UserCard.vue'
import NovaConta from '../components/NovaConta.vue'

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
  <div class="container p-box">
    <div>
      <span class="h1">Contas abertas</span>
    </div>
    <div>
      <div>
        <input v-model="result" type="text" placeholder="Buscar conta" class="c-input" />
      </div>
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
</template>

<style scoped>
.p-box {
  position: relative;
}

.user-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0px 20px 0px;
}

.c-box {
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
}

.c-item {
  width: 80%;
  margin: auto;
}

.c-input {
  border: 1px solid var(--border-color-primary);
  border-radius: 10px;
  padding: 10px;
}

/* Tablet */
@media (min-width: 600px) {
}

/* Desktop */
@media (min-width: 1024px) {
}
</style>
