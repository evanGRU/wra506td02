<script setup>
</script>

<template>
  <nav class="d-flex-center">
    <ul class="d-flex-center">
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/api/movie/list"><li>Movies</li></router-link>
      <router-link to="/api/actor/list"><li>Actors</li></router-link>
      <router-link to="/api/category/list"><li>Categories</li></router-link>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin-bottom: 3em;
}
nav ul{
  list-style: none;
  padding: 0;
  gap: 5px;
}

nav ul li {
  padding: 1em;
  background-color: #dadada;
  color: #000;
}

nav ul li:hover {
  background-color: #c2c2c2;
  cursor: pointer;
}
</style>
