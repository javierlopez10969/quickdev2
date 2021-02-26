<template>
    <div>
        <row v-for="proyect in Proyects" :key="proyect._id">
            <Posit
                v-bind:name="proyect.titulo"
                v-bind:author="proyect.especialsita"
                v-bind:description="proyect.contenido"
                v-bind:id="proyect._id">
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