<template>
  <div>
    <div><!--SELECT, NUMBERS-->
      <p class="makeItInline">Number of selected movies: {{ selectedMovies.length }} </p>
      <button @click="selectAll" class="btn btn-primary button-margine">Select all</button>
      <button @click="unSelectAll" class="btn btn-secondary">Unselect all</button>
    </div>
    <div><!--MOVIE TABLE-->
      <table class="table">
        <tr>
          <th>ID</th>
          <th>Title
            <!--We want to sort asc/desc by the title or the duration. That are 4 different functions. But, we could make 1 universal sorting function, that will receive through arguments should it sort asc or desc, and should it sort by title or by duration. This argument will be one object, with type for title or duration and isAsc boolean for 'is ascending true'. -->
            <button @click="sortMovies({type: 'title', isAsc: true})">&darr;</button><!--asc--> 
            <button @click="sortMovies({type: 'title', isAsc: false})">&uarr;</button></th><!--desc--> 
          <th>Director</th>
          <th>url</th>
          <th>Duration
            <button @click="sortMovies({type: 'duration', isAsc: true})">&darr;</button><!--asc-->   
            <button @click="sortMovies({type: 'duration', isAsc: false})">&uarr;</button></th><!--desc-->
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
      <!--***************THIS IS THE BRUTAL PART****************** -->
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
    ...mapActions(['getAllMovies', 'selectAll', 'unSelectAll', 'sortMovies']),

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

  watch: {
    movies: {//wathc the movie property
      deep: true,//with this the watcher will be able to watch key-value changes in the movies array
      handler(){//do this, if change happens:
        console.log('The movie array watcher has detected a change in the movie array.');
        this.$forceUpdate();//this will force update
      }
    }
  }
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