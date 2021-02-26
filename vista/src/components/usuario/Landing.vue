<template>
  <div>
    <h1 class = "roboto">
      <p>
        Hola : {{user.name}}
      </p>  
      de correo : {{user.email}}
      <p>
        id _  {{user._id}}
      </p>
    </h1>
    <h1>

     <button class="btn btn-lg color4 rounded-pill" 
     type="submit" 
     @click="logout()">Logout</button>
    </h1>

    <div col>
      <div >

    <!-- Boton 1 -->
        <a class="btn btn-default color3 rounded-pill"  href="/home" role="button" >home</a>
      </div>
      <div>

    <!-- Boton 2 -->
        <a class="btn btn-default color3 rounded-pill " href="/tablon" role="button">TABLON</a>
      </div>
      <div>

    <!-- Boton 2 -->
        <a class="btn btn-default color3 rounded-pill " href="/post" role="button">Crear proyecto</a>
      </div>
    </div>

        
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      user :{
      },
      i : 0,
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/user',
     { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.user = res.data.user;
      });
  },
  updated() {
      this.$emit('update:usuario', this.usuario);
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>