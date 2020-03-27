<template>
  <div>
    <form class="form-signin" @submit.prevent="login">
      <h2>Login Page</h2>
      <input v-model="email" type="email" class="form-control" name="email" placeholder="Email Address" />
      <input v-model="password" type="password" class="form-control" name="password" placeholder="Password"/>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { authService } from '../services/authService';
import { EventBus } from './eventbus';
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      //console.log(this.email, this.password);
      authService.login(this.email, this.password).then(()=>{ 
        this.$emit('loginActivated');
        this.$router.push('movies');
        EventBus.$emit('loginSuccesfullyDone');
      }).catch(() => alert('invalid credentials from Vanja codes'));
    }
  }
};
</script>