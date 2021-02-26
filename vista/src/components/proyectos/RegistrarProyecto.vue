<template>
    <div row class="container-fluid text-center">
        <div col></div>
        <div col class = "container-fluid ventana ">

            <a href="/"><img src="https://i.ibb.co/g9T9mMH/quickdev.png" alt="logo" ></a>
            <form class>
                <article class="card-body mx-auto" style="max-width: 400px;">

                    <h2 class="card-title text-center">Crear proyecto</h2>
                    <form @submit.prevent="handleSubmitForm">
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Nombre de usuario" type="text"  required>
                        </div> 
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Nombre" type="text"  required>
                        </div> 
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Correo electrónico" type="email"  required>
                        </div> 
                        <div class="form-group input-group">
                            <select class="custom-select rounded-pill" style="max-width: 120px;">
                                <option selected="">+569</option>
                                <option value="1">+562</option>
                            </select>
                            <input name="" class="form-control rounded-pill" placeholder="Número teléfono" type="text"  required>
                        </div> 
                        <div class="form-group input-group rounded-pill">

                            <select class="form-control rounded-pill "  required >
                                <option hidden selected disabled value="">Selecciona un género</option>
                                <option>Hombre</option>
                                <option>Mujer</option>
                                <option>Haitiano</option>
                                <option>Otro</option>
                                <option>Prefiero no decirlo</option>
                            </select>
                        </div>
                        <div class="form-group input-group">
                            <input class="form-control rounded-pill" placeholder="Contraseña" type="password"  required name="password" >
                        </div> 
                        <div class="form-group input-group">
                            <input class="form-control rounded-pill" id="passbox" placeholder="Repetir contraseña" type="password" required   >
                        </div>                                      
                        <div class="form-group text-center">
                            <button class="btn btn-lg color4 rounded-pill" type="submit"  @click="checkPassword()">Crear cuenta</button>
                        </div>     
                        <p class="text-center">¿Ya tienes cuenta?  <a href="/login">Inicia sesión aquí</a> </p>                                                                 
                        </form>
                </article>   

            </form>
        </div>

        <div col>
        </div>
    </div> 
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:3000/api/create-proyect';
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
    },
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
