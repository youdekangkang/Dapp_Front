<template>
  <div id="app">
    <BaseNavbar/>
    <router-view/>
    <FooterBar/>
  </div>
</template>

<script>
import BaseNavbar from "@/components/BaseNavbar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: 'App',
  components: {
    BaseNavbar,
    FooterBar
  }
}
</script>

<style>

</style>
