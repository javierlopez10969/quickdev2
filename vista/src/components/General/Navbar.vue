<template>
 <div class="container-fluid">

    <!-- barra superior -->
    <div class="row color1">
        <nav class="navbar navbar-expand-sm navbar-dark color1">
            <!-- Brand/logo -->
            <a class="navbar-brand" href="#">
                <img src="https://i.ibb.co/JcL3ghH/logo.png" onClick="window.location.reload();" alt="" height="40">
            </a>
            <!-- Links -->
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                    </li>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2 rounded-pill" type="search" placeholder="Busca tu producto" aria-label="Search">
                        <button class="btn btn-outline-success color3 rounded-pill" type="submit">Buscar</button>
                    </form>
                </ul>

            </div>
                <ul class="nav navbar-nav navbar-right">
                    <!-- Boton Iniciar Sesion -->
                    <div class="col-sm button">
                        <a class="btn btn-default color2 rounded-pill " href="/login" role="button">Iniciar Sesión</a>
                        
                    </div>
                    <!-- Boton Registrarse -->
                    <div class="col-sm button ">
                        <a class="btn btn-default color2 rounded-pill " href="/register" role="button">Registrarse</a>
                    </div>

                </ul>

        </nav>
        
    </div>
    </div>

        


        
</template>