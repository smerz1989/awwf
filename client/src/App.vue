<script>
import Letter from "./components/Letter.vue"
import Word from "./components/Word.vue"
import JSConfetti from 'js-confetti'
export default {
  // component options
  data() {
    return {
      num_guesses: 6,
      current_guess_number: 1,
      disabled_words: {1: false,2: true,3: true,4: true,5: true,6: true},
      valid_words: ['ghost','pitch','hitch','haunt'],
      wordle_answer: 'hitch'
    }
  },
  components: {
    Letter,
    Word
  },
  methods: {
    incrementGuess() {
        this.current_guess_number;
        this.disabled_words[this.current_guess_number]=true;
        this.current_guess_number++;
        this.disabled_words[this.current_guess_number]=false;
    },
    victory() {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }
  }
}
</script>

<template>
  <div class="row form-group" v-for="index in num_guesses" :key="index">
    <Word v-if="index==1" v-bind:disabled="disabled_words[index]" v-bind:valid_words="valid_words" v-bind:wordle_answer="wordle_answer" @valid-word-entered="incrementGuess" @correct-word="victory"></Word>
    <Word v-else v-bind:disabled="disabled_words[index]" v-bind:valid_words="valid_words" v-bind:wordle_answer="wordle_answer" @valid-word-entered="incrementGuess" @correct-word="victory"></Word>
  </div>
</template>

<style>
.form-group {
        margin-bottom: 15px;
}
</style>