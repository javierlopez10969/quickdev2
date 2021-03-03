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

                    <div row>
                        <router-link :to="{name: 'editProyect', params: { id: proyect._id }}" class="btn btn-success rounded-pill">Editar
                        </router-link>
                        <button @click.prevent="deleteProyect(proyect._id)" class="btn btn-danger rounded-pill">Eliminar </button>
                    </div>
            </div>
        </div>
        <!-- Mostrar todos los postulantes-->
        <div class="row" v-if="proyect.postulantes!= undefined">
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
                        <th>Rol</th>
                        <th>Activo</th>
                        <th>Especialidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user._id">
                        <template v-if=" esPostulante(user._id)">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.phone }}</td>
                            <td>{{ user.nameEmpresa }}</td>
                            <td>{{ user.role}}</td>
                            <td>{{ user.activo }}</td>
                            <td>{{ user.especialidad}}</td>
                            <td>
                                <router-link :to="{name: 'edit', params: { id: user._id }}" class="btn btn-success rounded-pill"> Aceptar
                                </router-link>
                                <button @click.prevent="deleteUser(user._id)" class="btn btn-danger rounded-pill "> Rechazar</button>
                            </td>
                        </template>

                    </tr>
                </tbody>
            </table>
        </div>

        </div>
        <h3 v-else>
            No hay postulantes actualmente
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
            handleUpdateForm() {
                let apiURL = `http://localhost:3000/api/update-proyect/${this.$route.params.id}`;
                axios.post(apiURL, this.proyect).then((res) => {
                    console.log(res)
                // this.$router.push('/view')
                }).catch(error => {
                    console.log(error)
                });
            },
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
                    this.actualizarIDUsuario();
                    axios.delete(apiURL).then(() => {
                        //Quitarle el id a todos los postulantes
                        this.$router.push('/home');
                    }).catch(error => {
                        console.log(error)
                        alert(error)
                    });
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
            esPostulante(id){
                for (let index = 0; index < this.proyect.postulantes.length; index++) {
                    if (id == this.proyect.postulantes[index].id) {
                        return true;
                    }
                }
                return false;

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


