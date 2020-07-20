<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-item" :class="{active: index===currentIndex}" @click="currentIndex=index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    line-height: 40px;
    height: 40px;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
  }
  .tab-control .tab-item{
    flex: auto;
  }
  .tab-item span{
    padding: 5px;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>