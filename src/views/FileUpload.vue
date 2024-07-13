/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

<template>
  <div class="inner-banner inner-bg13">
    <div class="container">
      <div class="inner-title">
        <h3>Upload Your Collection</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Upload Collection</li>
        </ul>
        <div class="inner-shape">
          <img src="@/assets/images/inner-banner/inner-shape1.png" alt="Images">
          <img src="@/assets/images/inner-banner/inner-shape2.png" alt="Images">
        </div>
      </div>
    </div>
  </div>

  <!-- Collection Widget Area -->
  <div class="collection-widget-area pt-100 pb-70">
    <div class="container">
      <div class="row">
        <div class="collection-form-area">
          <div class="section-title">
            <h2>Upload Collection</h2>
          </div>

          <form @submit.prevent="submitForm" class="collection-form">
            <div class="profile-outer">
              <h3>Upload File</h3>
              <div class="profileButton">
                <input class="form-control" type="file" @change="handleFileUpload" required="required"/>
                <span class="profileButton-file-name">{{ fileName }}</span>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Item Name</label>
                  <input type="text" v-model="form.productName" class="form-control" placeholder="e. g. “walking in the air”" required="required"/>
                </div>
              </div>

              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn border-radius-5">
                  Create Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FileUpload',
  computed: {
    ...mapGetters(['web3App', 'ethersApp'])
  },
  data(){
    return {
      form:{
        productName: '',
      },
      reader: null,
      fileName: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        const reader = new FileReader();
        reader.onload = e => {
          this.reader = e.target.result;
        };
        reader.readAsArrayBuffer(file);
      }
    },
    async submitForm() {
      try {
        if (!this.web3App) {
          throw new Error("Web3App is not initialized");
        }
        const formData = this.form;
        let decodedParams = {};
        Object.keys(formData).forEach(key => {
          decodedParams[key] = decodeURIComponent(decodeURI(formData[key]));
        });

        await this.web3App.saveToProduct(this.reader, decodedParams);
        console.log("Success!");
        this.resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    resetForm() {
      // 重置表单数据
      this.form.itemName = '';
      this.reader = null;
      this.fileName = '';

      // 清空文件输入框
      const fileInput = this.$el.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = '';
      }
    }

  },
  mounted() {
    if (this.web3App) {
      console.log("Web3App is available", this.web3App);
    } else {
      console.error("Web3App is not initialized");
    }
  }



};
</script>

<style scoped>

</style>