<template>
  <div>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Director</th>
        <th>url</th>
        <th>Duration</th>
        <th>Release date</th>
        <th>Genre</th>
        <th>Delete</th>
      </tr>
    </table>
    <app-movie-row :movies='movies'></app-movie-row>
  </div>
</template>

<script>
import movieService from '../services/movieService';
import MovieRow from './MovieRow';
import { EventBus } from './eventbus';
export default {
  name: 'Movies',
  data(){
    return {
      movies: [],
    }
  },
  async created(){
    this.movies = await movieService.getAll();
    this.$forceUpdate();
  },
  methods: {
    async deleteMovie(id){
      movieService.deleteMovie(id);
      this.movies = await movieService.getAll();
    },
    
  },
  components: {
    'app-movie-row': MovieRow
  },
  mounted(){
    EventBus.$on('movieDeleted', (id) => {
      this.deleteMovie(id);
    })
  }
  
}
</script>