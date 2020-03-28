import axios from 'axios';

export default class AuthService {
  constructor() {//this is a must. This waz we set up automatically the token into the request header.
    axios.defaults.baseURL = 'http://localhost:8000/api/';
    this.setAxiosDefaultAuthorizationHeader();//set the token in the header of our requests
  }

  /*
  login(email, password) {
    return axios.post('login', { email, password })
    .then(response => {
      console.log(response, 'response');//ovde uhvatimo response
      window.localStorage.setItem('loginToken', response.data.token);
      console.log(window.localStorage.loginToken);
      this.setAxiosDefaultAuthorizationHeader();
    })
    .catch(error => console.log(error.response.data.error))//ako ima neki problem, catch se aktivira, pa odradimo alert
  }
  */

  register(name, email, password, password_confirmation){
    return axios.post('register', { name, email, password, password_confirmation})
    .then(response => {
      console.log(response, 'response');//ovde uhvatimo response
      window.localStorage.setItem('loginToken', response.data.token);
      this.setAxiosDefaultAuthorizationHeader();
    }).catch(() => alert('invalid credentials by vanja'));//ako ima neki problem, catch se aktivira, pa odradimo alert
  }
  

  
  async login(email, password) {//ova metoda salje email i password prema api
    try {
      const response = await axios.post('login', { email, password });
      console.log(response.data.token);
      window.localStorage.setItem('loginToken', response.data.token);//Dobijeni odgovor se stavlja u local storage, ovde cuvamo dobijeni token, under key 'loginToken'. Local storage ime getItem i setItem metode za namestanje ili dobijanje tokena.

      console.log(window.localStorage.loginToken);
      this.setAxiosDefaultAuthorizationHeader();//U axiuosu se mogu postaviti headeri, koji se salju sa svakim requestom, i u ovaj header stavljamo dobijeni token od jwt

    } catch (error) {
      console.log(error.response.data.error);
    }
  }
  

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem('loginToken');//take the token from local storage
    if (!TOKEN) {//if there is no token
      return;//...just return, without token. No token = user not authorized = can't use this Vue
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;//here we put the received token from Laravel into our request header
  }

  logout() {
    //Dokle god user ima token, server ga prepoznaje. Kada zelimo logout, onda treba da obrisemo token iz localstorage, i treba da izbrisemo is axios headera. Sustina je da token saljemo tokom svakog requesta. local storage: ako je token u ls, onda je user loginovan.

    window.localStorage.removeItem('loginToken');
    delete axios.defaults.headers.common['Authorization'];
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('loginToken');//!! je nacin da neku string vrednost prebacimo u boolean.
  }
}

export const authService = new AuthService();
