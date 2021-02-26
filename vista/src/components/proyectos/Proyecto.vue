<template>
    
    <div row class="container-fluid text-center">
        <div col>

        </div>
        <div col class="container-fluid ventana ">
            <!--  @submit.prevent="handleUpdateForm"-->
            <form>
                            PROYECTO 
                <h1>{{proyect.titulo}}</h1>
                <h2> Cliente : {{proyect.titulo}} </h2>
                <h6>
                <p>{{proyect.contenido}}
                        </p> 
                </h6>
                <h2>
                    <p> 

                    Postulantes data: 
                    </p>
                    {{postulantes}}
                    <p> 

                    Postulantes proyect : 
                    </p>
                    {{proyect.postulantes}}
                </h2>
                <div class="form-group">
                    <div class="form-group text-center">
                        <button class="btn btn-lg color4 rounded-pill" type="submit" 
                        @click="actualizarPostulantes()" > Postular</button>
                    </div>    
                </div>

            </form>



        </div>
        <div col></div>

        <!--
        <div class="col ventana">

            <form>
                <fieldset disabled>
                    <legend>Disabled fieldset example</legend>
                    <div class="mb-3">
                                              
                    <label for="disabledTextInput" class="form-label">Disabled input</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                    </div>
                    <div class="mb-3">
                    <label for="disabledSelect" class="form-label">Disabled select menu</label>
                    <select id="disabledSelect" class="form-select">
                        <option>Disabled select</option>
                    </select>
                    </div>
                    <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
                        <label class="form-check-label" for="disabledFieldsetCheck">
                        Can't check this
                        </label>
                    </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
                </form>
        </div>
        -->

    </div> 
</template>
<script>
import axios from "axios";
    export default {
        data() {
            return {
                proyect: { },
                postulantes: [''],


            }
        },        
        created() {
            let apiURL = `http://localhost:3000/api/edit-proyect/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.proyect = res.data;
            })
            this.postulantes = this.proyect.postulantes;
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
            actualizarPostulantes(){
                this.postulantes.push('Hola')
                this.proyect.postulantes.push("hola")
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


