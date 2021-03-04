<template>
    
    <div row class="container-fluid ">
        <div col>
            <button class="btn btn-lg color5 rounded-pill"   
            @click="volver()" > Volver a tablón</button>
        </div>
        <div col class="container-fluid ventana text-center">
            <!-- @submit.prevent="handleUpdateForm()" -->
            <form > 
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
                <div v-if="usuario.role != 'Cliente'" >
                    <button class="btn btn-lg color4 rounded-pill" 
                    @click="checkearPostulantes();" > Postular</button>
                </div>
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
        },
        computed(){

        },
        methods: {
            handleUpdateForm() { 
                let apiURL = `http://localhost:3000/api/update-proyect/${this.$route.params.id}`;
                axios.post(apiURL, this.proyect).then((res) => {
                    console.log(res);
                    this.proyect = res.data;
                    if (this.usuario.proyectosPostulados == undefined || 
                    this.usuario.proyectosPostulados == null ||
                    this.usuario.proyectosPostulados == []) {
                        this.usuario.proyectosPostulados = [];
                    }
                    //Pusheamos un objeto
                    this.usuario.proyectosPostulados.push(
                        {
                            id : this.proyect._id ,
                            estado : 'En espera'
                        }
                    );
                    //alert(this.usuario.proyectosPostulados);
                    this.actualizarIDPostulante();
                }).catch(error => {
                    console.log(error)
                });
            },
            actualizarPostulantes(){
                //this.postulantes.push('Hola')
                this.proyect.postulantes.push(this.usuario._id);  
                this.handleUpdateForm();
            },
            actualizarIDPostulante() {
                let apiURL = `http://localhost:3000/api/update-user/`+ this.usuario._id;
                axios.post(apiURL, this.usuario).then((res) => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                    alert(error);
                });
            },
            checkearPostulantes(){
                let arreglo = this.proyect.postulantes;
                let i;
                for (i = 0; i < arreglo.length; i++) {
                    if (arreglo[i] === this.usuario._id) {
                        alert('Usted ya postulado a este proyecto')
                        this.$router.push('/tablon');
                        return false;
                    }
                }
                this.actualizarPostulantes();
                return true;
            },
            volver(){
                this.$router.push('/tablon');   
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


