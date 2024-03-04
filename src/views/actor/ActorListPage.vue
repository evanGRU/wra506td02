<script setup>
import {onMounted, ref} from "vue";
import Header from "../../components/Header.vue";
import {isUserAuthenticated} from "../../auth.js";
import {axiosConfig, fetchData} from "../../apiCalls.js";

const actorsObject = ref({
  data: null,
  errors: null
});

onMounted(async () => {
  isUserAuthenticated();
  actorsObject.value = await fetchData('https://127.0.0.1:8000/api/actors?page=1', axiosConfig);
})

const addActor = () => {
  window.location.replace('/add/actor');
}
</script>

<template>
  <Header></Header>
  <div class="d-flex header-list">
    <h1>Liste de nos acteurs</h1>
    <button v-on:click="addActor">Ajouter un acteur</button>
  </div>
  <div class="data-container d-flex f-wrap">
    <div class="actor-card-container d-flex-center" v-for="actor in actorsObject.data">
      <router-link :to="`/actor/${actor.id}`">
        <p style="text-align: center">{{actor.firstName}} {{actor.lastName}}</p>
      </router-link>

    </div>


  </div>

</template>

<style scoped>
.header-list{
  justify-content: space-between;
  align-items: center;
}
.header-list button{
  height: 3em;
}
.header-list button:hover{
  cursor: pointer;
}
.actor-card-container{
  background-color: #343434;
  height: 3em;
  width: auto;
  max-width: 8em;
  padding: 0.5em;
}
</style>
