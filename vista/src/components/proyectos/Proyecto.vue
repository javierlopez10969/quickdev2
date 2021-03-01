<template>
    
    <div row class="container-fluid text-center">
        <div col>

        </div>
        <div col class="container-fluid ventana ">
            <!--  -->
            <form @submit.prevent="handleUpdateForm"> 
                PROYECTO 
                <h1>{{proyect.titulo}}</h1>
                <h2> Cliente : {{proyect.cliente}} 
                    id Cliente : {{proyect.idCliente}}
                </h2>
                <h6>
                <p>{{proyect.contenido}}
                </p> 
                </h6>
                <h2>
                    <p> 
                    Postulantes proyect : 
                    </p>
                    {{proyect.postulantes}}
                   
                </h2>
                    <div class="form-group text-center">
                </div>   
                <button class="btn btn-lg color4 rounded-pill" v-if="usuario.role != 'Cliente'"  
                @click="checkearPostulantes();" > Postular</button>
            </form>


        </div>
        <div col></div>

    </div> 
</template>
<script>
import axios from "axios";
    export default {
        props:[
            'usuario'
        ],
        data() {
            return {
                proyect: { },
            }
        },     
        created() {
            let apiURL = `http://localhost:3000/api/edit-proyect/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.proyect = res.data;
            });
            this.checkearPostulantes();
        },
        computed(){

        },
        methods: {
            handleUpdateForm() {
                let apiURL = `http://localhost:3000/api/update-proyect/${this.$route.params.id}`;
                axios.post(apiURL, this.proyect).then((res) => {
                    console.log(res)
                // this.$router.push('/view')
                }).catch(error => {
                    console.log(error)
                });
            },
            actualizarPostulantes(){
                //this.postulantes.push('Hola')
                this.proyect.postulantes.push({
                    nombre: this.usuario.name, 
                    id: this.usuario._id 
            });
            },
            checkearPostulantes(){
                let arreglo = this.proyect.postulantes;
                let i;
                for (i = 0; i < arreglo.length; i++) {
                    if (arreglo[0].id === this.usuario._id) {
                        alert('usted ya postulado a este proyecto')
                        this.$router.push('/tablon');
                        return false;
                    }
                }
                this.actualizarPostulantes();
                return true;
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


