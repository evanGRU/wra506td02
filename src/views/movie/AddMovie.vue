<script>
import Header from "../../components/Header.vue";
import {postData} from "../../apiCalls.js";

export default {
  data: formData => ({
    title: null,
    description: null,
    releaseDate: null,
    duration: null,
  }),
  components: {
    Header
  },
  methods: {
    handleSubmit() {
      const movieToAdd = {
        title: this.title,
        description: this.description,
        releaseDate: this.releaseDate,
        duration: this.duration
      }
      try {
        postData('https://127.0.0.1:8000/api/movies', movieToAdd)
        window.location.replace('/movie/list');
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<template>
  <Header></Header>
  <div class="addPage">
    <form
        @submit.prevent="handleSubmit"
        class="addForm"
    >
      <div class="d-flex" style="gap: 1em">
        <div class="addField">
          <label for="title">Titre</label>
          <input
              type="text"
              placeholder="Titre"
              v-model="title"
              class="addInput"
          >
        </div>

        <div class="addField">
          <label for="description">Description</label>
          <input
              type="text"
              placeholder="Description"
              v-model="description"
              class="addInput"
          >
        </div>

        <div class="addField">
          <label for="date">Date de sortie</label>
          <input
              type="date"
              placeholder="Date de sortie"
              v-model="releaseDate"
              class="addInput"
          >
        </div>

        <div class="addField">
          <label for="number">Duration</label>
          <input
              type="number"
              placeholder="Durée"
              v-model="duration"
              class="addInput"
          >
        </div>
      </div>
      <button
          type="submit"
          class="addButton"
      >
        Ajouter un film
      </button>
    </form>
  </div>
</template>

<style scoped>
.addPage {
  display: flex;
  justify-content: center;
}
.addForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.addField {
  display: flex;
  flex-direction: column;
}
.addInput {
  width: 10em;
  padding: 0.5em;
}
.addButton {
  width: 100%;
  padding: 0.5em;
}
.addButton:hover {
  cursor: pointer;
}
</style>
