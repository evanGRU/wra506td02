<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from 'axios';
import Header from "../../components/Header.vue";
import {axiosConfig} from "../../apiCalls.js";
import {isUserAuthenticated} from "../../auth.js";

//get ID pass in path
const route = useRoute();
const id = route.params.id;

const movieDetail = ref({
  data: null,
  errors: null
});

onMounted(async () => {
  isUserAuthenticated();
  movieDetail.value = await axios.get('https://127.0.0.1:8000/api/movies/'+id, axiosConfig);
})
</script>

<template >
  <Header/>
  <div v-if="movieDetail.data">
    <div class="movie-card-container d-flex justify-content-start align-item-center">
      <div class="movie-card-picture"></div>
      <div class="movie-card-details d-flex-column justify-content-start">
        <div class="movie-card-details-title">
          <h3>{{movieDetail.data.title}} <span>{{movieDetail.data.duration}} minutes</span></h3>
          <h4>{{movieDetail.data.releaseDate}}</h4>
          <p>{{movieDetail.data.description}}</p>
        </div>
      </div>
    </div>
    <div class="movie-card-details-actors">
      <h3>Liste des acteurs jouant dans ce film :</h3>
      <div class="movie-card-details-actors-pictures d-flex align-item-center">
        <div class="movie-card-details-actors-details" v-for="actor in movieDetail.data.actor">
          <router-link :to="`/actor/${actor.id}`">
            <p style="text-align: center">{{actor.firstName}} {{actor.lastName}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-card-container{
  background-color: #343434;
  padding: 1em;
  gap: 3em;
  height: auto;
}
.movie-card-picture{
  background-color: #535bf2;
  height: 13em;
  width: 10em;
}
.movie-card-details{
  gap: 1em;
  height: 100%;
  min-height: 13em;
}
.movie-card-details-title h3 span{
  opacity: 0.6;
  font-style: italic;
  font-size: 12px;
}
.movie-card-details p{
  opacity: 0.9;
  font-size: 13px;
}
.movie-card-details-actors{
  margin-top: 2em;
}
.movie-card-details-actors-pictures{
  gap: 1em;
}
.movie-card-details-actors-details{
  background: #d2d2d2;
  height: 100%;
  padding: 1em;
}
</style>
