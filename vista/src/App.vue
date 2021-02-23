<template>
  <div>
    <!-- NavBar component real -->
    <Navbar></Navbar>
    
    <nav class="navbar navbar-dark color1 justify-content-between flex-nowrap flex-row">
      <div class="container-fluid">
        <a class="navbar-brand float-left " href="/">Transformación digital | QuickDev</a>
        <ul class="nav navbar-nav flex-row float-right">
          <!--
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Crear usuario</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Ver usuarios</router-link>
          </li>
-->       

          <b-button class = "rounded-pill color2 margen"  href="#">Iniciar Sesión</b-button>
          <b-button class = "rounded-pill color2 margen" href="/register">Registrarse</b-button>


<!-- 
          <loading-button ref="successLoadingButton" @click="click('successLoadingButton')" variant="success">Pay Now</loading-button>

-->
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>

  

</template>

<script>
import Navbar from './components/General/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
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

  .margen{
    margin-right: 10px;
  }


</style>