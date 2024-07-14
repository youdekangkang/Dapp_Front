<template>
  <div>
    <button @click="connectMetaMask">Connect MetaMask</button>
    <p v-if="account">Connected account: {{ account }}</p>
    <p v-if="error" style="color: red;">Error: {{ error }}</p>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import Web3 from "web3";
import {AppOfEthers} from "@/assets/js/ofetherjs";
import {AppOfWeb3} from "@/assets/js/ofweb3";
import { mapActions } from 'vuex';
import { EventBus } from '../event-bus'; // 导入事件总线


export default {
  data() {
    return {
      account: null,
      provider: null,
      signer: null,
      error: null,
    };
  },
  methods: {
    ...mapActions(['initializeWeb3App', 'initializeEthersApp']),
    async connectMetaMask() {
      if (window.ethereum) {
        try {


          // 请求 MetaMask 账户访问权限
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // 创建 provider 和 signer
          this.provider = new ethers.providers.Web3Provider(window.ethereum);
          this.signer = this.provider.getSigner();
          // 获取账户地址
          const accounts = await this.provider.listAccounts();
          this.account = accounts[0];

          console.log("MetaMask connected");
          console.log("Provider:", this.provider);
          console.log("Signer:", this.signer);

          // 初始化 Web3App 和 EthersApp
          AppOfWeb3.web3 = new Web3(window.ethereum);
          AppOfEthers.provider = new ethers.providers.Web3Provider(window.ethereum);
          AppOfEthers.singer = AppOfEthers.provider.getSigner();

          await AppOfWeb3.start();
          await AppOfEthers.start();

          // 存储到 Vuex
          this.initializeWeb3App(AppOfWeb3);
          this.initializeEthersApp(AppOfEthers);

          // 触发事件通知其他组件
          EventBus.emit('wallet-connected', this.account);

          console.log("Connect to wallet successfully!")

        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
          this.error = error.message;
        }
      } else {
        console.error("MetaMask not detected");
        this.error = "MetaMask not detected";
      }
    }
  }
};
</script>