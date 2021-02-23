<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Crear usuario</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Correo </label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Crear</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                user: {
                   name: '',
                   email: '',
                   gender: '',
                   phone: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/api/create-user';
                
                axios.post(apiURL, this.user).then(() => {
                  this.$router.push('/view')
                  this.user = {
                    name: '',
                    email: '',
                    gender: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>