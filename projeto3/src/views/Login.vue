<template>
    <div>
        <h1>Login</h1>
        <button @click="decrement">.   -   .</button>
        <p>{{ contador }}</p>
        <button @click="increment">.   +   .</button>
        <div>
            <input type="text" v-model="login">
            <div>Login: {{login}}</div>
            <div>
                <button @click="gravar">Gravar</button>
                <button @click="recuperar">Recuperar</button>
                <button @click="remover">Remover</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations   } from 'vuex';
export default {
    name: 'Login',
    computed: {
        ...mapGetters(['contador'])
    },
    created() {
        this.recuperar();
    },
    methods: {
        ...mapMutations(['increment', 'decrement']),
        gravar: function(){
            console.log('gravar');
            this.$storage.setStorageSync("login", this.login);
        },
        recuperar: function(){
            this.login = this.$storage.getStorageSync("login");
        },
        remover: function(){
            this.$storage.removeStorageSync("login");
            this.login = '';
        }
    },
    data: function(){
        return {
            login: ''
        }
    }
}
</script>