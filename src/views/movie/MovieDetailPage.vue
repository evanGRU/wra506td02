<script setup>
import { defineProps } from 'vue'

const props = defineProps(['movie']);
</script>

<template>
  <div class="movie-card-container d-flex justify-content-start align-item-center">
    <div class="movie-card-picture"></div>
    <div class="movie-card-details d-flex-column justify-content-start">
      <div class="movie-card-details-title">
        <h3>{{movie.title}} <span>{{movie.duration}} minutes, 2023...</span></h3>
        <p>{{movie.description}}</p>
      </div>
    </div>
  </div>
  <div class="movie-card-details-actors">
    <h3>Actors</h3>
    <div class="movie-card-details-actors-pictures d-flex align-item-center">
      <div class="movie-card-details-actors-details" v-for="actor in movie.actor">
        <p>{{actor.firstName}} {{actor.lastName}}</p>

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
  background: #adadad;
  height: 100%;
  width: 4em;
}
</style>
