<script>
import axios from 'axios';
import router from '../../router';
import {useToast} from 'vue-toast-notification';
import {getToken, isUserAuthenticated} from "../../auth.js";

export default {
  data: vm => ({
    timeout: null,
    userName: '',
    password: '',
  }),
  mounted() {
    this.checkUserToken();
  },
  methods: {
    checkUserToken() {
      if (!getToken()) {
        const toast = useToast();
        toast.error('Connectez-vous pour accéder à l\'application.');
      }
    },
    async handleSubmit() {
      try {
        const response = await this.login(this.userName, this.password);
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('username', this.userName);
        await router.push({path: '/'});
        let toast = useToast();
        toast.success('Vous êtes connecté.');
        isUserAuthenticated();
      } catch (error) {
        console.error('Error:', error);
      }
    },

    async login(userName, password) {
      const data = JSON.stringify({
        "email": userName,
        "password": password
      });
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://127.0.0.1:8000/auth',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      return axios.request(config);
    },
  },
}
</script>

<template>
  <div class="loginPage">
    <h1>Connectez-vous</h1>
    <form
        @submit.prevent="handleSubmit"
        class="loginForm"
    >
      <div class="d-flex" style="gap: 1em">
        <input
            type="text"
            placeholder="Nom d'utilisateur"
            v-model="userName"
            class="loginField"
        >
        <input
            type="password"
            placeholder="Mot de passe"
            v-model="password"
            class="loginField"
        >
      </div>
      <button
          type="submit"
          class="loginButton"
      >
        Connexion
      </button>
    </form>
  </div>
</template>

<style scoped>
.loginPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.loginField {
  width: 10em;
  padding: 0.5em;
}
.loginButton {
  width: 100%;
  padding: 0.5em;
}
.loginButton:hover {
  cursor: pointer;
}
</style>