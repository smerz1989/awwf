<script>
    import Letter from "./Letter.vue"
    export default {
        data() {
            return {
                num_letters: 5,
                test: "test"
            }
        },
        props: {
          disabled: Boolean 
        },
        components: {
            Letter
        }
    }
</script>

<template>
    <div class="row justify-content-center">
      <div class="col-sm-1" v-for="index in num_letters" :key="index">
        <Letter v-bind:disabled="disabled"></Letter>
      </div>
    </div>
</template>

<style>
</style>