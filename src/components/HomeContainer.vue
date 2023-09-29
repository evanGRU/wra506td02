<script setup>
import { defineProps } from 'vue'

const props = defineProps(['title', 'datas']);
</script>

<template>
  <div>
    <h1 class="container-title">{{ title }}</h1>
    <div class="container d-flex">
      <div v-for="data in props.datas" class="card">
        <h3>{{ data }}</h3>
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
  background-color: #757575;
  width: 20em;
  padding: 0em 1em;
}
</style>
