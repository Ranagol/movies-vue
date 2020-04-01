<template>
  <div>
    <tr v-for="movie in filteredMovies" :key="movie.id">
      <td>{{ movie.id }}</td>
      <td><router-link :to="`/movies/${movie.id}`">{{ movie.title }}</router-link></td>
      <td>{{ movie.director }}</td>
      <td>{{ movie.imageUrl }}</td>
      <td>{{ movie.duration }}</td>
      <td>{{ movie.releaseDate }}</td>
      <td>{{ movie.genre }}</td>
      <td><button @click="deleteMovie(movie.id)" class="btn btn-danger">Delete</button></td>
      <!--This delete function is not working yet. I need to solve the communication with the parent, which will probably happen with vuex?????? -->
    </tr>
  </div>
</template>

<script>
import { EventBus } from './eventbus';
export default {
  name: 'MovieRow',
  props: ['filteredMovies'],
  methods: {
    deleteMovie(id){
    EventBus.$emit('movieDeleted', id);
    }
  }
}
</script>