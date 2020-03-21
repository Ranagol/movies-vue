import AddMovie from './components/AddMovie';
import Movies from './components/Movies';

export const routes = [
  
  { path: '/movies', name: 'movies', component: Movies},
  { path: '/add-movies', name: 'add-movies', component: AddMovie},
  { path: '*', redirect: '/movies'},
];