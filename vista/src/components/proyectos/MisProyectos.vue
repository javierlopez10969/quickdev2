<template>
    <div>
        <div >
            <h1 v-if="Proyects== 0">
                No existen proyectos actualmente
            </h1>
            <h1 v-else>
                Los proyectos a los que ha postulado :
            </h1>
        </div>
        <div>
          Proyectos postulados
            <row v-for="proyect in usuario.proyectosPostulados" :key="proyect._id">
              <br>ID  : {{proyect.id}} Estado : {{proyect.estado}}
            </row>
      </div>
        <row v-for="proyect in Proyects" :key="proyect._id">
            <Posit 
            v-if="isInside(proyect._id)"
            v-bind:proyecto="proyect">
            </Posit>
        </row>

    </div>
</template>
<script>
    import axios from "axios";
    import Posit from './Posit.vue';
    export default {    
        components :{
            Posit,
        },
        data(){
            return{
                usuario: {},
                Proyects: [],
                page:1,
                perPage:10,
                pages: []
            }
        },
        created() {

        },
        methods: {
            //Metodo que permite saber si ese proyecto ha postulado el especialista o no
            isInside(id){
                for (let index = 0; index < this.usuario.proyectosPostulados.length; index++) {
                    if (id==this.usuario.proyectosPostulados[index].id) {
                        return true
                    }
                }
                return false;
            }
        },
        mounted() {
            let apiURL = 'http://localhost:3000/api/proyects';
            axios.get(apiURL).then(res => {
                this.Proyects = res.data;
            }).catch(error => {
                console.log(error)
            });
            axios.get('http://localhost:3000/api/user',
            { headers: { token: localStorage.getItem('token')}})
            .then(res => {
                this.usuario = res.data.user;
            });
        },


    }
</script>