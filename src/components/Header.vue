<script setup>
import Navbar from "./Navbar.vue";
import {getUsername, logOut} from "../auth.js";

</script>

<template>
  <div class="headerContainer">
    <Navbar></Navbar>
    <div class="d-flex align-item-center" style="gap: 10px">
      <p>Votre compte: {{getUsername()}}</p>
      <button v-on:click="logOut" class="headerButton">LogOut</button>
    </div>
  </div>
</template>

<style scoped>
.headerContainer{
  display: flex;
  justify-content: space-between;
  height: 5em;
  align-items: center;
  margin-bottom: 3em;
}
.headerButton {
  cursor: pointer;
  height: 3em;
}
</style>
