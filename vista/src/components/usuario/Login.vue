<template>
 <div class="container-fluid">
        <div class="row">
            <div class="col">
            </div>

            <div class="col">
                
                <div class="container-fluid ventana text-center">
                    <a href="/"><img src="https://i.ibb.co/g9T9mMH/quickdev.png" alt="logo" ></a>
                    <form class="form-signin" @submit.prevent="login">                        
                        <h4 class="card-titl text-center">Iniciar sesión</h4>
                        <label for="inputEmail" class="sr-only">Correo electrónico</label>
                        <input type="email" id="inputEmail" class="form-control rounded-pill" placeholder="Correo electrónico" v-model="user.email" required="" autofocus="">
                        <label for="inputPassword" class="sr-only">Contraseña</label>
                        <input type="password" id="inputPassword" class="form-control rounded-pill" placeholder="Contraseña"  v-model="user.pass" required="">
                        <div class="checkbox mb-3">
                          <label>
                            <input type="checkbox" value="remember-me"> Recordarme en este equipo
                          </label>
                        </div>
                        <button class="btn btn-lg color4 rounded-pill text-center " role="button" type="submit" >Ingresar</button>

                    </form>
                    <p class="text-center mt-lg-5">¿No tienes Cuenta?  <a href="/registrar">Registrate aquí</a> </p>          
                </div>   
            </div>

            <div class="col">
            </div>
          </div>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
    name: 'Login',
    
    props: {
        botones : Boolean
    },  
    data() {
        return {
            user:{
                email: '',
                pass: ''
            },

            error: '',
        }
    },
    created() {
        if (localStorage.getItem('token') === null) {
            console.log('hola')
        }else{
            this.$router.push('/home');
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/api/login', this.user)
            .then(res => {
            //if successfull
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                this.$router.push({ path: '/home' });
            }
            }, err => {
                alert(err.response.data.error);
                console.log(err.response);
                this.error = err.response.data.error
            })
        }
    }
    }
</script>

<!-- CSS -->
<style>
    body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    }
    body {
        background: linear-gradient(180deg, #736CED -7.87%, rgba(255, 255, 255, 0) 20%),
                    linear-gradient(0deg, #736CED -12.07%, rgba(255, 255, 255, 0) 20%),
                    #FEF9FF;;
    }
    
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }   
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .color_boton{
       background-color: #A7C957;
    }
    .ventana{
        width: 540.93px;
        height: 693px;
        left: 482px;
        top: 26px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .padding_up{
        padding-top: 127px;
    }

</style>