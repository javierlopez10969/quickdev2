<template>
    <div>
    <div class="container-fluid text-center">
        <div class="col">
        </div>

            <div id="msg"></div>
 
            <!-- Mensajes de Verificación -->
            <div id="error" class="alert alert-danger ocultar" role="alert">
                Las Contraseñas no coinciden, vuelve a intentar !
            </div>
            <div id="ok" class="alert alert-success ocultar" role="alert">
                Las Contraseñas coinciden ! (Procesando formulario ... )
            </div>

            <div class="col ">
                <div class="container-fluid ventana">
                    <a href="/"><img src="https://i.ibb.co/g9T9mMH/quickdev.png" alt="logo" ></a>
                  <form class="form-signin">
                    
                    <article class="card-body mx-auto" style="max-width: 400px;">
                        <h4 class="card-title text-center">Crear cuenta</h4>
                        <form @submit.prevent="handleSubmitForm">
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Nombre de usuario" type="text" v-model="user.username" required>
                        </div> 
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Nombre" type="text" v-model="user.name" required>
                        </div> 
                        <div class="form-group input-group">
                            <input name="" class="form-control rounded-pill" placeholder="Correo electrónico" type="email" v-model="user.email" required>
                        </div> 
                        <div class="form-group input-group">
                            <select class="custom-select rounded-pill" style="max-width: 120px;">
                                <option selected="">+569</option>
                                <option value="1">+562</option>
                            </select>
                            <input name="" class="form-control rounded-pill" placeholder="Número teléfono" type="text" v-model="user.phone" required>
                        </div> 
                        <div class="form-group input-group rounded-pill">

                            <select class="form-control rounded-pill " v-model="user.gender" required >
                                <option hidden selected disabled value="">Selecciona un género</option>
                                <option>Hombre</option>
                                <option>Mujer</option>
                                <option>Haitiano</option>
                                <option>Otro</option>
                                <option>Prefiero no decirlo</option>
                            </select>
                        </div>
                        <div class="form-group input-group">
                            <input class="form-control rounded-pill" placeholder="Contraseña" type="password" v-model="user.pass" required name="password" >
                        </div> 
                        <div class="form-group input-group">
                            <input class="form-control rounded-pill" id="passbox" placeholder="Repetir contraseña" type="password" v-model="pass" required   >
                        </div>                                      
                        <div class="form-group text-center">
                            <button class="btn btn-lg color4 rounded-pill" type="submit"  @click="checkPassword()">Crear cuenta</button>
                        </div>     
                        <p class="text-center">¿Ya tienes cuenta?  <a href="/login">Inicia sesión aquí</a> </p>                                                                 
                        </form>
                    </article>
                  </form>
                </div>
      
            </div>

        <div class="col">
        </div>

    </div> 
    </div>
</template>
