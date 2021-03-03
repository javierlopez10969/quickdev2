<template>
    <!-- toggle -->
        <div class="text-center">
        <button class="btn color2 rounded-circle text-center" v-b-toggle.sidebar-1><i class="bi bi-list"></i></button>
        <b-sidebar id="sidebar-1" title="Bienvenido"  shadow>
            <h3>
                {{usuario.name}}
            </h3>
            <!--
            <h3>
                {{usuario.email}}
            </h3>
            -->
            <div class="px-3 py-2">
           
            <div >
                <div class="row" >
                    <!-- Boton 1 -->
                    <a class="btn btn-default color2 border border-1"  href="/home" role="button" >Home</a>
                </div>
                <div class="row">
                    <!-- Boton 2 -->
                    <a class="btn btn-default color2 border border-1" href="/tablon" role="button">Tablón</a>
                </div>
                <div class="row" v-if="usuario.role == 'Cliente'">
                    <!-- Boton 2 -->
                    <a class="btn btn-default color2 border border-1"  href="/post" role="button">Crear proyecto</a>
                </div>
                <!-- 
                <div class="row" v-if="usuario.role == 'Cliente'">
                    Boton 2 
                    <a class="btn btn-default color2 border border-1"   href="/post" role="button">Mis proyectos publicados</a>
                </div>
                -->

                <div class="row" v-if="usuario.role == 'Especialista'">
                    <!-- Boton 2 -->
                    <a class="btn btn-default color2 border border-1"  :disabled="misProyectos"  href="/my-proyects" role="button">Mis proyectos postulados</a>
                </div>

                <div class="row" v-if="usuario.idProyecto != ''" >
                    <!-- Boton 2 -->
                    <router-link 
                    :to="{name: 'MiProyecto', params: { id: usuario.idProyecto}}" 
                    class="btn btn-succes color2 border border-1">Mi proyecto actual
                    </router-link>
                </div>
            </div>           
            </div>
        </b-sidebar>
        </div>
    <!-- toggle -->
</template>

<script>
export default {
    props:[
        'usuario'
    ],
    data() {
        return {
            misProyectos : false,
        }
    },
    created() {
        if(this.usuario.role=="Especialista"){
            if (this.usuario.proyectosPostulados  == []) {
                this.misProyectos = false;
            }else{
                this.misProyectos  =true ;
            }
        }
    },
}
</script>
