<script>
    import axios from "axios"
    import Letter from "./Letter.vue"
    const WORD_API_URL="http://localhost:5000/words/is_valid"
    export default {
        data() {
            return {
                num_letters: 5,
                letter_statuses: {1: 'neutral',2: 'neutral',3: 'neutral',4: 'neutral',5: 'neutral'},
                letters: {},
                test: "test",
                letterClass: "letter-border",
                is_valid: false
            }
        },
        props: {
          disabled: Boolean,
          valid_words: Array,
          wordle_answer: String
        },
        components: {
            Letter
        },
        methods: {
            getWord(e){
               console.log("Word Entered")
               console.log(e)
            },
            findAllIndices(word,letter){
                var indices = [];
                for(var i=0; i<word.length;i++) {
                    if (word[i] === letter) indices.push(i);
                }
                return(indices)
            },
            async enterWord(){
                console.log(this.letters)
                var word=''
                for(var i =1; i<=Object.keys(this.letters).length;i++){
                    console.log(i)
                    word=word.concat(this.letters[i])
                }
                console.log(word)
                const is_valid = await this.isWordValid(word);
                if(!is_valid){
                    this.letterClass="error";
                    setTimeout(()=>{this.letterClass="letter-border";},500);
                }else{
                    var num_correct_letters = this.revealLetters(this.letters)
                    console.log(`Number of correct letters ${num_correct_letters}`)
                    if(num_correct_letters==5){
                        this.$emit('correct-word')
                    }else{
                        this.$emit('valid-word-entered')
                    }
                }
            },
            revealLetters(letters){
                var num_correct = 0;
                for(var i =1; i<=Object.keys(letters).length;i++){
                    if(this.findAllIndices(this.wordle_answer,this.letters[i]).includes(i-1)){
                        console.log(this.letters[i])
                        console.log(`Is in right place ${this.wordle_answer}`)
                        this.letter_statuses[i]="rightlocation" 
                        num_correct++;
                    }
                    else if(this.findAllIndices(this.wordle_answer,this.letters[i]).length>0){
                        console.log(this.letters[i])
                        console.log(`Is in ${this.wordle_answer}`)
                        this.letter_statuses[i]="rightletter"
                    }
                }
                return(num_correct)
            },
            async isWordValid(word){
                console.log(this.is_valid);
                console.log(`${WORD_API_URL}/${word}`);
                try{
                    const valid_response = await axios.get(`${WORD_API_URL}/${word}`);
                    this.is_valid=valid_response.data;
                    return valid_response.data;
                }catch(err){
                    console.error(err);
                }
            }

        }
    }
</script>

<template>
    <div class="word-border">
    <form v-on:keyup.enter="" class="word-form">
    <div class="flex-container">
      <div class="letter" v-for="index in num_letters" :key="index">
        <div v-bind:class="letterClass">
        <Letter v-bind:disabled="disabled" v-bind:letter_status="letter_statuses[index]" v-bind:letters="letters" v-bind:index="index" @enter-word="enterWord"></Letter>
        </div>
      </div>
    </div>
    </form>
    </div>
</template>

<style>
    .error {
        position: relative;
        animation: shake .1s linear;
        animation-iteration-count: 3;
        height:100%;
    }
    .word-border {
        height:100%;
    }
    .letter-border {
        height:100%;
    }
    .word-form {
        height:100%;
    }
    .letter {
        text-align: center;
        width: 18%;
        height: 90%;
    }
    @keyframes shake {
        0% { left: -5px; }
        100% { right: -5px; }
    }
</style>