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
  
  methods: {
    getSingleMovie(id){
      return movieService.getMovieById(id);
    }
  },

  beforeRouteEnter(to, from, next){
    console.log(`Guard activated. From: ${from.path} to: ${to.path}`)//awesome consol.log trick to see if this is working so far
    console.log('This is the to:', to);//just checkig the to
    console.log('This is the from:', from);//just checking the from
    next(vm => {
      vm.getSingleMovie(to.params.id).then(response => vm.movie = response);//usually here there should be response.data. But it is not. The reason: because our movieService.getMovieById(id) is already done that way, that he is already returning the response.data. So: if you have any trouble here, check the movieService.getMovieById(id) what is returning: response or response.data?
    });
  },
  
  
}

</script>