/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// import $ from 'jquery';
import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';

// const { create } = require('ipfs-http-client');
const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });

class Fun {
  constructor() {

    // 加载页面显示列表
    this.renderStore = function renderStore() {

      const categories = ["Art", "Books", "Cameras", "Cell Phones & Accessories", "Clothing", "Computers & Tablets", "Gift Cards & Coupons", "Musical Instruments & Gear", "Pet Supplies", "Pottery & Glass", "Sporting Goods", "Tickets", "Toys & Hobbies", "Video Games"];
      this.renderProducts("product-list", {});

      this.renderProducts("product-reveal-list", { productStatus: "reveal" });
      this.renderProducts("product-finalize-list", { productStatus: "finalize" });
    };

    // 
    this.renderProducts = function renderProducts(div, filter) {
      $.ajax({
        type: 'GET',
        url: '/product/allProduct',
        contentType: 'application/json;charset=UTF-8',
        data: filter,
        success: function (data) {
          if (data.length == 0) {
            $("#" + div).html('No products found');
          }
          while (data.length > 0) {
            let chunks = data.splice(0, 10);
            let row = $("<div/>");
            row.addClass("row");
            chunks.forEach(value => {
              let node = buildProduct(value);
              row.append(node);
            });
            $("#" + div).append(row);
          }
        }
      });
    };

    this.renderAssets = function renderAssets(div, userAssets) {

          if (userAssets.length == 0) {
            $("#" + div).html('No products found');
          }
          while (userAssets.length > 0) {
            let chunks = data.splice(0, 10);
            let row = $("<div/>");
            row.addClass("row");
            chunks.forEach(userAssets => {
              let node = buildAsset(userAssets);
              row.append(node);
            });
            $("#" + div).append(row);
          }

    };

    // 添加商品图片到IPFS
    this.saveImageOnIpfs = function saveImageOnIpfs(reader) {
      return new Promise(function (resolve, reject) {
        const buffer = Buffer.from(reader);
        ipfs.add(buffer)
          .then((response) => {
            console.log(response);
            resolve(response.path);
          }).catch((err) => {
            console.error(err);
            reject(err);
          });
      });
    };

    // 添加商品描述到IPFS
    this.saveTextBlobOnIpfs = function saveTextBlobOnIpfs(blob) {
      return new Promise(function (resolve, reject) {
        const descBuffer = Buffer.from(blob, 'utf-8');
        ipfs.add(descBuffer)
          .then((response) => {
            console.log(response);
            resolve(response.path);
          }).catch((err) => {
            console.error(err);
            reject(err);
          });
      });
    };

    // 显示结束时间
    this.displayEndHours = function displayEndHours(seconds) {
      let current_time = Math.round(new Date() / 1000);
      let remaining_seconds = seconds - current_time;
      if (remaining_seconds <= 0) {
        return "Auction has ended";
      }

      let days = Math.trunc(remaining_seconds / (24 * 60 * 60));
      remaining_seconds -= days * 24 * 60 * 60;

      let hours = Math.trunc(remaining_seconds / (60 * 60));
      remaining_seconds -= hours * 60 * 60;

      let minutes = Math.trunc(remaining_seconds / 60);
      remaining_seconds -= minutes * 60;

      if (days > 0) {
        return "Auction ends in " + days + " days, " + hours + ", hours, " + minutes + " minutes";
      } else if (hours > 0) {
        return "Auction ends in " + hours + " hours, " + minutes + " minutes ";
      } else if (minutes > 0) {
        return "Auction ends in " + minutes + " minutes ";
      } else {
        return "Auction ends in " + remaining_seconds + " seconds";
      }
    };

    // 添加商品信息到数据库
    this.saveProduct = function saveProduct(product) {
      let data = {
        blockchainId: product._productId, name: product._name, category: product._category,
        ipfsImageHash: product._imageId, ipfsDescHash: product._descLink, auctionStartTime: product._auctionStartTime,
        auctionEndTime: product._auctionEndTime, price: product._startPrice, productStatus: 0
      };
      let product_ = JSON.stringify(data);
      $.ajax({
        type: 'POST',
        url: '/product/saveProduct',
        contentType: 'application/json;charset=UTF-8',
        data: product_
      });
    };

    // this.saveProductNew = function saveProductNew(product, descId, start, end) {
    //   var data = {
    //     name: product['product_name'],
    //     category: product['product_category'],
    //     ipfsImageHash: product['asset-hash'],
    //     ipfsDescHash: descId,
    //     auctionStartTime: start,
    //     auctionEndTime: end,
    //     price: product['product_startPrice'],
    //     productStatus: 0
    //   };
    //   var product_ = JSON.stringify(data);
    //   $.ajax({
    //     type: 'POST',
    //     url: '/product/saveProduct',
    //     contentType: 'application/json;charset=UTF-8',
    //     data: product_  // 使用转换后的 JSON 字符串
    //   });
    // };


/*    // 添加商品信息到数据库
    this.saveToProduct = function saveToProduct(product) {
      var data = {
        blockchainId: product._productId, name: product._name,
        ipfsImageHash: product._imageLink, ipfsDescHash: product._descLink,
        productStatus: 0
      };
      var product_ = JSON.stringify(data);
      $.ajax({
        type: 'POST',
        url: '/product/saveToProduct',
        contentType: 'application/json;charset=UTF-8',
        data: product_
      });
    };*/

    // Utf8Array转换Str
    this.Utf8ArrayToStr = function Utf8ArrayToStr(array) {
      var out, i, len, c;
      var char2, char3;
      out = "";
      len = array.length;
      i = 0;
      while (i < len) {
        c = array[i++];
        switch (c >> 4) {
          case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
          case 12: case 13:
            // 110x xxxx 10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
          case 14:
            // 1110 xxxx 10xx xxxx 10xx xxxx
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(((c & 0x0F) << 12) |
              ((char2 & 0x3F) << 6) |
              ((char3 & 0x3F) << 0));
            break;
        }
      }
      return out;
    };
  }
}

export default Fun;

// 商品列表样式
function buildProduct(product) {
  let node = $("<div/>");
  node.addClass("col-sm-3 text-center col-margin-bottom-1");
  // node.append("<img src='https://ipfs.io/ipfs/" + product[3] + "' width='150px' />");
  node.append("<a href='product.html?product-id=" + product.blockchainId + "'><img src='http://localhost:9001/ipfs/" + product.ipfsImageHash + "' width='150px' height='100px'/></a>");
  node.append("<div>" + product.productName + "</div>");
  node.append("<div>" + product.category + "</div>");
  node.append("<div>" + new Date(product.auctionStartTime * 1000).toLocaleString() + "</div>");
  node.append("<div>Ether " + product.price + "</div>");
  return node;
}

function buildAsset(userAssets) {
  let node = $("<div/>");
  node.addClass("col-sm-3 text-center col-margin-bottom-1");
  node.append("<a><img src='http://localhost:9001/ipfs/" + userAssets + "' width='150px' height='100px'/></a>");
  node.append("<div>" + assets[userAssets].name + "</div>");
  node.append("<div>" + new Date(assets[userAssets].creationTime * 1000).toLocaleString() + "</div>");
  return node;
}

