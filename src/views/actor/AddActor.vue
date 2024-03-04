<script>
import Header from "../../components/Header.vue";
import {postData} from "../../apiCalls.js";

export default {
  data: formData => ({
    firstName: null,
    lastName: null,
  }),
  components: {
    Header
  },
  methods: {
    handleSubmit() {
      const actorToAdd = {
        firstName: this.firstName,
        lastName: this.lastName,
      }
      try {
        postData('https://127.0.0.1:8000/api/actors', actorToAdd)
        window.location.replace('/actor/list');
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
          <label for="title">Prénom</label>
          <input
              type="text"
              placeholder="Prénom"
              v-model="firstName"
              class="addInput"
          >
        </div>

        <div class="addField">
          <label for="description">Nom</label>
          <input
              type="text"
              placeholder="Nom"
              v-model="lastName"
              class="addInput"
          >
        </div>
      </div>
      <button
          type="submit"
          class="addButton"
      >
        Ajouter un acteur
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
