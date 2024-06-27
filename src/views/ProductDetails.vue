<template>
  <div class="inner-banner inner-bg12">
    <div class="container">
      <div class="inner-title">
        <h3>Item Details</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Trading</li>
          <li>Item Details</li>
        </ul>
        <div class="inner-shape">
          <img src="@/assets/images/inner-banner/inner-shape1.png" alt="Images">
          <img src="@/assets/images/inner-banner/inner-shape2.png" alt="Images">
        </div>
      </div>
    </div>
  </div>


  <div v-if="product">
    <div class="item-details-area pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="item-details-left-side pr-20">
              <div class="item-details-img">
                <img :src="'http://localhost:9001/ipfs/' + product.ipfsImageHash" alt="Images">
                <span><i class="ri-heart-line"></i>0</span>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="item-details-dsce">
              <div class="section-title">
                <h2>{{product.productName}}</h2>
                <p v-if="productDescription">{{ productDescription }}</p>
              </div>

              <div class="item-details-price">
                <div class="item-details-title">
                  <h3>Start Price: {{product.price}} ETH</h3>
                </div>
                <ul>
                  <li>
                    category
                    <b>: {{product.category}}</b>
                  </li>
                  <li>
                    Created
                    <b>: {{ formatDate(product.auctionStartTime) }}</b>
                  </li>
                  <li>
                    Collection
                    <b>: Userhash1</b>
                  </li>
                  <li>
                    Category
                    <b>: Userhash2</b>
                  </li>
                </ul>
              </div>
              <div class="item-details-in-content">
                <div class="item-left">
                  <span>Auction Ends In</span>
                </div>
                <div class="item-right">
                  <h4 v-if="countdown">{{ countdown }}</h4>
                  <h4 v-else>Auction Ended</h4>
                </div>
              </div>
              <div class="item-details-btn">
                <a href="item-details.html" class="default-btn border-radius-50"> Place Bid</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      product: null,
      productDescription:'',
      auctionStartTime: null,  // 从API获取的开始时间戳
      auctionEndTime: null,    // 从API获取的结束时间戳
      countdown: null,
      timer: null
    };
  },
  created() {
    this.fetchProductDetails();
  },
  methods: {
    fetchProductDetails() {
      const blockchainId = this.$route.params.blockchainId;
      fetch(`http://localhost:80/product/${blockchainId}`)
          .then(response => response.json())
          .then(data => {
            this.product = data;
            this.auctionStartTime = data.auctionStartTime;
            this.auctionEndTime = data.auctionEndTime;
            return fetch(`http://localhost:9001/ipfs/${data.ipfsDescHash}`);
          })
          .then(response => response.text()) // 假设IPFS返回的是纯文本内容
          .then(descriptionText => {
            this.productDescription = descriptionText;
          })
          .catch(error => console.error('Error fetching product details:', error));
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      const options = { year: 'numeric', month: 'long', day: '2-digit' };
      return date.toLocaleDateString('en-US', options);
    },
    updateCountdown() {
      const now = Date.now();
      const end = this.auctionEndTime * 1000; // 转换为毫秒
      const distance = end - now;

      if (distance < 0) {
        this.countdown = null;
        clearInterval(this.timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    },
    startTimer() {
      this.updateCountdown();
      this.timer = setInterval(this.updateCountdown, 1000);
    }
  },
  mounted() {
    this.fetchProductDetails();
    this.startTimer();
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
</script>
