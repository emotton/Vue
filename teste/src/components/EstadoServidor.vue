<template>
    <div>
        <h1>Estado servidor {{estado}}</h1>
        <div>
            <button @click="ligar">Ligar</button>
            <button @click="desligar">Desligar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EstadoServidor',
    data: function(){
        return {
            estado: 'Ligado'
        }
    },
    methods: {
        ligar(){
            this.estado = "Ligado"
        },
        desligar(){
            this.estado = "Desligado"
        }
    }
}
</script>