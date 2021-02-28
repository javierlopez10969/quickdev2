<template>
    <div>
        <row v-for="proyect in Proyects" :key="proyect._id">
            <Posit
                v-bind:titulo="proyect.titulo"
                v-bind:cliente="proyect.cliente"
                v-bind:contenido="proyect.contenido"
                v-bind:id="proyect._id">
                v-bind:idCliente="proyect.idCliente">
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
                Proyects: [],
                page:1,
                perPage:10,
                pages: []
            }
        },
        methods: {
            
        },  
        created() {
            let apiURL = 'http://localhost:3000/api/proyects';
            axios.get(apiURL).then(res => {
                this.Proyects = res.data;
            }).catch(error => {
                console.log(error)
            });
        },


    }
</script>