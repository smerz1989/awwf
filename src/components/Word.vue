<script>
    import Letter from "./Letter.vue"
    export default {
        data() {
            return {
                num_letters: 5,
                letter_statuses: {1: 'neutral',2: 'neutral',3: 'neutral',4: 'neutral',5: 'neutral'},
                letters: {},
                test: "test",
                letterClass: "col-sm-1"
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
            enterWord(){
                console.log(this.letters)
                var word=''
                for(var i =1; i<=Object.keys(this.letters).length;i++){
                    console.log(i)
                    word=word.concat(this.letters[i])
                }
                console.log(word)
                const is_valid = this.valid_words.includes(word)
                if(!is_valid){
                    this.letterClass="error";
                    setTimeout(()=>{this.letterClass="col-sm-1";},500);
                }else{
                    this.revealLetters(this.letters)
                }
            },
            revealLetters(letters){
                for(var i =1; i<=Object.keys(letters).length;i++){
                    if(this.findAllIndices(this.wordle_answer,this.letters[i]).includes(i-1)){
                        console.log(this.letters[i])
                        console.log(`Is in right place ${this.wordle_answer}`)
                        this.letter_statuses[i]="rightlocation" 
                    }
                    else if(this.findAllIndices(this.wordle_answer,this.letters[i]).length>0){
                        console.log(this.letters[i])
                        console.log(`Is in ${this.wordle_answer}`)
                        this.letter_statuses[i]="rightletter"
                    }
                }
            }

        }
    }
</script>

<template>
    <div class="row justify-content-center">
    <form v-on:keyup.enter="" class="row justify-content-center">
      <div class="col-sm-1" v-for="index in num_letters" :key="index">
        <div v-bind:class="letterClass">
        <Letter v-bind:disabled="disabled" v-bind:letter_status="letter_statuses[index]" v-bind:letters="letters" v-bind:index="index" @enter-word="enterWord"></Letter>
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
    }

    @keyframes shake {
        0% { left: -5px; }
        100% { right: -5px; }
    }
</style>