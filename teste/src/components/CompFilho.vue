<template>
    <div>
        <h1>Filho : {{meunome}}</h1>
        <button @click="alterar">Alterar</button>
    </div>
</template>

<script>
export default {
    props: ['meunome'],
    methods: {
        alterar(){
            this.$emit('nomeAlterado', "Bheatriz");
        }
    }
}
</script>