<template>
  <div id="app">
    <Header></Header>
    <NavTab></NavTab>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Header from "@/components/Header";
import NavTab from "@/components/NavTab";
export default {
  components: {
    Header,
    NavTab
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
