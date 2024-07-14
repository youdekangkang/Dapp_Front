/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import Fun from './function.js';
import ecommerce_store_artifacts from '../../../../build/contracts/ChickEtherealStore.json';
import asset_manager_artifacts from '../../../../build/contracts/AssetManager.json';

import $ from 'jquery';
import Web3 from 'web3';
import { create } from 'ipfs-http-client';
// const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });
// const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// 你的其他代码
export const AppOfWeb3 = {
  web3: null,
  account: null,
  ChickEtherealStore: null,
  fun: new Fun(),
  start: async function () {
    const { web3 } = this;
    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = ecommerce_store_artifacts.networks[networkId];
      this.ChickEtherealStore = new web3.eth.Contract(
          ecommerce_store_artifacts.abi,
          deployedNetwork.address,
      );
      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
      await this.subscribeProduct();
    } catch (error) {
      console.error(error);
    }
  },
  selectOwnAsset: async function () {
    try {
      // 调用 AssetManager 合约的 getAssets 方法
      const { getAssets } = this.ChickEtherealStore.methods;

      // 返回用户拥有的所有资产
      const userAssets = await getAssets(this.account).call();

      // 判断资产是否为空
      if (userAssets.length === 0) {
        console.log('No products found');
        return [];
      } else {
        // 创建一个资产列表
        const assets = [];
        for (let i = 0; i < userAssets.length; i++) {
          const assetNode = await this.buildAsset(userAssets[i]);
          assets.push(assetNode);
        }
        console.log('success');
        return assets;
      }

    } catch (error) {
      console.error('Error fetching user assets:', error);
      throw error;
    }
  },

  buildAsset: async function (assetId) {
    const { getAssetName, getAssetCreationTime,getSaleStatus } = this.ChickEtherealStore.methods;
    let assetName = await getAssetName(assetId).call();
    let creationTime = await getAssetCreationTime(assetId).call();
    let asset_status = await getSaleStatus(assetId).call();
    asset_status = parseInt(asset_status);
    let asset_status_str;
    console.log(asset_status)
    if (asset_status === 0){
      asset_status_str = "Not Selling";
    }else{
      asset_status_str = "Selling";
    }
    creationTime = Number(creationTime);
    return {
      id: assetId,
      name: assetName,
      creationTime: new Date(creationTime * 1000).toLocaleString(),
      imageUrl: `http://localhost:9001/ipfs/${assetId}`,
      assetStatus: asset_status_str
    };
  },

  // buildAsset: async function(userAssets) {
  //   const {getAssetName} = this.ChickEtherealStore.methods;
  //   const {getAssetCreationTime} = this.ChickEtherealStore.methods;
  //   const {getSaleStatus} = this.ChickEtherealStore.methods;
  //
  //   let asset_name = await getAssetName(userAssets).call()
  //   let creation_time = await getAssetCreationTime(userAssets).call()
  //   let asset_status = await getSaleStatus(userAssets).call()
  //   let asset_status_str;
  //
  //   if (asset_status === '0'){
  //     asset_status_str = "Not Selling";
  //   }else{
  //     asset_status_str = "Selling";
  //   }
  //
  //   let node = $("<div/>");
  //   node.addClass("col-sm-3 text-center col-margin-bottom-1");
  //   node.append("<a>< img src='http://localhost:9001/ipfs/" + userAssets + "' width='150px' height='100px'/></a >");
  //   node.append("<div>" + asset_name + "</div>");
  //   node.append("<div>" + new Date(creation_time * 1000).toLocaleString() + "</div>");
  //   node.append("<div>" + asset_status_str + "</div>");
  //   return node;
  // },

  getAssetNameAndImageHash: async function(){
    const {getAssets,getAssetName} = this.ChickEtherealStore.methods;

    var userAssets = await getAssets(this.account).call();

    // 获取下拉框元素
    var productNameSelect = document.getElementById('product-name');
    for (var i = 0; i < userAssets.length; i++) {
      var productNames = await getAssetName(userAssets[i]).call();
      var option = document.createElement('option');
      option.value = productNames;
      option.text = productNames;
      productNameSelect.add(option);
    }

  },

  // updateAssetHash: async function() {
  //   const {getAssets} = this.ChickEtherealStore.methods;
  //   const {getAssetName} = this.ChickEtherealStore.methods;
  //
  //   var userAssets = await getAssets(this.account).call();
  //   var productNameSelect = document.getElementById('product-name');
  //   var selectedAssetHashInput = document.getElementById('asset-hash');
  //
  //   var selectName = productNameSelect.value;
  //
  //
  //   if (selectName) {
  //     for (let i = 0; i < userAssets.length; i++) {
  //       var assetName = await getAssetName(userAssets[i]).call();
  //       if (assetName === selectName){
  //         selectedAssetHashInput.value = userAssets[i];
  //       }else{
  //         console.log("what can i say, man?")
  //       }
  //     }
  //   } else {
  //     selectedAssetHashInput.value = 'Not found your asset';
  //   }
  // },

  updateAssetHash: async function() {
    const {getAssets,getAssetName,getSaleStatus} = this.ChickEtherealStore.methods;

    var userAssets = await getAssets(this.account).call();
    let assetStatus;
    var productNameSelect = document.getElementById('product-name');
    var selectedAssetHashInput = document.getElementById('asset-hash');
    var selectedAssetStatus = document.getElementById('asset-status');
    var selectName = productNameSelect.value;


    if (selectName) {
      for (let i = 0; i < userAssets.length; i++) {
        var assetName = await getAssetName(userAssets[i]).call();
        if (assetName === selectName){
          assetStatus = await getSaleStatus(userAssets[i]).call();
          if (assetStatus === 0){
            assetStatus = "Not Selling";
          }else{
            assetStatus = "Selling";
          }
          selectedAssetStatus.value = assetStatus;
          selectedAssetHashInput.value = userAssets[i];
          break;
        }
      }
    } else {
      selectedAssetHashInput.value = 'Not found your asset';
    }
  },

