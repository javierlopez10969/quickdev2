<template>
  <div>
    <!-- NavBar component real -->
    <Navbar></Navbar>
    
    <!-- 
    <button @click="changeShow">
      Mostrar/Ocultar
    </button>
    <transition name="slide-fade">
      <p v-if="show=== true">
        Hola mundo
      </p>     
    </transition>
    <div>
      {{$route.name}}
    </div>
    -->
    
    <div class="container mt-5">
      <router-view></router-view>
    </div>
    <div class = "container bottom">
      <Footer></Footer>
    </div>
    
  </div>
  

  

</template>

<script>

import Navbar from './components/general/Navbar.vue'
import Footer from './components/general/Footer.vue'

export default {

  name: 'App',
  components: {
    Navbar,
    Footer
  },
  methods: {
        changeShow(){
      if(this.show== true){
        this.show= false;
      }else{
        this.show= true;
      }
    },
  },
  data() {
    return {
      show : 'true',
    }
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