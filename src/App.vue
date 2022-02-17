<script>
import Letter from "./components/Letter.vue"
import Word from "./components/Word.vue"
export default {
  // component options
  data() {
    return {
      num_guesses: 6,
      disabled: false,
      valid_words: ['ghost','pitch','hitch'],
      wordle_answer: 'hitch'
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
    <Word v-if="index==1" v-bind:disabled="false" v-bind:valid_words="valid_words" v-bind:wordle_answer="wordle_answer"></Word>
    <Word v-else v-bind:disabled="true" v-bind:valid_words="valid_words" v-bind:wordle_answer="wordle_answer"></Word>
  </div>
</template>

<style>
.form-group {
        margin-bottom: 15px;
}
</style>