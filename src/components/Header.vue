<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-nav">
      <router-link class="navbar-brand" to="/movies">Movies</router-link>
      <router-link class="nav-item nav-link" to="/movies">Movies</router-link>
      <router-link class="nav-item nav-link" to="/add-movie">Add</router-link>
      <a href="#" class="nav-item nav-link" @click.prevent="logout" v-show="isAuthenticated">Logout</a>
      <router-link class="nav-item nav-link" to="/login" v-show="!isAuthenticated">Login</router-link>
      <router-link class="nav-item nav-link" to="/register" v-show="!isAuthenticated">Register</router-link>
      <!--<div v-bind="isAuthenticated">isAuthenticated status: {{ isAuthenticated }}</div>-->
      <!--<a href="#" class="nav-item nav-link" >{{ token }}</a>-->
      <input @input="onSearch" v-model="searchLetters" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters } from 'vuex';
import { authService } from '../services/authService';
import { EventBus } from './eventbus';
export default {
  data() {
    return {
      isAuthenticated: authService.isAuthenticated(),
      searchLetters: '',
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions(['setSearchLetters']),

    logout() {
      authService.logout();
      this.isAuthenticated = false;
      this.$router.push('login');
    },

    //we will send the searchLetters letter by letter to the central store, and from there to Movies.vue
    onSearch(event){//we can automatically receive the event as an argument
      this.setSearchLetters(event.target.value)//extracting the letters from the input field
    }
  },
  created(){
    this.isAuthenticated = authService.isAuthenticated();
    EventBus.$on('loginSuccesfullyDone', () => {
      this.isAuthenticated = true;
    })
  },
  watch: {
    isAuthenticated: function(){
      console.log('isAuthenticated is now: ', this.isAuthenticated);
    }
  },
  
 
};


</script>