/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import $ from 'jquery';
// const Web3 = require("web3");
// import { ethers } from 'ethers';

import Web3 from 'web3';
const ethers = require('ethers');
import { AppOfWeb3 } from './ofweb3.js';
import { AppOfEthers } from './ofetherjs.js';
import { Appfunction } from './function.js';
import {providers} from "web3";


$(document).ready(function () {
    var reader;
    // 照片选择
    $("#product-image").change(function (event) {
        const file = event.target.files[0];
        reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
    });

    // 添加商品表单提交
    $("#add-item-to-store").submit(function (event) {
        const req = $("#add-item-to-store").serialize();
        let params = JSON.parse('{"' + req.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        let decodedParams = {};
        Object.keys(params).forEach(function (v) {
            decodedParams[v] = decodeURIComponent(decodeURI(params[v]));
        });
        AppOfWeb3.saveProduct(reader, decodedParams);
        event.preventDefault();
    });

    // 添加商品表单提交
    $("#add-item").submit(function (event) {
        const req = $("#add-item").serialize();
        let params = JSON.parse('{"' + req.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        let decodedParams = {};
        Object.keys(params).forEach(function (v) {
            decodedParams[v] = decodeURIComponent(decodeURI(params[v]));
        });
        AppOfWeb3.saveToProduct(reader, decodedParams);
        event.preventDefault();
        console.log("success!");
    });

`    $("#select-own").submit(function (event) {
        const userAssets = AppOfWeb3.selectOwnAsset();
        Appfunction.renderAssets("product-own-list", userAssets);
        event.preventDefault();
    });`

    // 出价
    $("#bidding").submit(function (event) {
        $("#msg").hide();
        let amount = ($("#bid-amount").val()).toString();
        let sendAmount = ($("#bid-send-amount").val()).toString();
        let secretText = ($("#secret-text").val()).toString();
        let productId = $("#product-id").val();
        let sealedBid = AppOfWeb3.keccakWithamountAndsecretText(amount, secretText);
        sealedBid.then(sealedBid => {
            AppOfWeb3.bidProduct(productId, sealedBid, sendAmount);
        });
        event.preventDefault();
    });

    // 揭示报价
    $("#revealing").submit(function (event) {
        $("#msg").hide();
        let amount = ($("#actual-amount").val()).toString();
        let secretText = ($("#reveal-secret-text").val()).toString();
        let productId = $("#product-id").val();
        AppOfWeb3.revealProduct(productId, amount, secretText);
        event.preventDefault();
    });

    // 托管
    $("#finalize-auction").submit(function (event) {
        $("#msg").hide();
        let productId = $("#product-id").val();
        AppOfWeb3.finalizeProduct(productId);
        event.preventDefault();
    });

    // 释放给卖家
    $("#release-funds").click(function () {
        let productId = new URLSearchParams(window.location.search).get('product-id');
        console.log("Your transaction has been submitted. Please wait for few seconds for the confirmation").show();
        AppOfWeb3.releaseFunds(productId);
    });

    // 回退给买家
    $("#refund-funds").click(function () {
        let productId = new URLSearchParams(window.location.search).get('product-id');
        console.log("Your transaction has been submitted. Please wait for few seconds for the confirmation").show();
        AppOfWeb3.refundFunds(productId);
        alert("refund the funds!");
    });
});