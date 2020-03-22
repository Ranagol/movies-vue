import axios from 'axios';

export default class AuthService {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8000/api/';
    this.setAxiosDefaultAuthorizationHeader();
  }

  /* STARI LOGIN SA CASA, SA THEN... OVO JE RADILO.
  login(email, password) {
    return axios.post('login', { email, password }).then(response => {
      window.localStorage.setItem('loginToken', response.data.token);
      this.setAxiosDefaultAuthorizationHeader();
    });
  }
  */


  async login(email, password) {//ova metoda salje email i password prema api
    const response = await axios.post('login', { email, password });

    window.localStorage.setItem('loginToken', response.data.token);//Dobijeni odgovor se stavlja u local storage, ovde cuvamo dobijeni token. Local storage ime getItem i setItem metode za namestanje ili dobijanje tokena.

    this.setAxiosDefaultAuthorizationHeader();//U axiuosu se mogu postaviti headeri, koji se salju sa svakim requestom, i u ovaj header stavljamo dobijeni token od jwt
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem('loginToken');
    if (!TOKEN) {
      return;
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
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
