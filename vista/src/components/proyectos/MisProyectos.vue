<template>
    <div>
        <div v-if="Proyects.length === 0">
            <h1>
                No existen proyectos actualmente
                
            </h1>
        </div>
        <row v-for="proyect in Proyects" :key="proyect._id">
            <Posit 
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
        methods: {
            filtrar(){
                let k = 0;        
                let index = 0;    
                while ( index < this.Proyects.length()) {
                    //Eliminar el elemento index
                    if(k== this.usuario.proyectosPostulados.length()){
                        k = 0;
                        this.Proyects.splice(index, 1);
                    }
                    else if (this.usuario.proyectosPostulados[k] == this.Proyects[index]._id) {
                        index++;
                        k = 0;
                    }
                    else{
                        k ++;
                    }
                }
            }
        },
        mounted() {
            this.filtrar();
        },


    }
</script>