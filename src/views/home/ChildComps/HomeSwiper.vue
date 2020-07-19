<template>
  <div>
    <Swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  // import Test from "../../../components/common/swiper/Test";

  export default {
    name: "HomeSwiper",
    components: {/*Test*/ Swiper, SwiperItem},
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      },
    }
  }
</script>

<style scoped>

</style>