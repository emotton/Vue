<template>
    <div>
        <h2>Pai : {{nome}}</h2>
        <button @click="alterar">Alterar</button>
        <hr>
        <comp-filho :meunome="nome" @nomeAlterado="nome=$event" />
    </div>
</template>

<script>
import CompFilho from './CompFilho.vue';

export default {
    data: function(){
        return {
            nome: 'Eduardo'
        }
    },
    methods: {
        alterar(){
            this.nome = "Henrique"
        }
    },
    components: {
        CompFilho
    }
}
</script>