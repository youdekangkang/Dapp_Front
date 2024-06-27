<template>
  <div class="navbar-area">
    <div class="mobile-responsive-nav">
      <div class="container-fluid">
        <div class="mobile-responsive-menu">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/images/logo-2.png" alt="logo">
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="desktop-nav nav-area">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light">
          <router-link class="navbar-brand" to="/">
            <img src="@/assets/images/logo-2.png" alt="Logo">
          </router-link>
          <div class="nav-widget-form nav-widget-form-bg">
            <form class="search-form">
              <input type="search" class="form-control" placeholder="Search items, Creators">
              <button type="submit">
                <i class="ri-search-line"></i>
              </button>
            </form>
          </div>
          <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="item in menuItems" :key="item.name">
                <router-link :to="item.path" class="nav-link" :class="{ 'active': item.active }">
                  {{ item.name }}
                  <i v-if="item.children" class="ri-arrow-down-s-line"></i>
                </router-link>
                <ul v-if="item.children" class="dropdown-menu">
                  <li class="nav-item" v-for="child in item.children" :key="child.name">
                    <router-link :to="child.path" class="nav-link">{{ child.name }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="others-options">
              <ul class="optional-item-list">
                <li><a href="/create">Create</a></li>
                <li><a href="/add-wallet" class="active">Connect Wallet</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      menuItems: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Live Auction',
          path: '/auction',
        },
        {
          name: 'Bid Reveal',
          path: '/reveal',
        },
        {
          name: 'Finalization ',
          path: '/final',
        },
        {
          name: 'Contact Us',
          path: '/contact',
        },
        {
          name: 'Help Center',
          path: '/help',
        },
      ]
    };
  }
};
</script>

<style scoped>
/* 样式块：导航栏按钮 */
.navbar-nav .nav-item .nav-link {
  color: #000; /* 默认字体颜色 */
  transition: color 0.3s ease; /* 平滑过渡效果 */
}

/* 鼠标悬停时字体颜色变更 */
.navbar-nav .nav-item .nav-link:hover {
  color: #EF1D3C; /* 鼠标悬停时的字体颜色 */
}
</style>
