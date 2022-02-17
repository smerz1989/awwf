<script>
export default {
    props: {
      disabled: Boolean,
      letters: Object,
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
    <input type="text" v-model="letters[index]" @keyup.enter="enterLetter" maxlength="1" :disabled="disabled"/>
</template>

<style>
    input[type=text] {
        height: 100px;
        width: 100px;
        font-size: 90px;
        text-transform: uppercase;
        text-align: center;
    }
</style>