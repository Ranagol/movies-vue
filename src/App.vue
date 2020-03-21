<template>
  <div id="app" class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    'app-header': Header,
  }
}
</script>


