<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from 'axios';
import Header from "../../components/Header.vue";
import {isUserAuthenticated} from "../../auth.js";
import {axiosConfig} from "../../apiCalls.js";

//get ID pass in path
const route = useRoute();
const id = route.params.id;

const actorDetail = ref({
  data: null,
  errors: null
});

onMounted(async () => {
  isUserAuthenticated();
  actorDetail.value = await axios.get('https://127.0.0.1:8000/api/actors/'+id, axiosConfig);
})

</script>

<template >
  <Header></Header>
  <div v-if="actorDetail.data">
    <div>
      <img src="" alt="">
      <div>
          <p>{{actorDetail.data.firstName}} {{actorDetail.data.lastName}}</p>
          <p>{{actorDetail.data.Nationality.libelle}}</p>
      </div>
    </div>
    <br>
    <br>
    <div class="d-flex-column">
      <h3>Cet acteur joue dans ces films :</h3>
      <div class="d-flex" style="gap: 0.5em">
        <div class="d-flex-column actor-detail-movie-list" v-for="movie in actorDetail.data.movies">
          <router-link :to="`/movie/${movie.id}`">
            <h3>{{movie.title}}</h3>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.actor-detail-movie-list{
  padding: 1em;
  background: #535bf2;
}
.actor-detail-movie-list a{
  color: #fff;
}
.actor-detail-movie-list a:hover{
  color: #c5c5c5;
}

</style>
