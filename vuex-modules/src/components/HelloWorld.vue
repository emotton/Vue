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
  name: "HelloWorld",
  computed: {
    ...mapState("counter", ["counter"]),
    ...mapGetters(["counter"]),
    ...mapState("counter2", ["counter2"]),
    ...mapGetters(["counter2"]),
  },
  methods: {
    ...mapActions(["decrement", "increment", "decrement2", "increment2"]),
  },
};
</script>