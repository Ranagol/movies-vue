<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/movies">Movies</router-link>
      <router-link class="nav-item nav-link" to="/add-movie">Add</router-link>
      <a href="#" class="nav-item nav-link" @click.prevent="logout" v-if="isAuthenticated">
        Logout
      </a>
      <router-link class="nav-item nav-link" to="/login" v-else>Login</router-link>
    </div>
  </nav>
</template>

<script>
import { authService } from '../services/authService';

export default {
  data() {
    return {
      isAuthenticated: authService.isAuthenticated(),//Mi proveravamo local storage tu. 
    };
  },
  methods: {
    logout() {
      authService.logout();
      this.isAuthenticated = false;
    }
  }
};
</script>