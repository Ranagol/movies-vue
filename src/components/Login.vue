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

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      await authService.login(this.email, this.password);
      this.$router.push('movies');
    }
  }
};
</script>