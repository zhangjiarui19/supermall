<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners.list"></home-swiper>
    <recommend-view :recommends="recommend.list"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./ChildComps/HomeSwiper";
  import {getHomeMultidata, getHomeGoods} from "network/home";
  import RecommendView from "./ChildComps/RecommendView";
  import FeatureView from "./ChildComps/FeatureView";
  import TabControl from "../../components/content/tabControl/tabControl";
  // import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "Home",
    components: {TabControl, FeatureView, RecommendView, HomeSwiper, NavBar,},
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': {page:0, list: []},
          'new': {page:0, list: []},
          'sell': {page:0, list: []},
        },
      }
    },
    // 生命周期函数
    created() {
      // 发送网络请求
      this.getHomeMultidata()
      // 首页商品信息
      this.getHomeGoods()
    },
    methods: {
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // 垃圾回收机制
          this.banners = res.data.banner;
          this.recommend = res.data.recommend
        })
      },
      getHomeGoods(type, num) {
        getHomeGoods(type, num).then()
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .navbar {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    /* 粘性定位 */
    position: sticky;
    top: 44px;
  }
</style>