<template>
    
    <div row class="container-fluid text-center">

        <div col>
            <div class="container-fluid ventana">
                    PROYECTO 
                    <h1>{{proyect.titulo}}</h1>
                    <h2> <br> Cliente : {{proyect.cliente}} 
                    </h2>
                    <h3>
                        <p>Contenido  :</p>
                        {{proyect.contenido}}
                    </h3>
                    <h3>
                        <p>Requisitos   :</p>
                        {{proyect.requisito}}
                    </h3>
                    <h3 v-if= "proyect.tags.length==0">
                        <p> Actualmente no hay categorías </p>
                    </h3>
                    <h3 v-else>
                        <p> Categorías : </p>
                        <li v-for="tag in proyect.tags" :key="tag">
                            {{tags}}
                        </li>
                        
                    </h3>

                    <div row>
                        <router-link :to="{name: 'editProyect', params: { id: proyect._id }}" class="btn btn-success rounded-pill">Editar
                        </router-link>
                        <button @click.prevent="deleteProyect(proyect._id)" class="btn btn-danger rounded-pill">Eliminar </button>
                    </div>
            </div>
        </div>
        <!-- Mostrar todos los postulantes-->
        <div class="row" v-if="proyect.postulantes!= undefined && proyect.postulantes.length > 0">
        <h3 >
            <br> <p>Postulantes al proyecto  : </p> 
        </h3>
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>Nombre Empresa</th>
                            <th>Activo</th>
                            <th>Especialidad</th>
                            <th> Estado </th>
                            <th>Cambiar estado Postulante</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in Users" :key="user._id">
                            <template v-if=" proyect.postulantes.includes(user._id)">
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.phone }}</td>
                                <td>{{ user.nameEmpresa }}</td>
                                <td>{{ user.activo }}</td>
                                <td>{{ user.especialidad}}</td>
                                <td> {{estadoActual (user.proyectosPostulados)}} </td>
                                <td>
                                    <button @click="actualizarPostulante(proyect._id,user._id,'Aceptado')" class="btn btn-success rounded-pill"> Aceptar</button>
                                    <button @click="actualizarPostulante(proyect._id,user._id,'Rechazado')" class="btn btn-danger rounded-pill "> Rechazar</button>
                                    <button @click="actualizarPostulante(proyect._id,user._id,'En espera')" class="btn btn-secondary rounded-pill "> En espera</button>
                                </td>
                            </template>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <h3 v-else>
            <br> No hay postulantes actualmente
        </h3>

        <div col>

        </div>

    </div> 
