<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners.list">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home";
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";

  export default {
    name: "Home",
    components: {Swiper, NavBar, SwiperItem},
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