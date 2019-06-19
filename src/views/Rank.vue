<template>
  <div>
    {{ counts }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="testAction">~</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      counts: state => state.count
    }),
    ...mapGetters(["doneTodos", "doneTodosCount", "getTodoById"])
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    testAction() {
      this.$store.dispatch("increment");
    }
  }
};
</script>
