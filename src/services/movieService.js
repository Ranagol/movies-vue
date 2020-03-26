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
    await HTTP.post("/movies", body);
  }

  async deleteMovie(id) {
    await HTTP.delete(`/movies/${id}`);
  }

}

const movieService = new MovieService();
export default movieService;