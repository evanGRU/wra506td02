<script setup>
import {onMounted, ref} from "vue";
import {isUserAuthenticated} from "../auth.js";
import HomeContainer from "../components/HomeContainer.vue";
import Header from "../components/Header.vue";
import {fetchData} from "../apiCalls.js";

const movieList = ref({
  data: null,
  errors: null
});
const actorList = ref({
  data: null,
  errors: null
});

onMounted(async () => {
  isUserAuthenticated();

  try {
    movieList.value = await fetchData('https://127.0.0.1:8000/api/movies?page=1&itemsPerPage=4');
    actorList.value = await fetchData('https://127.0.0.1:8000/api/actors?page=1&itemsPerPage=4');
  } catch (error) {
    console.error(error);
  }
})
</script>

<template>
  <Header/>
  <HomeContainer title="Movies" :datas="movieList.data"/>
  <HomeContainer title="Actors" :datas="actorList.data"/>
</template>

<style scoped>
</style>
