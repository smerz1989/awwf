<script>
export default {
    props: {
      disabled: Boolean,
      letters: Object,
      letter_status: String,
      index: Number
    },
    methods: {
        moveFocus(e){
            console.log(e)
            console.log(e.target.value)
        },
        enterLetter(e){
            this.$emit('enter-word')
        }
    }

}
</script>

<template>
    <input type="text" v-bind:class="letter_status" v-model="letters[index]" @keyup.enter="enterLetter" maxlength="1" :disabled="disabled"/>
</template>

<style>
    input[type=text] {
        height: 100%;
        width: 100%;
        text-transform: uppercase;
        text-align: center;
    }
    input:disabled {
        opacity: 0.8;
    }
    .neutral {
        background-color: #DFE0DC;
    }
    .rightletter {
        background-color: #EEF36A;
    }
    .rightlocation {
        background-color: #9BC995;
    }
</style>