<template>
  <div class="inner-banner inner-bg13">
    <div class="container">
      <div class="inner-title">
        <h3>Release Your Products for Auction</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Release Sale</li>
        </ul>
        <div class="inner-shape">
          <img src="@/assets/images/inner-banner/inner-shape1.png" alt="Images">
          <img src="@/assets/images/inner-banner/inner-shape2.png" alt="Images">
        </div>
      </div>
    </div>
  </div>

  <div class="collection-widget-area pt-20 pb-70">

    <div class="container">
      <div class="row">
        <div class="collection-form-area">
          <h2>Create Auction</h2>
          <form class="collection-form" @submit.prevent="submitForm">
            <div class="row">
              <div class="col-lg-7">
                <div class="item-details-left-side pr-20">
                  <div class="item-details-img">
                    <img :src="'http://localhost:9001/ipfs/'+id" alt="Product Image" width="60%">
                  </div>
                </div>
              </div>

              <div class="col-lg-5">
                <div class="item-details-dsce">
                  <h4>File Name</h4>
                  <p> {{ name }}</p>
                  <h4>File Hash code:</h4>
                  <p> {{ id }} </p>
                  <h4>Creation Time</h4>
                  <p>{{ date }}</p>
                  <h4>Asset Status</h4>
                  <p>{{ statue }}</p>
                </div>
              </div>
            </div>

            <div v-if="statue!='Selling'">
              <div class="collection-category">
                <h3>Choose Item Category</h3>
                <div class="category-buttons">
                  <button
                      type="button"
                      v-for="category in categories"
                      :key="category"
                      :class="{ 'active': form.productCategory === category }"
                      @click="selectCategory(category)">
                    {{ category }}
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Start Price(ETH)</label>
                    <input type="text" name="price" id="price" v-model="form.productPrice" class="form-control"
                           placeholder="e. g. “1,15,100”" style="width: 30%">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea name="description" class="form-control" id="description" cols="30"
                              rows="5" v-model="form.productDescription"
                              placeholder="e. g. “after purchasing you’ll able to get the real product”"></textarea>
                  </div>
                </div>


                <div class="col-lg-12 col-md-12">
                  <h5>Auction Start Time</h5>
                  <input v-model="form.productAuctionStart" type="datetime-local" class="form-control" style="width: 30%"
                         name="product-auction-start" id="product-auction-start" required="required">
                </div>

                <div class="col-lg-12 col-md-12 pt-4">
                  <h5>Days to Run the Auction</h5>
                  <div class="category-buttons">
                    <button
                        type="button"
                        v-for="day in days"
                        :key="day"
                        :class="{ 'active': form.productAuctionEnd === day }"
                        @click="selectedDay(day)">
                      {{ day }}
                    </button>
                  </div>

                </div>

                <div class="col-lg-12 col-md-12 pt-4">
                  <button type="submit" class="default-btn border-radius-5">
                    Start Auction
                  </button>
                </div>
              </div>
            </div>
            <div v-else>The item has been submitted for sale</div>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {mapGetters} from 'vuex';


export default {
  props: ['asset'],
  name: "ReleaseSale",
  computed: {
    ...mapGetters(['web3App']),
    name() {
      return this.$route.query.name;
    },
    id() {
      return this.$route.query.id;
    },
    date() {
      return this.$route.query.date;
    },
    statue() {
      return this.$route.query.assetStatus;
    }
  },
  data() {
    return {
      categories: [
        "Digital Art",
        "Virtual Real Estate",
        "Collectible Games",
        "Virtual Goods",
        "Music and Sound Tracks",
        "Video and Animations",
        "Software and Tools",
        "NFT Gifts",
        "E-Books",
        "Photography",
        "3D Printing Models",
        "Educational Courses",
        "VR/AR"
      ],
      days: [1, 2, 3, 5, 7, 10],
      form: {
        productCategory: '',
        productName: '',
        assetHash: '',
        productPrice: '',
        productAuctionStart:'',
        productAuctionEnd:'',
        productDescription:'',
        assetStatus:''
      }
    };
  },
  methods: {
    selectCategory(category) {
      this.form.productCategory = category;
    },
    selectedDay(day) {
      this.form.productAuctionEnd = day;
    },
    camelCaseToHyphen(str) {
      return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    },
    async submitForm() {
      this.form.productName = this.name;
      this.form.assetHash = this.id;
      this.form.assetStatus = this.assetStatus;
      this.form.productAuctionStart = this.form.productAuctionStart.replace(/:/g, encodeURIComponent(':'));

      try {
        if (!this.web3App) {
          alert("Web3App is not initialized");
          throw new Error("Web3App is not initialized");
        }
        const formData = this.form;
        console.log(formData);
        let decodedParams = {};
        Object.keys(formData).forEach(key => {
          let newKey = this.camelCaseToHyphen(key);
          decodedParams[newKey] = decodeURIComponent(decodeURI(formData[key]));
        });
        await this.web3App.saveProduct(this.reader, decodedParams);
        console.log("Successfully Create Auction!");
        // location.assign('/mine');
      } catch (error) {
        alert(error);
        console.error("Error submitting form:", error);
      }
    }
  }
}
</script>

<style scoped>
.category-buttons button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
}

.category-buttons button:hover {
  background-color: #e0e0e0;
}

.category-buttons button.active {
  background-color: #007BFF;
  color: white;
}
</style>