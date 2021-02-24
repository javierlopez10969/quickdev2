<template>
  <div>
    <!-- NavBar component real -->
    <Navbar></Navbar>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>

  

</template>

<script>
import Navbar from './components/general/Navbar.vue'

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


</style>