<template>
  <div>
    <h3>ShowMovie.vue</h3>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Director</th>
        <th>url</th>
        <th>Duration</th>
        <th>Release date</th>
        <th>Genre</th>
      </tr>
      <tr>
        <td>{{ movie.id }}</td>
        <td>{{ movie.title }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.imageUrl }}</td>
        <td>{{ movie.duration }}</td>
        <td>{{ movie.releaseDate }}</td>
        <td>{{ movie.genre }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

import movieService from '../services/movieService';
export default {
  name: 'ShowMovie',
  data(){
    return {
      movie: [],
    }
  },
  async created(){
    this.movie = await movieService.getMovieById(this.$route.params.id);
  },
  
}

</script>