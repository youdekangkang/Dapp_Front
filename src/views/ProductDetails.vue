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


              <div>
                <div class="item-details-btn" id="bid">
                  <a type="submit" class="default-btn border-radius-50" @click="getInfo">Check Status</a>
                </div>


                <div id="escrow-info" style="display: none">
                  <div id="buyer">{{buyer}}</div>
                  <div id="seller">{{seller}}</div>
                  <div id="arbiter">{{arbiter}}</div>
                  <div id="release-count">{{releaseCount}}</div>
                  <div id="refund-count">{{refundCount}}</div>
                  <a class="btn form-submit" @click="releaseFunds">Release Amount to Seller</a>
                  <a class="btn form-submit" @click="refundFunds">Refund Amount to Buyer</a>
                </div>

                <form id="bidding" class="col-sm-4" @submit.prevent = "submitForm1" style="display: none">
                  <h4>Your Bid</h4>
                  <div class="form-group">
                    <label for="bid-amount">Enter Bid Amount</label>
                    <input type="text" class="form-control" name="bid-amount" id="bid-amount"
                           placeholder="Amount > Start Price" required="required" v-model="form1.bidAmount">
                  </div>
                  <div class="form-group">
                    <label for="bid-send-amount">Enter Amount To Send</label>
                    <input type="text" class="form-control" name="bid-send-amount" id="bid-send-amount"
                           placeholder="Amount >= Bid Amount" required="required" v-model="form1.bidSendAmount">
                  </div>
                  <div class="form-group">
                    <label for="secret-text">Enter Secret Text</label>
                    <input type="text" class="form-control" name="secret-text" id="secret-text"
                           placeholder="Any random text" required="required" v-model="form1.secretText">
                  </div>
                  <div class="item-details-btn">
                    <button type="submit" class="default-btn border-radius-50">Submit Bid</button>
                  </div>
                </form>

                <form id="revealing" class="col-sm-4" @submit.prevent="submitForm2" style="display: none">
                  <h4>Reveal Bid</h4>
                  <div class="form-group">
                    <label for="actual-amount">Amount You Bid</label>
                    <input type="text" class="form-control" name="actual-amount" id="actual-amount"
                           placeholder="Amount > Start Price" required="required" v-model="form2.actualAmount">
                  </div>
                  <div class="form-group">
                    <label for="reveal-secret-text">Enter Secret Text</label>
                    <input type="text" class="form-control" name="reveal-secret-text" id="reveal-secret-text"
                           placeholder="Any random text" required="required" v-model="form2.revealSecretText">
                  </div>
                  <div class="item-details-btn">
                    <button type="submit" class="default-btn border-radius-50">Reveal Bid</button>
                  </div>
                </form>

                <form id="finalize-auction" class="col-sm-6" @submit.prevent="submitForm3" style="display: none">
                  <div class="item-details-btn">
                    <button type="submit" class="default-btn border-radius-50">Finalize Auction</button>
                  </div>
                </form>

                <div id="product-status">{{productStatus}}</div>


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
import {mapGetters} from "vuex";

export default {
  computed: {
  ...mapGetters(['web3App']),
  },
  data() {
    return {
      productStatus:'',
      product: null,
      productDescription:'',
      auctionStartTime: null,
      auctionEndTime: null,
      countdown: null,
      timer: null,
      buyer:'',
      seller:'',
      arbiter:'',
      releaseCount:'',
      refundCount:'',
      form1:{
        bidAmount:'',
        bidSendAmount:'',
        secretText:'',
      },
      form2:{
        actualAmount:'',
        revealSecretText:'',
      },
      form3:{
        productId:''
      },
    };
  },
  created() {
    this.fetchProductDetails();
  },
  methods: {
    camelCaseToHyphen(str) {
      return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    },
    async submitForm1() {
      let amount = this.form1.bidAmount.toString();
      let sendAmount = this.form1.bidSendAmount.toString();
      let secretText = this.form1.secretText.toString();
      let productId = this.$route.params.blockchainId;
      try {
        if (!this.web3App) {
          throw new Error("Web3App is not initialized");
        }
        let sealedBid = this.web3App.keccakWithamountAndsecretText(amount, secretText);
        console.log("continue")
        sealedBid.then(sealedBid => {
          this.web3App.bidProduct(productId, sealedBid, sendAmount);
        });
        console.log("Success!");
      }catch (error){
        console.error("Error submitting form:", error);
      }

    },
    async submitForm2() {
      let productId = this.$route.params.blockchainId;
      let amount = this.form2.actualAmount.toString();
      let secretText = this.form2.revealSecretText.toString();
      try {
        if (!this.web3App) {
          throw new Error("Web3App is not initialized");
        }
        this.web3App.revealProduct(productId, amount, secretText);
        console.log("Reveal Price Success!");
      }catch (error){
        console.error("Error submitting form:", error);
      }

    },
    async submitForm3() {
      let productId = this.$route.params.blockchainId;
      try {
        if (!this.web3App) {
          throw new Error("Web3App is not initialized");
        }
        this.web3App.finalizeProduct(productId);
        console.log("Finial Success!");
      }catch (error){
        console.error("Error submitting form:", error);
      }
    },
    releaseFunds() {
      let productId = this.$route.params.blockchainId;
      alert("Your transaction has been submitted. Please wait for few seconds for the confirmation");
      this.web3App.releaseFunds(productId);
    },
    refundFunds() {
      let productId = this.$route.params.blockchainId;
      alert("Your transaction has been submitted. Please wait for few seconds for the confirmation");
      this.web3App.refundFunds(productId);
      alert("refund the funds!");
    },
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
    },
    async getInfo() {
      let bidding = document.getElementById("bidding");
      let revealing = document.getElementById("revealing");
      let finalizeAuction = document.getElementById("finalize-auction");
      let escorwInfo = document.getElementById("escrow-info");
      let button1 = document.getElementById("bid");

      try {
        if (!this.web3App) {
          alert("Please connect your wallet first");
          throw new Error("Web3App is not initialized");
        }
        button1.style.display = "none";
        let res = await this.web3App.getProductInfo(this.$route.params.blockchainId);
        console.log(res);
        let currentTime = Math.round(new Date() / 1000);

        if (res[8] == 1) {
          escorwInfo.style.display = "block";
          this.productStatus = await this.web3App.highestBidder(this.$route.params.blockchainId);
          let res = await this.web3App.escrowData(this.$route.params.blockchainId);
          this.buyer = res[0];this.seller=res[1];this.arbiter=res[2];this.releaseCount=res[3];this.refundCount=res[4];

        } else if (res[8] == 2) {
          // productStatus.style.display = "block";
          this.productStatus = "Product was not sold";
        } else if (currentTime < res[6]) {
          bidding.style.display = "block";
        } else if (currentTime - (200) < res[6]) {
          revealing.style.display = "block";
        } else {
          finalizeAuction.style.display = "block";
        }

        console.log("Success!");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
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
