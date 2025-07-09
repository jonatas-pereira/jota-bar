import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Contas from '../views/Contas.vue'
import Clientes from '../views/Clientes.vue'
import Produtos from '../views/Produtos.vue'
import Relatorios from '../views/Relatorios.vue'
import ContaDetalhes from '../components/ContaDetalhes.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/entrar', component: SignIn },
  { path: '/cadastrar', component: SignUp },
  { path: '/contas', component: Contas },
  { path: '/clientes', component: Clientes },
  { path: '/relatorios', component: Relatorios },
  { path: '/contas/:id', component: ContaDetalhes },
  { path: '/produtos', component: Produtos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
