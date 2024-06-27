<template>
  <div class="inner-banner inner-bg13">
    <div class="container">
      <div class="inner-title">
        <h3>Create Collection</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Pages</li>
          <li>Create Collection</li>
        </ul>
        <div class="inner-shape">
          <img src="@/assets/images/inner-banner/inner-shape1.png" alt="Images">
          <img src="@/assets/images/inner-banner/inner-shape2.png" alt="Images">
        </div>
      </div>
    </div>
  </div>


  <div class="collection-widget-area pt-100 pb-70">
    <div class="container">
      <div class="row">
          <div class="collection-form-area">
            <div class="section-title">
              <h2>Create Auction</h2>
            </div>
            <div class="collection-form">

              <div class="profile-outer">
                <h3>Upload File</h3>
                <div class="profileButton">
                  <input class="profileButton-input" type="file" name="attachments[]"
                         accept="image/*, application/pdf" id="upload" multiple/>
                  <label class="profileButton-button ripple-effect" for="upload">e. g. Image, Audio,
                    Video</label>
                  <span class="profileButton-file-name"></span>
                </div>
              </div>

              <div class="collection-category">
                <h3>Choose Item Category</h3>
                <div class="category-buttons">
                  <button
                      v-for="category in categories"
                      :key="category"
                      :class="{ 'active': selectedCategory === category }"
                      @click="selectCategory(category)">
                    {{ category }}
                  </button>
                </div>
              </div>


                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Item Name</label>
                      <input type="text" name="name" id="name" class="form-control"
                             placeholder="e. g. “walking in the air”">
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Description</label>
                      <textarea name="description" class="form-control" id="description" cols="30"
                                rows="5"
                                placeholder="e. g. “after purchasing you’ll able to get the real product”"></textarea>
                    </div>
                  </div>


                  <div class="col-lg-12">
                    <h5>Item Condition</h5>
                    <div class="checkbox-method-area">
                      <div class="col-lg-12 col-md-12">
                        <div class="checkbox-method">
                          <p>
                            <input type="radio" id="NewItem" name="radio-group">
                            <label for="NewItem">New Item</label>
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <div class="checkbox-method">
                          <p>
                            <input type="radio" id="UsedItem" name="radio-group">
                            <label for="UsedItem">Used Item</label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <h5>Auction Start Time</h5>
                    <input type="datetime-local" class="form-control" name="product-auction-start" id="product-auction-start" required="required">
                  </div>

                  <div class="col-lg-12">
                    <h5>Days to Run the Auction</h5>
                    <div class="category-buttons">
                      <button
                          v-for="day in days"
                          :key="day"
                          :class="{ 'active': selectedDay === day }"
                          @click="selectCategory(day)">
                        {{ day }}
                      </button>
                    </div>

                  </div>

                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="default-btn border-radius-5">
                      Create Item
                    </button>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "CreateCollection",
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
      days: [0.5,1,2,3,5,7],
      selectedCategory: '',
      selectDuration: ''
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    selectedDay(day) {
      this.selectDuration = day;
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