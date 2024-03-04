<script setup>
</script>

<template>
  <nav class="d-flex-center">
    <ul class="d-flex-center">
      <router-link to="/"><li>Accueil</li></router-link>
      <router-link to="/movie/list"><li>Films</li></router-link>
      <router-link to="/actor/list"><li>Acteurs</li></router-link>
      <router-link to="/category/list"><li>Catégories</li></router-link>
    </ul>
  </nav>
</template>

<style scoped>
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