</template>
<script>
import axios from "axios";
    export default {
        props:[
            'usuario'
        ],
        data() {
            return {
                proyect: { },
                Users : [],
            }
        },   
        updated() {
            if (this.usuario.idProyecto == '' || this.usuario.idProyecto == undefined ) {
                this.$router.push('/home');
            }
        },  
        created() {
            if (this.usuario.idProyecto == '' || this.usuario.idProyecto == undefined ) {
                this.$router.push('/home');
            }
            let apiURL = `http://localhost:3000/api/edit-proyect/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.proyect = res.data;
            }).catch(error => {
                console.log(error)
            });
            axios.get('http://localhost:3000/api/users').then(res => {
                this.Users = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            checkearPostulantes(){
                let arreglo = this.proyect.postulantes;
                let i;
                for (i = 0; i < arreglo.length; i++) {
                    if (arreglo[0].id === this.usuario._id) {
                        alert('usted ya postulado a este proyecto')
                        this.$router.push('/tablon');
                        return false;
                    }
                }
                this.actualizarPostulantes();
                return true;
            },
            deleteProyect(id){
                let apiURL = `http://localhost:3000/api/delete-proyect/${id}`;
                if (window.confirm("Seguro que quiere borrar su proyecto")) {
                    //this.actualizarIDPostulantes();
                    this.actualizarIDUsuario();
                    let idProyecto = this.proyect._id;
                    axios.delete(apiURL).then(() => {
                        //Quitarle el id a todos los postulantes
                        this.$router.push('/home');
                    }).catch(error => {
                        console.log(error)
                        alert(error)
                    });
                    this.actualizarIDPostulantes(idProyecto);
                }
            },
            actualizarIDUsuario(){
                //Asignar id del proyecto al usuario
                let apiURLuser = `http://localhost:3000/api/update-user/`+this.usuario._id;
                this.usuario.idProyecto = '';
                axios.post(apiURLuser, this.usuario).then((res) => {
                    console.log(res)
                    this.usuario = res;
                // this.$router.push('/view')
                }).catch(error => {
                    console.log(error)
                });
            },
            actualizarIDPostulantes(idProyecto){
                for (let index = 0; index < this.proyect.postulantes.length; index++) {
                    const user =  this.Users.find(user => user._id === this.proyect.postulantes[index]);
                    //Buscamos el indice del proyecto actual que se esta borrando
                    let pos = user.proyectosPostulados.indexOf(proyect => proyect.id === idProyecto);
                    //Procedemos a borrarlo de los proyectos postulados del usuario
                    user.proyectosPostulados.splice(pos,1);
                    //Una vez  borrado el proyecto, procedemos a actualizar al usario en la base de datos                  
                    let apiURLuser = 'http://localhost:3000/api/update-user/' + this.proyect.postulantes[index] ;
                    axios.post(apiURLuser, user).then((res) => {
                        console.log(res)
                    // this.$router.push('/view')
                    }).catch(error => {
                        console.log(error)
                        alert(error);
                    });
                }
            },
            //Actualizar id del postulante
            actualizarPostulante(idProyecto , idUser,state){
                let user =  this.Users.find(user => user._id === idUser);
                let nameUser = user.name;
                let dialogo = '';
                if(state=='Aceptado'){
                    dialogo = '¿Seguro que quiere aceptar a ' + nameUser + ' ?';
                }else if(state=='Rechazado'){
                    dialogo = '¿Seguro que quiere rechazar a ' + nameUser + ' ?';
                }else{
                    dialogo = '¿Dejar en espera a ' + nameUser + '?';
                }
                if (window.confirm(dialogo)) {
                    //Buscamos el indice del proyecto actual que se esta borrando
                    let pos = user.proyectosPostulados.indexOf(proyect => proyect.id === idProyecto);
                    //Procedemos a borrarlo de los proyectos postulados del usuario
                    const newState =  {
                        id : idProyecto,
                        estado : state
                    }
                    user.proyectosPostulados.splice(pos,1,newState);
                    //Una vez  borrado el proyecto, procedemos a actualizar al usario en la base de datos                  
                    let apiURLuser = 'http://localhost:3000/api/update-user/' + idUser ;
                    axios.post(apiURLuser, user).then((res) => {
                        console.log(res)
                    // this.$router.push('/view')
                    }).catch(error => {
                        console.log(error)
                        alert(error);
                    });
                }

            },
            //Metodo que devuelve el estado actual de los postulados
            estadoActual(arreglo){
                return arreglo.find(user => user.id === this.proyect._id).estado;
            }
                       
        }    
    }
</script>
<style>
    body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    }
    body {
        background: linear-gradient(180deg, #736CED -7.87%, rgba(255, 255, 255, 0) 20%),
                    linear-gradient(0deg, #736CED -12.07%, rgba(255, 255, 255, 0) 20%),
                    #FEF9FF;;
    }

    .divider-text {
        position: relative;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .divider-text span {
        padding: 7px;
        font-size: 12px;
        position: relative;   
        z-index: 2;
    }
    .divider-text:after {
        content: "";
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #ddd;
        top: 55%;
        left: 0;
        z-index: 1;
    }
    .ocultar {
    display: none;
    }
    .mostrar {
        display: block;
    }

    .ventana{
        width: 540.93px;
        height: 800px;
        left: 482px;
        top: 26px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .padding_up{
        padding-top: 15px;
    }
    .margin-l{
        margin-left: 51px;
    }

    

</style>


