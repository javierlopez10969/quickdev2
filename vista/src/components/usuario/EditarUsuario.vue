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
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>

                <label>Género </label>
                <div class="form-group input-group rounded-pill">
                    
                    <select class="form-control rounded-pill " v-model="user.gender" required placeholder="Seleccionar tipo de prec" >
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Haitiano</option>
                    </select>
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

            axios.post(apiURL, this.user).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>