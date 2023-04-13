<template>
  <div>
    <the-header></the-header>
    <div>
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "./components/nav/TheFooter.vue";
import TheHeader from "./components/nav/TheHeader.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  },
};
</script>

<style>
body {
  margin: 10px 100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
