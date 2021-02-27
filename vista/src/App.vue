<template>
  <div>
    <!-- NavBar component real -->
    <Navbar v-bind:botones= show v-bind:user=usuario>  </Navbar>
    <div class="container mt-5">
      
  {{ currentRouteName }} Tamano : {{tamanoRoute}}
  {{usuario.name}} {{usuario._id}}
    </div>
    <div v-if="tamanoRoute===0" class="container mt-5">
      <!-- v-on:update:usuario="usuario = $event" -->
      <router-view v-bind:usuario=usuario></router-view>
    </div>

    <div class = "container bottom">
      <Footer></Footer>
    </div>
  </div>

  

</template>

<script>
import Navbar from './components/general/Navbar.vue'
import Footer from './components/general/Footer.vue'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      show : 'true',
      baseURL: "http://localhost:3000/api",
      tamanoRoute : 0,
      usuario: {}

    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
      ocultarMethod(){
        if (localStorage.getItem('token') === null) {
            return true;
        }else{
            return false
        }
      }
  },
  created() { 
    this.show = this.ocultarMethod();  
    this.tamanoRoute = this.selectTamano();
  },
  updated() {
    axios.get('http://localhost:3000/api/user',
     { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.usuario = res.data.user;
    });
    this.show = this.ocultarMethod();  
    this.tamanoRoute = this.selectTamano();
  },
  computed:{
      currentRouteName() {
        return this.$route.name;
      },
      selectTamano(){
        if (this.currentRouteName() =='home') {
          return 0;
        }
        else if(this.currentRouteName() =='tablero') {
          return 5;
        }
        else{
          return 0;
        }
      }

  },
  mounted() {
    axios.get('http://localhost:3000/api/user',
     { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.usuario = res.data.user;
    });
    this.tamanoRoute = this.selectTamano();
    this.show = this.ocultarMethod();  
  },
}
</script>

<style>
  .color1{
    background-color: #9F9FED;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
  }

  .color2{
    background-color:  #FEF9FF !important  ;
    color: black !important ;
  }
  .color2:hover{
    background-color:#F2DFD7 !important  ;
    color: black !important ;
  }

  .color3{
    background-color: #736CED !important ;
     color: white !important ;
  }

  .color4{
    background-color: #D4C1EC!important ;
     color: black !important ;
  }

  .color5{
    background-color: #9F9FED !important ;
     color: white !important ;
  }
  .color6{
    background-color: rgb(160, 0, 0) !important ;
     color: white !important ;
  }
  .color6:hover{
    background-color: red !important  ;
    color: white !important ;
  }
  .color7:{

    background-color: #9F9FED !important;
    color: #736CED !important;
  }



  .margen{
    margin-right: 10px;
  }
    /* Las animaciones de entrada y salida pueden usar */
  /* funciones de espera y duración diferentes.      */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .texto-publicitario{
    font-family: Dosis;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 48px;
    display: flex;
    align-items: center;

    color: #6400B2;
  }
  .roboto{
    font-family: 'Roboto', sans-serif;
  }


</style>