<template>
    <div class="contenedor" > 
        <img hre src="https://i.ibb.co/6P44Zc9/Rectangle-12.png" alt="Rectangle-12" width="250" height="250" />
        <div class="texto-encima">

            <div class = "color7">
                <h4>{{titulo.slice(0,20)}} ...</h4>
                <h5>{{contenido.slice(0,30)}}...</h5>
                <h6> Cliente :{{cliente}}</h6>
            </div>
            <router-link 
            :to="{name: 'proyecto', params: { id: id}}" 
            class="btn btn-succes color6 rounded-pill">Ver Proyecto
            </router-link>
        </div>
    </div>
    
</template>



<script>
export default {
    props: [
        'id',
        'titulo',
        'cliente',
        'postulantes',
        'especialista',
        'contenido',
        'requisito'],
    data() {
        return {
        }
    },
    computed(){

    },
    created() {
    },
    methods: {
        
    },
    updated() {
        
    },
    mounted() {
        
    },
}
</script>

<style >
    .contenedor{
        position: relative;
        display: inline-block;
        text-align: center;
    }
    .texto-encima{
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .centrado{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>