// import Fun from './function.js';
import { ethers } from 'ethers';
import ecommerce_store_artifacts from '../build/contracts/EcommerceStore.json';
// const { ethers } = require("ethers");
// const { create } = require('ipfs-http-client');
// const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });


export const AppOfEthers = {
    provider: null,
    singer: null,
    EcommerceStore: null,
    start: async function () {
        try {
            const { provider, singer } = this;
            const network = await provider.getNetwork();
            const EcommerceStoreAddress = ecommerce_store_artifacts.networks[network.chainId].address;
            this.EcommerceStore = new ethers.Contract(
                EcommerceStoreAddress,
                ecommerce_store_artifacts.abi,
                singer,
            );
            console.log(this.EcommerceStore)
        } catch (error) {
            console.error(error);
        }
    },

    // 查询所有出价
    serachAllBids: async function () {

    },

    // 获取密文
    keccakWithamountAndsecretText: async function (amount, secretText) {
        const { keccak } = this.EcommerceStore;
        amount =  ethers.utils.parseEther(amount);
        var sealedBid = await keccak(amount.toString(), secretText);
        return sealedBid;
    },

}