import AddMovie from './components/AddMovie';
import Movies from './components/Movies';
import Login from './components/Login';
import Register from './components/Register';

export const routes = [
  
  { path: '/movies', name: 'movies', component: Movies},
  { path: '/add-movie', name: 'add-movie', component: AddMovie},
  { path: '*', redirect: '/movies'},
  { path: '/login', name: 'login', component: Login},
  { path: '/register', name: 'register', component: Register}
];