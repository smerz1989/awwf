<script>
    import {useCookies} from 'vue3-cookies';
    export default {
        data () {
            return {
                answer: "wrong"
            }
        },
        setup() {
            const { cookies } = useCookies();
            return { cookies };
        },
        mounted () {
            var my_cookie_value = this.cookies.get("FormsCreated");
            console.log(my_cookie_value);
        },
        methods: {
            create_wordle(wordle_answer) {
                console.log(`Setting cookie FormsCreated to ${wordle_answer}`)
                this.cookies.set("FormsCreated", wordle_answer);
                console.log(`Programatically rerouting to wordle site to: /wordle/${wordle_answer}`)
                this.$router.push({path: `/wordle/${wordle_answer}`})
            }
        }
    }
</script>
<template>
    <div class="flex-form">
    <div class="flex-container">
        <form id="wordle_creation_form">
            <label for="answer">Answer to Wordle:</label>
            <input type="text" id="answer" maxlength="5" v-model="answer">
        </form>
        </div>
    <div class="flex-container">
        <button @click="this.create_wordle(this.answer)" form="wordle_creation_form">Create Wordle</button>
    </div>
    </div>
</template>

<style>
    .flex-form {
        display: flex;
        flex-direction: column;
    }
</style>