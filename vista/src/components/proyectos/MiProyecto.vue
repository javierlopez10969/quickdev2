<template>
    
    <div row class="container-fluid text-center">
        <div col>
            <div class="container-fluid ventana">

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
                    </h2>
                    <h1>
                        Postulantes del proyecto : 
                    </h1>   
                    <li v-for="postulante in postulantes" :key="postulante._id" >
                        {{ postulante.nombre}}
                    </li>
                    <div row>
                        <router-link :to="{name: 'editProyect', params: { id: proyect._id }}" class="btn btn-success rounded-pill">Editar
                        </router-link>
                        <button @click.prevent="deleteProyect(proyect._id)" class="btn btn-danger rounded-pill">Eliminar </button>
                    </div>

            </div>
        </div>

        <div col>

        </div>

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
                postulantes : []
            }
        },   
        updated() {
            if (this.usuario.idProyecto == '' || this.usuario.idProyecto == undefined ) {
                this.$router.push('/home');
            }
        },  
        created() {
            if (this.usuario.idProyecto == '' || this.usuario.idProyecto == undefined ) {
                this.$router.push('/home');
            }
            let apiURL = `http://localhost:3000/api/edit-proyect/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.proyect = res.data;
            }).catch(error => {
                console.log(error)
            });
            this.postulantes = this.proyect.postulantes;
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
            },
            deleteProyect(id){
                let apiURL = `http://localhost:3000/api/delete-proyect/${id}`;
                if (window.confirm("Seguro que quiere borrar su proyecto")) {
                    this.actualizarIDUsuario();
                    axios.delete(apiURL).then(() => {
                        //Quitarle el id a todos los postulantes
                        this.$router.push('/home');
                    }).catch(error => {
                        console.log(error)
                        alert(error)
                    });
                }
            },
            actualizarIDUsuario(){
                //Asignar id del proyecto al usuario
                let apiURLuser = `http://localhost:3000/api/update-user/`+this.usuario._id;
                this.usuario.idProyecto = '';
                axios.post(apiURLuser, this.usuario).then((res) => {
                    console.log(res)
                    this.usuario = res;
                // this.$router.push('/view')
                }).catch(error => {
                    console.log(error)
                });
            },
            
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


