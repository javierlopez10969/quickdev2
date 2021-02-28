<template>
    <div class="contenedor" > 
        <img hre src="https://i.ibb.co/6P44Zc9/Rectangle-12.png" alt="Rectangle-12" width="250" height="250" />
        <div class="centrado text-center color7">

            <div class = " rowtext-center color7">
                <div col> 
                    <h4>{{proyecto.titulo.slice(0,20)}} ...</h4>
                </div>
                <div>
                    <h5>{{proyecto.contenido.slice(0,30)}}...</h5>
                </div>
                <div>
                    <h5> Cliente :{{proyecto.cliente}}</h5>
                </div>
                <div>
                   ID cliente : {{proyecto.idCliente}}
                </div>
            </div>

        </div>

        <div class="texto-encima">
            <router-link 
            :to="{name: 'proyecto', params: { id: proyecto._id}}" 
            class="btn btn-succes color6 bottom rounded-pill">Ver Proyecto
            </router-link>
        </div>
    </div>
    
</template>



<script>
export default {
    props: [
        'proyecto',
        ],
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