<template>
  <div>
    <div><!--SELECT, NUMBERS-->
      <p class="makeItInline">Number of selected movies: {{ selectedMovies.length }} </p>
      <button class="btn btn-primary button-margine">Select all</button>
      <button class="btn btn-secondary">Deselect all</button>
    </div>
    <div><!--MOVIE TABLE-->
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
      <!--OK, here we have a couple of funny things below.
      1. This is how we can do v-for in directly in the child component <TAG></TAG>
      2. The searchLetters were sent here to Movies.vue from Header.vue through central store
      3. searchedMovies was created in getters, from store/movies[].
      4. With :movie='movie' we are sending the current actual movie to the MovieRow.vue -->
      <app-movie-row v-for="movie in searchedMovies(searchLetters)" :key="movie.id" :movie='movie'></app-movie-row>
      <div v-if="!searchedMovies(searchLetters).length" class="alert alert-danger">Nema pronadjenih filmova!</div>
    </div>
  </div>
</template>

<script>
import movieService from '../services/movieService';
import MovieRow from './MovieRow';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Movies',
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters(['movies', 'searchLetters', 'searchedMovies', 'selectedMovies']),
  },
  methods: {
    ...mapActions(['getAllMovies']),

    async deleteMovie(id){
      movieService.deleteMovie(id);
      this.movies = await movieService.getAll();
    },
  },
  components: {
    'app-movie-row': MovieRow
  },
 
  beforeRouteEnter(to, from, next){//here we use beforeRouteEnter to trigger, start the movie-getting-process
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