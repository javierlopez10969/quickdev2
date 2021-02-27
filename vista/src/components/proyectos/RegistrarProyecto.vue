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
                            <input name="" class="form-control rounded-pill" placeholder="Titulo del proyecto" v-model="proyect.titulo" type="text"  required>
                        </div> 
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Descripción" type="text" v-model="proyect.contenido"  required>
                        </div> 
                        <div class="container-fluid">
                            <Tags 
                            v-bind:etiquetas.sync="proyect.etiquetas"></Tags>  
                        </div>  
                        <div class="form-group text-center">
                            <button class="btn btn-lg color4 rounded-pill" type="submit">Crear proyecto</button>
                        </div>                                                                     
                        </form>
                </article>   

            </form>
        </div>

        <div col>
        </div>
    </div> 
</template>
<script>
import Tags from './Tags.vue'
import axios from "axios"
export default {
    props:[
        'usuario',
    ],
    components:{
        Tags
    },
    data() {
        return {
            proyect:{
                titulo:'',  
                cliente : '',
                postulantes :[],
                etiquetas: [],
                id :'',
                tags : [],
                especialista : '',
                contenido :'',
                requisito : ''
            }
        }
    },
    created() {
        this.id = this.usuario._id;
        this.cliente = this.usuario.nombre;
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:3000/api/create-proyect';
            axios.post(apiURL, this.proyect).then(() => {
                //this.$router.push('/view')
                //Mostar mensaje de proyecto creado
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
