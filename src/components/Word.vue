<script>
    import Letter from "./Letter.vue"
    export default {
        data() {
            return {
                num_letters: 5,
                test: "test"
            }
        },
        components: {
            Letter
        }
    }
</script>

<template>
    <div class="row justify-content-center">
      <div class="col-sm-1" v-for="index in num_letters" :key="index">
        <Letter></Letter>
      </div>
    </div>
</template>

<style>
</style>