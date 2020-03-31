import { HTTP } from './baseService';

class MovieService {
  //GET
  async getAll(){
    const response = await HTTP.get("/movies");
    return response.data;
  }

  async getMovieById(id){
    const response = await HTTP.get(`/movies/${id}`);
    return response.data;
  }

  async createMovie(body){
    try {
      await HTTP.post("/movies", body);
    } catch (error) {
      console.log('THIS IS MY ERROR', error.response.data.errors);
    }
    
  }

  async deleteMovie(id) {
    await HTTP.delete(`/movies/${id}`);
  }

}

const movieService = new MovieService();
export default movieService;