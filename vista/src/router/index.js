import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  //Primera pagina
  {
    path: '/',
    name: 'home',
    component: () => import('../components/general/Home')
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: () => import('../components/usuario/Registrar.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/usuario/Login.vue')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/usuario/ListaUsuarios')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/usuario/EditarUsuario')
  }


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router