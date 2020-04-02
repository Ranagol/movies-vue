<template>
  <div>
    <tr v-for="movie in movies" :key="movie.id">
      <td>{{ movie.id }}</td>
      <td><router-link :to="`/movies/${movie.id}`">{{ movie.title }}</router-link></td>
      <td>{{ movie.director }}</td>
      <td>{{ movie.imageUrl }}</td>
      <td>{{ movie.duration }}</td>
      <td>{{ movie.releaseDate }}</td>
      <td>{{ movie.genre }}</td>
      <td><button class="btn btn-info">Select</button></td>
      <td><button  class="btn btn-danger">Delete</button></td>
      <!--This delete function is not working yet. I need to solve the communication with the parent, which will probably happen with vuex?????? -->
    </tr>
  </div>
  
</template>

<script>
export default {
  name: 'MovieRow',
  props: ['movies'],
  methods: {
   
  }
}
</script>