<template>
  <div>{{ counts }}</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      counts: state => state.count
    })
  }
};
</script>
