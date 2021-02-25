<template>
  <div>
    <h1 class = "roboto">
      Hola : {{name}} de correo : {{email}}
    </h1>
     <button class="btn btn-lg color4 rounded-pill" 
     type="submit" 
     @click="logout()">Logout</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Landing',
  data() {
    return {
      name: '',
      email: '',
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
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>