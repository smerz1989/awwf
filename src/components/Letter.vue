<script>
export default {
    props: {
      disabled: Boolean
    }
}
</script>

<template>
    <input type="text" value="" :disabled="disabled"/>
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