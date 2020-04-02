<template>
  <div>
    
    <div>
      <p class="makeItInline">Number of selected movies: </p>
      <button class="btn btn-primary button-margine">Select all</button>
      <button class="btn btn-secondary">Deselect all</button>
    </div>
    
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
          <th>Selected</th>
          <th>Delete</th>
        </tr>
      </table>
      <app-movie-row :movies='movies'></app-movie-row>
    </div>
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
      selectedMovies: [],
    }
  },
  /* //this was commented out, because it's job is done by the fetch data before navigation
  async created(){
    this.movies = await movieService.getAll();
    this.$forceUpdate();
  },
  */
  methods: {
    async deleteMovie(id){
      movieService.deleteMovie(id);
      this.movies = await movieService.getAll();
    },

    async getAllMovies(){
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
    
  },
  beforeRouteEnter(to, from, next){
    console.log(`beforeRouteEnter data fetching activated. From: ${from.path} to: ${to.path}`);
    next(vm => {
      vm.getAllMovies()
      console.log('beforeRouteEnter has finished its job, movies are here.')
    })
  },
}
</script>



<style>
.makeItInline{
  display: inline;
}

.button-margine{
  margin-left: 20px;
  margin-right: 20px;
}
</style>