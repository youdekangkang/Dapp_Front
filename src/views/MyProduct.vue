/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
<template>
  <div class="inner-banner inner-bg5">
    <div class="container">
      <div class="inner-title">
        <h3>Browse Your Unsold Items</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Trading</li>
          <li>My Product</li>
        </ul>
        <div class="inner-shape">
          <img src="@/assets/images/inner-banner/inner-shape1.png" alt="Images">
          <img src="@/assets/images/inner-banner/inner-shape2.png" alt="Images">
        </div>
      </div>
    </div>
  </div>

  <div class="auctions-area-three pt-100 pb-70">
    <div class="container">
      <div class="section-title">
        <h2>Your Products</h2>
      </div>

      <div class="row justify-content-center pt-45" v-if="assets.length > 0">
        <div v-for="asset in assets" :key="asset.name" class="col-lg-4 col-md-6">
          <div class="auction-card">
            <div class="auction-card-img">
              <img :src="asset.imageUrl"  alt="Product Image" width="370" height="360">
            </div>
            <div class="content">
              <h3>{{ asset.name }}</h3>

              <div class="auction-card-content">
                <div class="card-left">
                  <span>Creation Time</span>
                  <h4>{{ asset.creationTime }} ETH</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else>No assets found.</p>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { EventBus } from '../event-bus';

export default {
  name: "MyProduct",
  data() {
    return {
      assets: []
    };
  },
  computed: {
    ...mapGetters(['web3App'])
  },
  methods: {
    async fetchUserAssets() {
      if (!this.web3App) {
        console.error("Web3App is not initialized");
        return;
      }
      try {
        const userAssets = await this.web3App.selectOwnAsset();
        this.assets = userAssets;
        console.log(this.assets)
      } catch (error) {
        console.error("Error fetching user assets:", error);
      }
    }
  },
  mounted() {
    // 如果已经有 Web3App 实例，则直接获取用户资产
    if (this.web3App) {
      console.log("getting user products...")
      this.fetchUserAssets();
    }
    // 监听钱包连接事件
    EventBus.on('wallet-connected', this.fetchUserAssets);
  },
  beforeUnmount() {
    // 移除事件监听器
    EventBus.off('wallet-connected', this.fetchUserAssets);
  }
}
</script>

<style scoped>

</style>