<template>
 <div class="container-fluid">

    <!-- barra superior -->
    <div class="row color1">
        <nav class="navbar navbar-expand-sm navbar-dark color1">
            <!-- Brand/logo -->
            <a class="navbar-brand" href="/" >
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
                    <a class="nav-link" href="#">Link 3</a>
                    </li>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2 rounded-pill" type="search" placeholder="Busca tu proyecto" aria-label="Search">
                        <button class="btn btn-outline-success color3 rounded-pill" type="submit">Buscar</button>
                    </form>
                </ul>

            </div>
            <ul class="nav navbar-nav navbar-right"  v-if="botones">
                <!-- Boton Iniciar Sesion -->
                    <a class="btn btn-default color2 rounded-pill"  href="/login" role="button" >Iniciar Sesión</a>
                <!-- Boton Registrarse -->
                <div class="col-sm button ">
                    <a class="btn btn-default color2 rounded-pill " href="/registrar" role="button">Registrarse</a>
                </div>

            </ul>
            <ul v-else>
                
                    <a class="btn btn-default color2 rounded-pill"  href="/home" role="button" > Zapallo</a>
            </ul>

        </nav>
        
    </div>
    </div>       
</template>

<script>
export default {
    methods: {
    //user is not authorized

   
    },
    computed:{
        ocultar() {
        let botones = true ;
        if (localStorage.getItem('token') === null) {
            botones = true
        }else{
            botones = false
        }
        return botones;

        }
    },
    data() {
        return {
            botones: true,
            //usuario : ,
        }
    },
    /*
    watch :{
        botones = ocultar();

    },*/
    mounted() {
        this.botones = this.ocultar()
    },
    created(){
        this.ocultar()
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
    .carousel .item {
        height: 500px;
        margin: auto;
    }
    .carousel-inner {
        padding-top:70px; 
        overflow:hidden;
    }

    .carousel-caption {
        top: -70px;
        bottom: auto;
        background: rgba(0, 0, 0, 0);
    }


    .item img {
        height: auto;
        width: 100%;
        margin: auto;
        object-fit: contain;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        height: 100px;
        width: 100px;
        outline: black;
        background-size: 100%, 100%;
        border-radius: 50%;
        border: 1px solid black;
        background-image: none;
    }

    .carousel-control-next-icon:after
    {
        content: '>';
        font-size: 55px;
        color: red ;
    }

    .carousel-control-prev-icon:after {
        content: '<';
        font-size: 55px;
        color: red ;
    }
 </style> 