<template>
  <div>
    <input v-model="filterThis" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <div v-if="arrayIsEmpty" class="alert alert-danger">Nazalost, trazeni pojam ne postoji</div>
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
      <app-movie-row :filteredMovies='filteredMovies'></app-movie-row>
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
      filterThis: '',
      arrayIsEmpty: false,
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

    setTrueOrFalse(arraylength){
      if (arraylength > 0) {
        this.arrayIsEmpty = false
      } else {
        this.arrayIsEmpty = true;
      }
    }
    
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
  computed: {
    filteredMovies(){
      let filteredMovies = this.movies.filter( movie => movie.title.toLowerCase().match(this.filterThis));
      this.setTrueOrFalse(filteredMovies.length);
      return filteredMovies;
    }
  }
  
}
</script>