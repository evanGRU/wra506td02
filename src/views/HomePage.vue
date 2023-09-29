<script setup>
import HomeContainer from "../components/HomeContainer.vue";

const moviesList = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4'];
const actorsList = ['Actor 1', 'Actor 2', 'Actor 3', 'Actor 4'];

</script>

<template>
  <HomeContainer title="Movies" :datas="moviesList"/>
  <HomeContainer title="Actors" :datas="actorsList"/>
</template>

<style scoped>
</style>
