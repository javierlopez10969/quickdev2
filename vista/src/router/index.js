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
    path: '/about',
    name: 'about',
    component: () => import('../components/general/About')
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: () => import('../components/usuario/Registrar.vue')
  },
  {
    path: '/preguntas_frecuentes',
    name: 'preguntas frecuentes',
    component: () => import('../components/general/PreguntasFrecuentes.vue')
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
    path: '/my-proyect/:id',
    name: 'MiProyecto',
    component: () => import('../components/proyectos/MiProyecto')
  },
  {
    path: '/editProyect/:id',
    name: 'editProyect',
    component: () => import('../components/proyectos/EditarProyecto')
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