<script setup>
import {onMounted, ref} from "vue";
import {isUserAuthenticated} from "../auth.js";
import HomeContainer from "../components/HomeContainer.vue";
import Header from "../components/Header.vue";

const movieList = ref([]);
const actorList = ref([]);

onMounted(async () => {
  isUserAuthenticated();
})
</script>

<template>
  <Header/>
  <HomeContainer title="Movies" :datas="movieList"/>
  <HomeContainer title="Actors" :datas="actorList"/>
</template>

<style scoped>
</style>
