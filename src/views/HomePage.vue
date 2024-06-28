<template>




  <div class="banner-area-two">
    <div class="container-fluid">
      <div class="row align-items-center">

        <div class="col-lg-6">
          <div class="banner-content-two">
            <h1>Collect Digital Assets From Our Creative & Rare Auction Community</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam etiam rhoncus aenean a
              iaculis aliquet accumsan sodales consectetur.
            </p>
            <div class="banner-btn">
              <a href="/about" class="default-btn border-radius-5">Explore More</a>
              <a href="/add-wallet" class="default-btn two border-radius-5">Connect your NFT Wallet</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6">

          <div class="banner-item-slider owl-theme">
            <Carousel :autoplay="4000" :wrapAround="true" :pauseAutoplayOnHover="true" >
              <Slide v-for="(item, index) in items" :key="index">
                <div class="carousel__item">
                  <div class="banner-item">
                    <img :src="item.image" alt="Images">
                    <div class="content">
                      <h3>{{ item.title }}</h3>
                      <div class="banner-item-content">
                        <div class="item-left">
                          <span>start bid</span>
                          <h3 class="item-left-eth">{{ item.bid }} ETH</h3>
                        </div>
                        <div class="item-right">
                          <h3 class="item-remaining">Remaining Time</h3>
                          <div class="timer-text">{{ item.remainingTime }}</div>
                        </div>
                      </div>
                      <span/>
                      <p style="margin-top: 5%"><a href="/auction" class="place-btn">Find Auction</a></p>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
          </div>

        </div>
      </div>
    </div>
    <div class="banner-shape">
      <div class="shape-in1">
        <img src="@/assets/images/home-two/home-two-shape1.png" alt="Item">
      </div>
      <div class="shape-in2">
        <img src="@/assets/images/home-two/home-two-shape2.png" alt="Item">
      </div>
    </div>
  </div>


  <div class="auctions-area-two pt-100 pb-70">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-6">
          <div class="section-title">
            <h2>Live Auctions</h2>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="auction-btn text-end">
            <a href="auction.html" class="default-btn border-radius-5">Explore More</a>
          </div>
        </div>
      </div>

      <Carousel :items-to-show="3" :autoplay="10000" :wrapAround="true" :pauseAutoplayOnHover="true">
        <Slide v-for="(good,index) in goods" :key="index">
          <div class="auction-card">
            <div class="auction-card-img">
              <a href="auction.html">
                <img :src="good.image" alt="Images">
              </a>
              <div class="auction-card-into">
                <h3>Remaining Time</h3>
                <div class="auction-timer">
                  <div class="auction-title" data-countdown="2025/10/10"></div>
                </div>
              </div>
            </div>
            <div class="content">
              <h3><a href="/auction">{{good.name}}</a></h3>
              <div class="auction-card-content">
                <div class="card-left" style="margin-left: 30%">
                  <span>Start Bid</span>
                  <h4>{{good.bid}} ETH</h4>
                </div>
                <div class="card-right">
                  <a href="/auction" class="place-btn">Place Bid</a>
                </div>
              </div>

            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>

    </div>
  </div>



  <div class="featured-area author-area-bg2 pt-4 pb-70">
    <div class="container">
      <div class="tab featured-tab-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-4">
            <div class="section-title">
              <h2>Featured Assets</h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-8">
            <ul class="tabs">
              <li>
                <a href="#">
                  All
                </a>
              </li>
              <li>
                <a href="#">
                  Art
                </a>
              </li>
              <li>
                <a href="#">
                  Virtual Worlds
                </a>
              </li>
              <li>
                <a href="#">
                  Collectibles
                </a>
              </li>
              <li>
                <a href="#">
                  Music
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="tab_content current active pt-45">
          <div class="tabs_item">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img1.jpg" alt="Images">
                    </a>
                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                    <div class="featured-item-clock" data-countdown="2021/09/09"></div>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Industrial Revolution</a></h3>
                    <div class="content-in">
                      <span>100 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img2.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                    <div class="featured-item-clock" data-countdown="2021/11/11"></div>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Love In The Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img3.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Become One With Nature</a></h3>
                    <div class="content-in">
                      <span>120 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img4.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                    <div class="featured-item-clock" data-countdown="2021/11/11"></div>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Twilight Fracture City</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img5.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Walking On Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img6.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Supper Nuemorphism</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img7.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                    <div class="featured-item-clock" data-countdown="2021/11/11"></div>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Dark-light Angel</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img8.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Exe Dream Hight</a></h3>
                    <div class="content-in">
                      <span>160 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tabs_item">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img5.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Walking On Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img6.jpg" alt="Images">
                    </a>
                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Supper Nuemorphism</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img7.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Dark-light Angel</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img8.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Exe Dream Hight</a></h3>
                    <div class="content-in">
                      <span>160 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img1.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Industrial Revolution</a></h3>
                    <div class="content-in">
                      <span>100 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img2.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Love In The Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img3.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Become One With Nature</a></h3>
                    <div class="content-in">
                      <span>120 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img4.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Twilight Fracture City</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tabs_item">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img3.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Become One With Nature</a></h3>
                    <div class="content-in">
                      <span>120 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img4.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Twilight Fracture City</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img5.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Walking On Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img6.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Supper Nuemorphism</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img7.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Dark-light Angel</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img8.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Exe Dream Hight</a></h3>
                    <div class="content-in">
                      <span>160 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img1.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Industrial Revolution</a></h3>
                    <div class="content-in">
                      <span>100 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img2.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Love In The Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tabs_item current">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img5.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Walking On Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img6.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Supper Nuemorphism</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img7.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Dark-light Angel</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img8.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Exe Dream Hight</a></h3>
                    <div class="content-in">
                      <span>160 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img1.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Industrial Revolution</a></h3>
                    <div class="content-in">
                      <span>100 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img2.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Love In The Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img3.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Become One With Nature</a></h3>
                    <div class="content-in">
                      <span>120 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img4.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Twilight Fracture City</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tabs_item">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img3.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Become One With Nature</a></h3>
                    <div class="content-in">
                      <span>120 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img4.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Twilight Fracture City</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img5.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Walking On Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img6.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Supper Nuemorphism</a></h3>
                    <div class="content-in">
                      <span>130 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img7.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Dark-light Angel</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img8.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Exe Dream Hight</a></h3>
                    <div class="content-in">
                      <span>160 ETH 12/14</span>
                      <h4>Bid 90 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img1.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Industrial Revolution</a></h3>
                    <div class="content-in">
                      <span>100 ETH 12/14</span>
                      <h4>Bid 80 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="featured-item">
                  <div class="featured-item-img">
                    <a href="item-details.html">
                      <img src="@/assets/images/featured/featured-img2.jpg" alt="Images">
                    </a>

                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                  </div>
                  <div class="content">
                    <h3><a href="author-profile.html">Love In The Air</a></h3>
                    <div class="content-in">
                      <span>110 ETH 12/14</span>
                      <h4>Bid 70 ETH </h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="create-area pt-100 pb-70 ">
    <div class="container">
      <div class="section-title text-center">
        <h2>Create And Sell Your Digital Assets</h2>
      </div>
      <div class="row align-items-center pt-45">
        <div class="col-lg-6">
          <div class="create-img">
            <img src="@/assets/images/create/create-img.png" alt="Images">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="create-card-right pl-20">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-6">
                <div class="create-card">
                  <img src="@/assets/images/create/create-icon1.png" alt="Images">
                  <h3><a href="/add-wallet">Set Up Your Wallet</a></h3>
                  <p>Connect wallet by clicking the wallet icon in the top right corner. Learn about the
                    wallets  we support.</p>
                </div>
              </div>
              <div class="col-lg-6 col-6">
                <div class="create-card">
                  <img src="@/assets/images/create/create-icon3.png" alt="Images">
                  <h3><a href="/help">Gain digital ownership</a></h3>
                  <p>Upload your work on a fully decentralized platform and get the ownership code that
                    belongs to your digital assets alone in the blockchain</p>
                </div>
              </div>
              <div class="col-lg-6 col-6">
                <div class="create-card">
                  <img src="@/assets/images/create/create-icon2.png" alt="Images">
                  <h3><a href="/create"> Upload Your Digital Asset</a></h3>
                  <p>Upload your work (image, video, audio, or 3D art), add a title and description, and
                    customize your Digital Assets Auction</p>
                </div>
              </div>
              <div class="col-lg-6 col-6">
                <div class="create-card">
                  <img src="@/assets/images/create/create-icon4.png" alt="Images">
                  <h3><a href="/auction">List Them For Sale</a></h3>
                  <p>Choose between auctions, fixed-price listings, and declining-price listings. You
                    choose how you want to sell your NFTs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="blog-area pt-100 pb-70">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8">
          <div class="section-title">
            <h2>From Our Blog</h2>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="blog-btn text-end">
            <a href="/" class="default-btn border-radius-5">Explore More</a>
          </div>
        </div>
      </div>
      <div class="row justify-content-center pt-45">
        <div class="col-lg-4 col-md-6">
          <div class="blog-card">
            <div class="blog-img">
              <a href="/">
                <img src="@/assets/images/blog/blog-img1.jpg" alt="Images">
              </a>
              <div class="blog-user">
                <a href="" class="blog-user-option">
                  <img src="@/assets/images/featured/featured-user2.jpg" alt="Images">
                  <span>Created by @Adison</span>
                </a>
              </div>
              <a href="" class="blog-tag-btn">Artwork</a>
            </div>
            <div class="content">
              <h3><a href="">Announcing Our $100m Raise, Led By A16z</a></h3>
              <ul>
                <li>June 5, 2021</li>
                <li>No Comments</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="blog-card">
            <div class="blog-img">
              <a href="/">
                <img src="@/assets/images/blog/blog-img2.jpg" alt="Images">
              </a>
              <div class="blog-user">
                <a href="/" class="blog-user-option">
                  <img src="@/assets/images/featured/featured-user2.jpg" alt="Images">
                  <span>Created by @Evelyn</span>
                </a>
              </div>
              <a href="/" class="blog-tag-btn">Digital</a>
            </div>
            <div class="content">
              <h3><a href="/">Edition365: A Portrait Of The Year That Changed Everything</a>
              </h3>
              <ul>
                <li>June 7, 2021</li>
                <li>02 Comments</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="blog-card">
            <div class="blog-img">
              <a href="/">
                <img src="@/assets/images/blog/blog-img3.jpg" alt="Images">
              </a>
              <div class="blog-user">
                <a href="/" class="blog-user-option">
                  <img src="@/assets/images/featured/featured-user3.jpg" alt="Images">
                  <span>Created by @Julian</span>
                </a>
              </div>
              <a href="/" class="blog-tag-btn">Creative</a>
            </div>
            <div class="content">
              <h3><a href="/">Christie’s Ended Up Selling For $69 Million In Nft
                Marketplace</a></h3>
              <ul>
                <li>June 9, 2021</li>
                <li>03 Comments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="testimonial-area ptb-100">
    <div class="container">
      <div class="testimonial-slider owl-theme">
        <Carousel :autoplay="4000" :wrapAround="true" :pauseAutoplayOnHover="true">
          <Slide v-for="(opinion, index) in opinions" :key="index">
            <div class="testimonial-item" >
              <div class="testimonial-img">
                <img :src="opinion.image" alt="Images">
              </div>

              <div class="testimonial-content">
                <img src="@/assets/images/testimonial/testimonial-line.png" alt="image">
                <p style="text-align: center; word-wrap: break-word; white-space: normal;" v-html="opinion.motto"></p>
                <ul>
                  <li>{{opinion.name}}</li>
                  <li>{{ opinion.position }}</li>
                </ul>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: [
        {
          title: 'Walking On Air',
          bid: '24.0',
          countdown: '2024/04/02',
          remainingTime: '',
          image: require('@/assets/images/home-two/home-two-img1.jpg')
        },
        {
          title: 'Flowers In Concrete',
          bid: '15.00',
          countdown: '2024/04/02',
          remainingTime: '',
          image: require('@/assets/images/home-two/home-two-img2.jpg')
        },
        {
          title: 'Les Immortels',
          bid: '3.0',
          countdown: '2024/02/02',
          remainingTime: '',
          image: require('@/assets/images/home-two/home-two-img3.jpg')
        },
      ],
      opinions:[
        {
          motto:'海纳百川，有容乃大；壁立千仞，无欲则刚<br>' +
              'The sea accepts all rivers, that’s why it is so vast; ' +
              'A wall stands thousand feet high because it is desireless, that’s why it is so strong.',
          name: 'Docter Ding',
          position:'founder',
          image: require('@/assets/images/testimonial/testimonial-img.png')
        },
        {
          motto:'长风破浪会有时，直挂云帆济沧海 <br> ' +
              'Sailing through the waves with the long wind, <br>' +
              'someday I will set my cloud-piercing sail to cross the vast sea.',
          name: 'Master Lee',
          position:'Initial CEO',
          image: require('@/assets/images/testimonial/testimonial-img2.png')
        },
        {
          motto:'Art is the only way to run away without leaving home. It allows us to explore the deepest parts of our soul and express emotions that words cannot capture.',
          name: 'Miao',
          position:'co-founder',
          image: require('@/assets/images/testimonial/testimonial-img3.png')
        },
      ],
      goods:[
        {
          countdown:2024/7/10,
          name:'To Infinity And Beyond',
          bid: 15.00,
          image: require('@/assets/images/auctions/auctions-img5.jpg')
        },
        {
          countdown:2024/7/10,
          name:'Walking On Air',
          bid: 16.00,
          image: require('@/assets/images/auctions/auctions-img6.jpg')
        },
        {
          countdown:2024/7/10,
          name:'Industrial Revolution',
          bid: 11.00,
          image: require('@/assets/images/auctions/auctions-img7.jpg')
        },
        {
          countdown:2024/7/10,
          name:'Become On Nature',
          bid: 13.00,
          image: require('@/assets/images/auctions/auctions-img8.jpg')
        },
      ]
    }
  },
  mounted() {
    this.initializeCountdown();
  },
  methods: {
    initializeCountdown() {
      this.items.forEach(item => {
        const countdownDate = new Date(item.countdown).getTime();
        const updateCountdown = () => {
          const now = new Date().getTime();
          const distance = countdownDate - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          item.remainingTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

          if (distance < 0) {
            item.remainingTime = "Auction Closed";
            clearInterval(item.interval);
          }
        };

        updateCountdown();
        item.interval = setInterval(updateCountdown, 1000);
      });
    }
  },
  beforeUnmount() {
    this.items.forEach(item => {
      if (item.interval) {
        clearInterval(item.interval);
      }
    });

  }
}
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  /*background-color: var(--vc-clr-primary);*/
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}


</style>