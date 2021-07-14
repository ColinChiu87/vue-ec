<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  created() {
    const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
    // this.$http.get(api).then((resp) => {
    //   console.log(resp.data);
    // });
  },
};
</script>
<style lang="scss">
@import "./assets/all";
// @import '~bootstrap/scss/bootstrap';
</style>
