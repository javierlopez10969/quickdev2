<template>
    <div>
        <row v-for="proyect in Proyects" :key="proyect._id">
            <Posit
                v-bind:titulo="proyect.titulo"
                v-bind:cliente="proyect.cliente"
                v-bind:contenido="proyect.contenido"
                v-bind:id="proyect._id">
            </Posit>
        </row>
    </div>
</template>
<script>
    /*
    // Setup schema
    let proyectSchema = mongoose.Schema({
        //Titulo del proyecto
        titulo: {type: String,required: true},
        //Cliente solicitante del proyecto : id
        cliente: {type: String},
        //Postulantes array con todos los id
        postulantes:{type: Array},
        //Especialista que se ha adjudicado el proyecto  
        especialista: {type: String},
        //Descripción del proyecto
        contenido: {type: String,required: true},
        requisito:{type: String},
        create_date: {type: Date,default: Date.now}
    });
    */
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