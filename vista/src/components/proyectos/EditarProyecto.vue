<template>
    <div row class="container-fluid text-center">
        <div>
            <h4 class="col text-left">
                <router-link 
                    :to="{name: 'MiProyecto', params: { id: usuario.idProyecto}}" 
                    class="btn btn-succes color5 border border-1 rounded-pill">Volver a mi proyecto
                </router-link>
            </h4>

        </div>
        <div class = "container-fluid ventana text-center">
            <a href="/"><img src="https://i.ibb.co/g9T9mMH/quickdev.png" alt="logo" ></a>
            <form class>
                <article class="card-body mx-auto" style="max-width: 400px;">

                    <h2 class="card-title text-center">Editar proyecto</h2>
                    {{usuario._id}}
                    {{usuario.name}}
                    <form @submit.prevent="handleUpdateForm">
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Titulo del proyecto" v-model="proyect.titulo" type="text"  required>
                        </div> 
                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Describa su proyecto</label>
                            <textarea class="form-control rounded" id="exampleFormControlTextarea1"  placeholder="Descripción" v-model="proyect.contenido" rows="3" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Requisitos para el proyecto</label>
                            <textarea class="form-control rounded" id="exampleFormControlTextarea1"  placeholder="Descripción" v-model="proyect.requisito" rows="3" required></textarea>
                        </div>                        
                        <!--Componente de tags-->
                        <div class="container-fluid">
                            <Tags 
                                v-bind:etiquetas.sync="proyect.etiquetas">
                            </Tags>  
                        </div>  
                        <!--fIN Componente de tags-->                        
                        <div class="form-group text-center">
                            <button class="btn btn-lg color4 rounded-pill" type="submit" >Guardar</button>
                        </div>                                                                     
                    </form>

                </article>   

            </form>
        </div>
        <div>

        </div>
    </div> 
</template>

<script>
import Tags from './Tags.vue'
import axios from "axios"
export default {
    props:[
        'usuario'
    ],
    components:{
        Tags,
    },
    data() {
        return {
            proyect: { },
        }
    },     
    created() {
        if (this.usuario.idProyecto == '') {
            this.$router.push('/home');
        }
        let apiURL = `http://localhost:3000/api/edit-proyect/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.proyect = res.data;
        });
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/api/update-proyect/${this.$route.params.id}`;
            axios.post(apiURL, this.proyect).then((res) => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });
        },
        volver(){
            this.$router.push('/tablon');   
        }
    },
}
</script>


<style>

</style>