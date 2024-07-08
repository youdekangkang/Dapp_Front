<template>
  <div id="app">
    <MetaMaskConnector />
    <BaseNavbar/>
    <router-view/>
    <FooterBar/>
  </div>
</template>

<script>
import MetaMaskConnector from './components/MetaMaskConnector.vue';
import BaseNavbar from "@/components/BaseNavbar.vue";
import FooterBar from "@/components/FooterBar.vue";


export default {
  name: 'App',
  components: {
    BaseNavbar,
    FooterBar,
    MetaMaskConnector
  }
}
</script>

<style>

</style>
