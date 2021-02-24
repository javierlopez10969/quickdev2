<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Genéro</th>
                        <th>Rol</th>
                        <th>Activo</th>
                        <th>Contraseña</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user._id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.role}}</td>
                        <td>{{ user.activo }}</td>
                        <td>{{ user.pass}}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user._id }}" class="btn btn-success">Editar
                            </router-link>
                            <button @click.prevent="deleteUser(user._id)" class="btn btn-danger ">borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Users: []
            }
        },
        created() {
            let apiURL = 'http://localhost:3000/api/users';
            axios.get(apiURL).then(res => {
                this.Users = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteUser(id){
                let apiURL = `http://localhost:3000/api/delete-user/${id}`;
                let indexOfArrayItem = this.Users.findIndex(i => i._id === id);

                if (window.confirm("Seguro que quiere borrar usuario?")) {
                    axios.delete(apiURL).then(() => {
                        this.Users.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>