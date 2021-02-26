<template>
    <div  class="contenedor"> 
        <div h1>
            <img src="https://i.ibb.co/6P44Zc9/Rectangle-12.png" alt="Rectangle-12" />
        </div>
        <div class="texto-encima">
        Titulo : {{name}}
        Descripcion :  {{description.slice(0,30)}}
        Especialista : {{author}}
        </div>
    </div>
    
</template>



<script>
export default {
    props: ['name','description','author','id'],
    data() {
        return {
            proyecto : {
                nombre: this.name,
                descripcion : this.description,
                autor: this.author,
            }
            
        }
    },
    created() {
    },
    methods: {
        setValores(nombre,descripcion,autor){
            this.nombre = nombre;
            this.autor = autor;
            this.descripcion = descripcion;
        },
        batdau(nombre) {
            this.nombre = nombre;
        }
        
    },
    updated() {
        
    },
    mounted() {
        
        this.$on('applied', (name) => {
            alert(name);
            this.name = 'Romeo';
        })
        
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