<script setup>
import {onMounted, ref} from "vue";
import axios from 'axios';

const config = {
  headers:{
    Accept: "application/json",
  }
};

const dataList = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://127.0.0.1:8000/api/movies?page=1', config);
    dataList.value = response.data;
    console.log(dataList.value);
  } catch (error) {
    console.error(error);
  }
})

</script>

<template>
  <h1>Movies</h1>
  <div class="data-container d-flex f-wrap">
    <div v-for="movie in dataList" class="movie-card-list d-flex-center">
      <router-link :to="`/api/movie/${movie.id}`" :movie="movie">
        <h3>{{movie.title}}</h3>
      </router-link>
    </div>
  </div>

</template>

<style scoped>
.movie-card-list{
  height: 3em;
  width: 8em;
  background-color: #343434;
}
.movie-card-list:hover{
  cursor: pointer;
}
</style>
