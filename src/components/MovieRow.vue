<template>
  <tr>
    <td>{{ movie.id }}</td>
    <td><router-link :to="`/movies/${movie.id}`">{{ movie.title }}</router-link></td>
    <td>{{ movie.director }}</td>
    <td>{{ movie.imageUrl }}</td>
    <td>{{ movie.duration }}</td>
    <td>{{ movie.releaseDate }}</td>
    <td>{{ movie.genre }}</td>
    <td><button @click.once="selectMovie(movie)" class="btn btn-info">Select</button></td>
    <td><button  class="btn btn-danger">Delete</button></td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'MovieRow',
  props: ['movie'],
  methods: {
    ...mapActions(['selectedMovie']),
    selectMovie(movie){
      this.selectedMovie(movie);
    }
  }
}
</script>