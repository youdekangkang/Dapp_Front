<!-- src/views/AuctionPage.vue -->
<template>
  <div class="inner-banner inner-bg5">
    <div class="container">
      <div class="inner-title">
        <h3>Live Auction Is Going On</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Trading</li>
          <li> Live Auction</li>
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
        <h2>Live Auction</h2>
      </div>
      <div class="row justify-content-center pt-45">
        <div v-for="product in products" :key="product.id" class="col-lg-4 col-md-6">
          <div class="auction-card">
            <div class="auction-card-img">
              <a :href="'/product/' + product.id">
                <img :src="'http://localhost:9001/ipfs/' + product.imageId"  alt="Product Image" width="370" height="360">
              </a>
              <div class="auction-card-into">
                <h3>Remaining Time</h3>
                <div class="auction-timer">
                  {{ product.remainingTime }}
                </div>
              </div>
            </div>
            <div class="content">
              <h3><a :href="'/product/' + product.id">{{ product.name }}</a></h3>

              <div class="auction-card-content">
                <div class="card-left">
                  <span>Start Bid</span>
                  <h4>{{ product.startPrice }} ETH</h4>
                </div>
              </div>
              <a :href="'/product/' + product.id" class="place-btn">Place Bid</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  name: 'AuctionPage',
  data() {
    return {
      products: []  // 商品数据初始化为空数组
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch('http://localhost:80/transaction/allTransaction?status')
          .then(response => response.json())
          .then(data => {
            this.products = data.map(product => ({
              ...product,
              timer: null,
              remainingTime: ''
            }));
            this.startTimers();
            console.log(this.products);
          })
          .catch(error => console.error('Error fetching products:', error));
    },
    startTimers() {
      this.products.forEach(product => {
        const updateCountdown = () => {
          const now = Date.now();
          const end = product.auctionEndTime * 1000; // 转换为毫秒
          const distance = end - now;

          if (distance < 0) {
            clearInterval(product.timer);
            product.remainingTime = "拍卖已结束";
            return;
          }

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          product.remainingTime = `${days}Day ${hours}Hour ${minutes}Min ${seconds}Sec`;
        };
        updateCountdown();
        product.timer = setInterval(updateCountdown, 1000);
      });
    },
    beforeUnmount() {
      this.products.forEach(product => {
        if (product.timer) {
          clearInterval(product.timer);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
