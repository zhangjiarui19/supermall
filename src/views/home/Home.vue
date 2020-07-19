<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners.list"></home-swiper>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./ChildComps/HomeSwiper";
  import {getHomeMultidata} from "network/home";
  // import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "Home",
    components: {HomeSwiper, NavBar,},
    data() {
      return {
        banners: [],
        recommend: []
      }
    },
    // 生命周期函数
    created() {
      // 发送网络请求
      getHomeMultidata().then(res => {
        // 垃圾回收机制
        this.banners = res.data.banner;
        this.recommend = res.data.recommend
      })
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: var(--color-tint);
    color: white;
  }
</style>