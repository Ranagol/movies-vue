export default {
  getAllMovies(state, movies){
    state.movies = movies;
  },

  setSearchLetters(state, searchLetters){
    state.searchLetters = searchLetters;
  },

  selectedMovie(state, movie){
    if(state.selectedMovies.indexOf(movie) === -1) {//if movie is not already in the selectedMovies array...
      state.selectedMovies.push(movie);//...then push the movie into the selectedMovies array
    }
  },

  selectAll(state){
    state.selectedMovies = state.movies;
  },

  unSelectAll(state){
    state.selectedMovies = [];
  },

  sortMovies(state, { type, isAsc }) {//first sort by type(title or duration in asc order, anyway and automatically, for every sort request)

    state.movies.sort((movie1, movie2) => {////The sort() method sorts an array alphabetically. Here we set up the sort() how to handle strings (movie titles) from movie objects, and how to sort them.

      if (movie1[type] > movie2[type]) {//type could be movie title or movie duration
        return 1;
      }
      if(movie1[type] < movie2[type]) {//the movie duration is handled here as string
        return -1;
      }
      return 0;
    })
    if (!isAsc) {//if the sorting should be descending, just reverse the previous asc sorting
        state.movies.reverse();//The reverse() method reverses the elements in an array.
    }
  },

  nextPage(state) {
    if (state.currentPage<(state.movies.length / 5)) {
      state.currentPage++;
    }
    
  },
  prevPage(state) {
    if (state.currentPage>1) {//because we dont want to go below 0
      state.currentPage--;
    }
    
  }

 
}