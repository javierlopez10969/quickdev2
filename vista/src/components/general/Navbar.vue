<template>
 <div class="container-fluid">

    <!-- barra superior -->
        <div class="row color1" >                    
            
            <nav class="navbar navbar-expand-sm" >
            <div row>

            </div>
            <!--sidebar opcional-->
            <div row class="" v-if="!botones">
                
                <Sidebar
                v-bind:usuario=user
                >
                </Sidebar>
            </div>    



            <!-- Brand/logo -->
            <a class="navbar-brand" href="/" v-if="botones" >
                <img src="https://i.ibb.co/g9T9mMH/quickdev.png"  alt="quickdev"  height="60"/>
            </a>
            <a class="navbar-brand" href="/home" v-else >
                <img src="https://i.ibb.co/g9T9mMH/quickdev.png"  alt="quickdev"  height="60"/>
            </a>
            <!-- Links -->
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="/view/">Usuarios registrados</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/home">Link 3</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/proyecto">Link 3</a>
                    </li>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2 rounded-pill" type="search" placeholder="Busca tu proyecto" aria-label="Search">
                        <button class="btn btn-outline-success color3 rounded-pill" type="submit">Buscar</button>
                    </form>
                </ul>


            </div>
             <!-- Carta Perfil -->
            <div v-if= "!botones" >
                <div class="card UserCard" style="max-width: 205px; border: 0px;" >
                    <div class="row no-gutters ">
                        <div class="col-md-4">
                            <img src="https://i.ibb.co/5RxkXzx/blank-profile-picture-973460-640.png" class="card-img" alt="User" style="width:100%">
                       </div>
                        <div class="col-md-8">
                            <div class="card-body mx-0 px-0">
                             <p class="card-title textSmall text-center padding-fix" >{{user.name}}</p>
                             <p class="card-text textSmall padding-fix text-center">{{user.role}}</p>
                                <!-- 
                             <p class="card-text textSmall text-center padding-fix color8" role="button"><a class="letra-blanca" href="/"> <i class="bi bi-gear-fill"></i> Editar mi perfil</a></p>
                             -->
                             <p class="card-text textSmall text-center padding-fix color8" role="button">           
                                   <router-link class="letra-blanca" :to="{name: 'edit', params: { id: user._id}}" ><i class="bi bi-gear-fill"></i> Editar mi perfil </router-link>
                            </p>
                             <p class="card-text textSmall padding-fix color6 text-center redondeado-abajo-derecha" @click="logout()" role="button"> <i class="bi bi-power"></i> Cerrar Sesión</p>    
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- 
            <div v-if= "!botones">
                    {{user.name}}
            </div>
-->
            <ul class="nav navbar-nav navbar-right"  v-if="botones">
                <!-- Boton Iniciar Sesion -->
                    <a class="btn btn-default color2 rounded-pill"  href="/login" role="button" >Iniciar Sesión</a>
                <!-- Boton Registrarse -->
                <div class="col-sm button ">
                    <a class="btn btn-default color2 rounded-pill " href="/registrar" role="button">Registrarse</a>
                </div>

            </ul>
            <ul class="nav navbar-nav navbar-right"  v-if="!botones">
                <ul class="nav navbar-nav navbar-right">
                        
                </ul>

                <div>
                    <!-- 
                    <a class="btn btn-default color6 rounded-pill center-text"  type="submit" @click="logout()" role="button"> <i class="bi bi-power"></i>Cerrar Sesión</a>
                -->
                </div>
            </ul>

            </nav>        
        </div>
    
    
    </div>  
  
</template>


<script>

import Sidebar from './Sidebar.vue';
export default {
    components:{
        Sidebar,
    },
    methods: {  
        logout() {
            localStorage.clear();
            if (window.location.pathname == "/"){
                location.reload();
            }else{
                this.$router.push('/');
            }
        } 
    },
    props: [
        'botones',
        'user'
        ],
    data() {
        return {
        }
    },
 
    mounted: function () {
    },
    created(){

    }

}
</script>

<!--CSS
estilo de colores (pude ser HEX)   ej #FFFFFF 
    -->
<style> 
    .margen_up{
        margin-top: 8%;
    }
    .margen_r{
        margin-right: 5%;
    }
    .margen_l{
        margin-left: 5%;
    }
    .padding-text{
        padding-top:30px;
    }
    .centrado{
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .item img {
        height: auto;
        width: 100%;
        margin: auto;
        object-fit: contain;
    }
    /* The sidebar menu */
    .sidenav {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: 160px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0;
        left: 0;
        background-color: #111; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
  }

    /* The navigation menu links */
    .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    display: block;
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
        color: #f1f1f1;
    }

    /* Style page content */
    .main {
    margin-left: 160px; /* Same as the width of the sidebar */
    padding: 0px 10px;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
    }
    .UserCard {
    max-height: 68px;
    
    }
    .textSmall{
        margin-top: -16px;
        font-size: 11px !important;
    }
    .padding-fix{
        padding-top: 1px;
        padding-right: 10px;
    }
    .redondeado-abajo-derecha{
        border-bottom-right-radius: 4px;
    }
 </style> 