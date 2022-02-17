<script>
    import Letter from "./Letter.vue"
    export default {
        data() {
            return {
                num_letters: 5,
                letters: {},
                test: "test"
            }
        },
        props: {
          disabled: Boolean 
        },
        components: {
            Letter
        },
        methods: {
            getWord(e){
               console.log("Word Entered")
               console.log(e)
            }
        }
    }
</script>

<template>
    <div class="row justify-content-center">
    <form v-on:keyup.enter="" class="row justify-content-center">
      <div class="col-sm-1" v-for="index in num_letters" :key="index">
        <Letter v-bind:disabled="disabled" v-bind:letters="letters" v-bind:index="index"></Letter>
      </div>
    </form>
    </div>
</template>

<style>
</style>