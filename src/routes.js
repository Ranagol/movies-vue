import AddMovie from './components/AddMovie';
import Movies from './components/Movies';
import Login from './components/Login';
import Register from './components/Register';
import ShowMovie from './components/ShowMovie';

export const routes = [
  { path: '/movies', name: 'movies', component: Movies},
  { path: '/add-movie', name: 'add-movie', component: AddMovie},
  { path: '*', redirect: '/movies'},
  { path: '/login', name: 'login', component: Login},
  { path: '/register', name: 'register', component: Register},
  { path: '/movies/:id', name: 'show-movie', component: ShowMovie},
];