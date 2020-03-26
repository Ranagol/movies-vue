<template>
  <div>
    <h3>Register</h3>
    <form @submit.prevent="register">
      <input v-model="name" type="text" class="form-control" name="name" placeholder="name">
      <input v-model="email"  type="email" class="form-control" name="email" placeholder="email">
      <input v-model="password"  type="password" class="form-control" placeholder="password">
      <input v-model="confirmPassword"  type="confirmPassword" class="form-control" placeholder="confirmPassword">
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { authService } from '../services/authService';
export default {
  data(){
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    async register(){
      console.log('register method started');
      await authService.register(this.name, this.email, this.password);
      this.$router.push('login');
    }
  }
}
</script>