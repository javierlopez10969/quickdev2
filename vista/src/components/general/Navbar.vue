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
            <a class="navbar-brand" href="/home" >
                <img src="https://i.ibb.co/g9T9mMH/quickdev.png"  alt="quickdev"  height="60"/>
            </a>
            <!-- Links -->
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="/view">Usuarios registrados</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://github.com/javierlopez10969/quickdev2.git">Proyecto en GitHub</a>
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
            <div v-if= "!botones">
                    {{user.name}}
            </div>
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
                    <a class="btn btn-default color6 rounded-pill center-text"  type="submit" @click="logout()" role="button"> <i class="bi bi-power"></i>Cerrar Sesión</a>
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

 </style> 