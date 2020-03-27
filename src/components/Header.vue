<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/movies">Movies</router-link>
      <router-link class="nav-item nav-link" to="/add-movie">Add</router-link>
      <a href="#" class="nav-item nav-link" @click.prevent="logout" v-show="isAuthenticated">Logout</a>
      <router-link class="nav-item nav-link" to="/login" v-show="!isAuthenticated">Login</router-link>
      <router-link class="nav-item nav-link" to="/register" v-show="!isAuthenticated">Register</router-link>
      <div v-bind="isAuthenticated">isAuthenticated status: {{ isAuthenticated }}</div>
    </div>
  </nav>
</template>

<script>
import { authService } from '../services/authService';

export default {
  data() {
    return {
      isAuthenticated: authService.isAuthenticated(),
    };
  },
  methods: {
    logout() {
      authService.logout();
      this.isAuthenticated = false;
      this.$router.push('login');
    },
  },
  created(){
    this.isAuthenticated = authService.isAuthenticated();
  },
  watch: {
    isAuthenticated: function(){
      console.log('isAuthenticated is now: ', this.isAuthenticated);
    }
  }
};
</script>