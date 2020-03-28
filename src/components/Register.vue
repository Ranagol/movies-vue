<template>
  <div>
    <h3>Register</h3>
    <form @submit.prevent="register">
      <input v-model="name" type="text" class="form-control" name="name" placeholder="name">
      <input v-model="email"  type="email" class="form-control" name="email" placeholder="email">
      <input v-model="password"  type="password" class="form-control" name="password" placeholder="password">
      <input v-model="password_confirmation"  type="password_confirmation" name="password_confirmation" class="form-control" placeholder="password_confirmation">
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
      password_confirmation: '',
    }
  },
  methods: {
    async register(){
      //this is the frontend side check for the password/password_confirmation
      if(this.password !== this.password_confirmation){
        alert('Youre password and password_confirmation fields have different passwords!');
        return;
      }
      console.log('register method started');
      await authService.register(this.name, this.email, this.password, this.password_confirmation);
      this.$router.push('login');
    },
    
  }
}
</script>