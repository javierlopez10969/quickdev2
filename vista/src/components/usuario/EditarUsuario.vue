<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Actualizar usuario</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>Phoneeeeeee</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Actualizar</button>
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
            user: { }
        }
    },
    created() {
        let apiURL = `http://localhost:3000/api/edit-user/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.user = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/api/update-user/${this.$route.params.id}`;
            //this.user.proyectosPostulados.splice(0,1);
            axios.post(apiURL, this.user).then((res) => {
                console.log(res)
               // this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>