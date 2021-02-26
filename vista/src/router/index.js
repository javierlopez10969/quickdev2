import Vue from 'vue'
import VueRouter from 'vue-router'

// No sera mejor importar desde un comienzo axios 
//import router from './router'
//import axios from 'axios'


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
  },
  {
    path: '/home',
    name: 'logeado',
    component: () => import('../components/usuario/Landing')
  },


  //PROYECTOS  
  {
    path: '/tablon',
    name: 'tablero',
    component: () => import('../components/proyectos/Tablon')
  },
  
  {
    path: '/proyecto/:id',
    name: 'proyecto',
    component: () => import('../components/proyectos/Proyecto')
  },
  {
    path: '/post',
    name: 'postear',
    component: () => import('../components/proyectos/RegistrarProyecto')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router