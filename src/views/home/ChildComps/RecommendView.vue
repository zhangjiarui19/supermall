<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend_item">
      <a href="javascript:void(0)">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    font-size: 12px;
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend .recommend_item{
    flex: auto;
    /*flex-shrink: 1;*/
  }
  .recommend_item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>