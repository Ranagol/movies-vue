import { authService } from '../../services/authService';
export const loginHeaderMixin = {
  data(){
    return {
      //this is the Login.vue data
      email: '',
      password: '',
      //this is the Header.vue data
      isAuthenticated:'',
    }
  },
  methods: {
    isAuthenticated() {
      return !!window.localStorage.getItem('loginToken');//!! je nacin da neku string vrednost prebacimo u boolean.
    },
    login() {
      //console.log(this.email, this.password);
      authService.login(this.email, this.password).then(()=>{ 
        this.$router.push('movies');
      }).catch(() => alert('invalid credentials from Vanja codes'));
    },
    logout() {
      authService.logout();
      this.isAuthenticated = false;
      this.$router.push('login');
    },
  }
}