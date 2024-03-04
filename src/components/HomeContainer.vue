<script setup>
import { defineProps } from 'vue'

const props = defineProps(['title', 'datas']);
</script>

<template>
  <div>
    <h1 class="container-title">{{ title }}</h1>
    <div class="container d-flex">
      <div v-for="data in props.datas" class="card">
        <router-link :to="`/movie/${data.id}`" v-if="title === 'Movies'">
          <h3>{{ data.title }}</h3>
        </router-link>
        <router-link :to="`/actor/${data.id}`" v-else>
          <h3>{{ data.firstName }} {{ data.lastName }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-title{
  border-bottom: #fff 2px solid;
}
.container{
  width: 100%;
  gap: 1em;
  justify-content: space-between;
}

.card{
  background-color: #343434;
  width: 20em;
  padding: 0em 1em;
}
</style>
