<template>
  <div>
    <div>
      <h1>Counter: {{ counter }}</h1>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>
    <div>
      <h1>Counter2: {{ counter2 }}</h1>
      <button @click="decrement2">Decrement2</button>
      <button @click="increment2">Increment2</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "CounterTest",
  computed: {
    ...mapState("contador", ["counter"]),
    ...mapState("contador2", ["counter2"]),
    ...mapGetters("contador", ["counter"]),
    ...mapGetters("contador2", ["counter2"]),
  },
  methods: {
    ...mapActions("contador", ["decrement", "increment"]),
    ...mapActions("contador2", ["decrement2","increment2"]),
  },
};
</script>