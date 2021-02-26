<template>
<div class="container">
    <h1>Agregar un contacto</h1>
    <form>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="newContact.name">
        </div>
    <div>
        <label for="name">Email</label>
        <input type="text" id="email" v-model="newContact.email">
    </div>
    <div>
        <label for="name">Gender</label>
        <input type="text" id="gender" v-model="newContact.gender">
    </div>
    <div>
        <label for="name">Phone</label>
        <input type="text" id="phone" v-model="newContact.phone">
    </div>
    <div>
        <button type="button" @click="send">Crear</button>
    </div>
    <div class="info">
        <h2>Objeto</h2>
        <code>{{newContact}}</code>
        <p class="message">
            {{message}}
        </p>
    </div>
    </form>
</div>
</template>