<script setup>
import Header from "../../components/Header.vue";
import {onMounted, ref} from "vue";
import {axiosConfig, fetchData} from "../../apiCalls.js";
import {isUserAuthenticated} from "../../auth.js";

const moviesObject = ref({
  data: null,
  errors: null
});

onMounted(async () => {
  isUserAuthenticated();
  moviesObject.value = await fetchData('https://127.0.0.1:8000/api/movies?page=1', axiosConfig);
})

const addMovie = () => {
  window.location.replace('/add/movie');
}
</script>

<template>
  <Header/>
  <div class="d-flex header-list">
    <h1>Tous nos films</h1>
    <button v-on:click="addMovie">Ajouter un film</button>
  </div>
  <div class="data-container d-flex f-wrap">
    <div v-if="moviesObject.errors">
      <h2>Une erreur s'est produite...</h2>
    </div>
    <div
        v-for="movie in moviesObject.data"
        class="movie-card-list d-flex-center"
        v-else
    >
      <router-link :to="`/movie/${movie.id}`" :movie="movie">
        <h3>{{movie.title}}</h3>
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
.movie-card-list{
  height: 3em;
  width: 8em;
  background-color: #343434;
}
.movie-card-list:hover{
  cursor: pointer;
}
</style>
