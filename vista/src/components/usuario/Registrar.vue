<template>
    <div>


    <div class="container-fluid text-center">
        <div class="col">
        </div>

            <div id="msg"></div>
 
            <!-- Mensajes de Verificación -->
            <div id="error" class="alert alert-danger ocultar" role="alert">
                Las Contraseñas no coinciden, vuelve a intentar !
            </div>
            <div id="ok" class="alert alert-success ocultar" role="alert">
                Las Contraseñas coinciden ! (Procesando formulario ... )
            </div>

            <div class="col ">
                <div class="container-fluid ventana">
                    <a href="/"><img src="https://i.ibb.co/g9T9mMH/quickdev.png" alt="logo" ></a>
                  <form class="form-signin">
                    
                    <article class="card-body mx-auto" style="max-width: 400px;">
                        <h4 class="card-title text-center">Crear cuenta</h4>
                        <form @submit.prevent="handleSubmitForm">
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Nombre de usuario" type="text" v-model="user.username" required>
                        </div> 
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Nombre" type="text" v-model="user.name" required>
                        </div> 
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Correo electrónico" type="email" v-model="user.email" required>
                        </div> 
                        <div class="form-group input-group">
                            <select class="custom-select rounded-pill" style="max-width: 120px;">
                                <option selected="">+569</option>
                                <option value="1">+562</option>
                            </select>
                            <input name="" class="form-control rounded-pill" placeholder="Número teléfono" type="text" v-model="user.phone" required>
                        </div> 
                        <div class="form-group input-group rounded-pill">

                            <select class="form-control rounded-pill " v-model="user.gender" required >
                                <option hidden selected disabled value="">Selecciona un género</option>
                                <option>Hombre</option>
                                <option>Mujer</option>
                                <option>Haitiano</option>
                                <option>Otro</option>
                                <option>Prefiero no decirlo</option>
                            </select>
                        </div>
                        <div class="form-group input-group">
                            <input class="form-control rounded-pill" placeholder="Contraseña" type="password" v-model="user.pass" required name="password" >
                        </div> 
                        <div class="form-group input-group">
                            <input class="form-control rounded-pill" id="passbox" placeholder="Repetir contraseña" type="password" v-model="pass" required   >
                        </div>                                      
                        <div class="form-group text-center">
                            <button class="btn btn-lg color4 rounded-pill" type="submit"  @click="checkPassword()">Crear cuenta</button>
                        </div>     
                        <p class="text-center">¿Ya tienes cuenta?  <a href="/login">Inicia sesión aquí</a> </p>                                                                 
                        </form>
                    </article>
                  </form>
                </div>
      
            </div>

        <div class="col">
        </div>

    </div> 
    </div>
</template>


<script>

    import axios from "axios";

    export default {
        data() {
            return {
                user: {                    
                    username: '', 
                    name: '',
                    email: '',
                    gender: '',
                    phone: '',
                    pass: '',
                    
                },
                pass: ''
            }
        },
        computed: {
            fullName: function () {
                return this.firstName + ' ' + this.lastName
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/api/registrar';
                this.pass = '';
                this.limpiarMensaje();
                axios.post(apiURL, this.user).then(() => {
                  //this.$router.push('/view')
                  this.user = {
                    username:'',  
                    name: '',
                    email: '',
                    gender: '',
                    pass: '',
                    phone: '',
                  } 
                 //
                }).catch(error => {
                    alert(error)
                    console.log(error)
                });
            },
            checkPassword() {
                // Verificamos si las constraseñas no coinciden 
                if (this.user.pass != this.pass) {
                   //alert("No coinciden las contraseñas")
                   document.getElementById("passbox").setCustomValidity("Las contraseñas no coinciden")
                   
                   
                    // Si las constraseñas no coinciden mostramos un mensaje 
                   // document.getElementById("error").classList.add("mostrar");
                   //a.setCustomValidity("asdgasdgf dasgfas <3");
                    
                }
                else {                    
                    document.getElementById("passbox").setCustomValidity('') 
                    document.getElementById("passbox").selected = false 
                }
            },
            limpiarMensaje(){
                document.getElementById("passbox").setCustomValidity('')  
            }

        }
    }
</script>

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

    .divider-text {
        position: relative;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .divider-text span {
        padding: 7px;
        font-size: 12px;
        position: relative;   
        z-index: 2;
    }
    .divider-text:after {
        content: "";
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #ddd;
        top: 55%;
        left: 0;
        z-index: 1;
    }
    .ocultar {
    display: none;
    }
    .mostrar {
        display: block;
    }

    .ventana{
        width: 540.93px;
        height: 800px;
        left: 482px;
        top: 26px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .padding_up{
        padding-top: 15px;
    }
    .margin-l{
        margin-left: 51px;
    }

    

</style>


