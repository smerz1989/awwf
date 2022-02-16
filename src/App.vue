<script>
import Letter from "./components/Letter.vue"
import Word from "./components/Word.vue"
export default {
  // component options
  data() {
    return {
      num_guesses: 6
    }
  },
  components: {
    Letter,
    Word
  }
}
</script>

<template>
  <div class="row form-group" v-for="index in num_guesses" :key="index">
    <Word></Word>
  </div>
</template>

<style>
.form-group {
        margin-bottom: 15px;
}
</style>