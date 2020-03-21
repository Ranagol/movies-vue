<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav">
        <router-link class="form-control" to="/movies">Movies</router-link>
        <router-link class="form-control" to="/add-movies">Add</router-link>   
      </div>
    </nav>
  </div>
</template>
  

<script>
export default {
  name: 'Header',
}
</script>