// 添加商品
//   saveProduct: async function (reader, decodedParams) {
//     let imageId, descId;
//     let that = this;
//     that.fun.saveTextBlobOnIpfs(decodedParams["product-description"]).then(function (id) {
//       descId = id;
//       AppOfWeb3.saveProductToBlockchain(decodedParams, descId);
//     })
//   },

  saveProduct: async function (reader, decodedParams) {
    if (decodedParams["asset-status"] === 'Selling'){
      alert("Product is selling, Do not submit repeatedly")
      return;
    }
    let descId;
    let that = this;
    that.fun.saveTextBlobOnIpfs(decodedParams["product-description"]).then(function (id) {
      descId = id;
      AppOfWeb3.saveProductToBlockchain(decodedParams, descId);
    })
  },

  // 添加商品不拍卖
  saveToProduct: async function (reader, decodedParams) {
    let imageId;
    let that = this;
    that.fun.saveImageOnIpfs(reader).then(function (id) {
      imageId = id;
      console.log(imageId,decodedParams);
      AppOfWeb3.saveProductToBlockchainWithoutAuction(imageId, decodedParams);
    })
  },

  // 添加商品到区块链
  saveProductToBlockchain: async function (params, descId) {
    let auctionStartTime = Date.parse(params["product-auction-start"]) / 1000;
    let auctionEndTime = auctionStartTime + parseInt(params["product-auction-end"]) * 24 * 60 * 60;

    const { addTransactionToStore } = this.ChickEtherealStore.methods;
    console.log("saving to blockchain")
    await addTransactionToStore(params["product-name"], params["product-category"], params["asset-hash"], descId, auctionStartTime,
        auctionEndTime, params["product-price"])
        .send({ from: this.account, gas: 999999,
          gasPrice: Web3.utils.toWei('10', 'gwei')}).then(
              console.log("dame")
        )
    ;
    const { transactionIndex } = this.ChickEtherealStore.methods;
    await transactionIndex().call().then(value=>{
      console.log(value)
      let that = this;
      that.fun.saveProductNew(params,descId,auctionStartTime,auctionEndTime,value.toString());
    })

    alert("Your product was successfully added to your store!");
    // let that = this;
    console.log(params,descId,auctionStartTime,auctionEndTime);
    // await that.fun.saveProductNew(params);
    // location.assign("/mine");
  },

  // 添加商品到区块链不竞拍
  saveProductToBlockchainWithoutAuction: async function (imageId, params) {
    const { addAsset } = this.ChickEtherealStore.methods;

    await addAsset(imageId, params["productName"])
        .send({ from: this.account, gas: 999999,
          gasPrice: Web3.utils.toWei('10', 'gwei')}).then(console.log);
    alert("Your product was successfully added to your store!");
    location.assign("/");
  },

  //获取商品状态
  getTransactionInfoInfo: async function (productId) {
    const { getTransactionInfo } = this.ChickEtherealStore.methods;
    const res = await getTransactionInfo(productId).call();
    return res;
  },


  // 商品详情
  // renderProductDetails: async function (productId) {
  //   const { getTransactionInfo } = this.ChickEtherealStore.methods;
  //   await getTransactionInfo(productId).call().then(res => {
  //     console.log(productId,typeof productId);
  //     return res;
  //     let content = ipfs.cat(res[4]);
  //     content.next().then(res => $("#product-desc").append("<div>" + this.fun.Utf8ArrayToStr(res.value) + "</div>"));
  //     $("#product-image").append("<img src='http://localhost:9001/ipfs/" + res[3] + "' width='250px' />");
  //     $("#product-price").html(res[7] + "ETH");
  //     $("#product-name").html(res[1]);
  //     $("#product-auction-end").html(this.fun.displayEndHours(res[6]));
  //     $("#revealing, #bidding, #finalize-auction, #escrow-info").hide();
  //     $("#product-id").val(res[0]);
  //     let currentTime = Math.round(new Date() / 1000);

  //     if (res[8] == 1) {
  //       $("#escrow-info").show();
  //       this.highestBidder(productId);
  //       this.escrowData(productId);
  //     } else if (res[8] == 2) {
  //       $("#product-status").html("Product was not sold");
  //     } else if (currentTime < res[6]) {
  //       $("#bidding").show();
  //     } else if (currentTime - (200) < res[6]) {
  //       $("#revealing").show();
  //     } else {
  //       $("#finalize-auction").show();
  //     }

  //   })
  // },

  // 出价
  bidProduct: async function (productId, sealedBid, sendAmount) {
    const { bid } = this.ChickEtherealStore.methods;
    await bid(productId, sealedBid).send({ value: this.web3.utils.toWei(sendAmount, 'ether'), from: this.account,
                                        gasPrice: Web3.utils.toWei('10', 'gwei')}).then(res => {
      console.log("Your bid has been successfully submitted!");
      console.log(res);
    })
  },

  // 揭示报价
  revealProduct: async function (productId, amount, secretText) {
    const { revealBid } = this.ChickEtherealStore.methods;
    let amounts = this.web3.utils.toWei(amount, 'ether');
    await revealBid(productId, amounts, secretText).send({ from: this.account,
                                                        gasPrice: Web3.utils.toWei('10', 'gwei')}).then(res => {
      console.log("Your bid has been successfully revealed!");
      console.log(res);
    })
  },

  // 托管
  finalizeProduct: async function (productId) {
    console.log(productId);
    const { finalizeAuction } = this.ChickEtherealStore.methods;
    await finalizeAuction(productId).send({ from: this.account,
                                        gasPrice: Web3.utils.toWei('10', 'gwei')}).then(res => {

     alert("The auction has been finalized and winner declared.");
      console.log(res);
      location.reload();
    }).catch(err => {
      console.log(err);
      alert("The auction can not be finalized by the buyer or seller, only a third party aribiter can finalize it");
    })
  },

  // 最终竞拍人
  highestBidder: async function (productId) {
    const { highestBidderInfo } = this.ChickEtherealStore.methods;
    await highestBidderInfo(productId).call().then(res => {
      if (res[2].toLocaleString() == '0') {
        alert("Auction has ended. No bids were revealed");
      } else {
        alert("Auction has ended. Product sold to " + res[0] + " for Ξ:" + this.web3.utils.fromWei(res[2], 'ether') +
            "The money is in the escrow. Two of the three participants (Buyer, Seller and Arbiter) have to " +
            "either release the funds to seller or refund the money to the buyer");
      }
    })
  },

  // 托管合约信息
  escrowData: async function (productId) {
    const { getEscrowContractInfo } = this.ChickEtherealStore.methods;
    return await getEscrowContractInfo(productId).call().then(res => {
      console.log('Buyer: ' + res[0]);
      console.log('Seller: ' + res[1]);
      console.log('Arbiter: ' + res[2]);
      if (res[3] == true) {
        alert("Amount from the escrow has been released");
      } else {
        alert(res[4] + " of 3 participants have agreed to release funds");
        alert(res[5] + " of 3 participants have agreed to refund the buyer");
      }
      return res;
    })
  },

  // 释放给卖家
  releaseFunds: async function (productId) {
    const { releaseMoneyToSeller } = this.ChickEtherealStore.methods;
    await releaseMoneyToSeller(productId).send({ from: this.account, gasPrice: Web3.utils.toWei('10', 'gwei')}).then(res => {
      console.log(res);
      location.reload();
      return res;
    }).catch(err => { console.log(err) });
  },

  // 回退给买家
  refundFunds: async function (productId) {
    const { refundMoneyToBuyer } = this.ChickEtherealStore.methods;
    await refundMoneyToBuyer(productId).send({ from: this.account, gasPrice: Web3.utils.toWei('10', 'gwei')}).then(res => {
      console.log(res);
      location.reload();
      return res;
    }).catch(err => { console.log(err) });
  },

  // 获取密文
  keccakWithamountAndsecretText: async function (amount, secretText) {
    const { keccak } = this.ChickEtherealStore.methods;
    amount = this.web3.utils.toWei(amount, 'ether');
    var sealedBid = await keccak(amount, secretText).call();
    return sealedBid;
  },

  // 订阅商品添加
  subscribeProduct: async function () {
    var that = this;
    this.ChickEtherealStore.events.NewTransaction({
      fromBlock: 'latest'
    }, function (error, result) {
      // 结果包含 非索引参数 以及 主题 topic
      if (error) {
        console.log(error);
        return;
      }
      var product = result.returnValues;
      that.fun.saveProduct(product);
    });
  },
};

