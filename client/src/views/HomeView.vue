<template>
  <div class="flex-container">
    Hello World
  </div>
  <div class="flex-container">
    <router-link to="/wordle_input">Create Custom Wordle</router-link>
  </div>
</template>

<script>
  import {useCookies} from 'vue3-cookies';
  export default {
    setup() {
      const { cookies } = useCookies();
      return { cookies };
    },
    mounted() {
      var my_cookie_value = this.cookies.get("myCoookie");
      console.log(my_cookie_value);
      this.cookies.set("myCoookie", "abcdefg");
    }
  }
</script>

<style>
.form-group {
  margin-bottom: 15px;
}


#app {
  background-color: #062F4F;
  margin: 0px;
  min-height: 100vh;
  padding: 0px;
}
html, body {
    margin: 0px;
    min-height: 100vh;
    padding: 0px;
}
</style>