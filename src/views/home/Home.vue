<template>
  <div class="zj-home">
    <header-title :pageTitle="pageTitle"></header-title>
    <div class="home-nav">
      <div class="nav-item" @click="targetCity">
        <i class="icon iconfont">地区</i>
        <i class="icon iconfont icon-icon-test16"></i>
      </div>
      <div :class="isActive? 'nav-item active' : 'nav-item'" @click="targetNowPlay">
        <h3>正在热映</h3>
      </div>
      <div class="nav-item" @click="targetComingSoon">
        <h3>即将上映</h3>
      </div>
      <div class="nav-item" @click="targetSearch">
        <i class="icon iconfont icon-search zj-icon-search"></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTitle from '@/components/header/HeaderTitle.vue'

export default {
  name: 'Home',
  data() {
    return {
      pageTitle: '喵喵电影',
      isActive: true
    }
  },
  components: {
    HeaderTitle
  },
  computed: {
    
  },
  methods: {
    targetPath(path) {
      if(this.$route.path === path) return
      this.$router.push(path)
    },
    targetCity() {
      this.isActive = false
      this.targetPath('/home/city')
    },
    targetNowPlay() {
      this.isActive = true
      this.targetPath('/home/nowplaying')
    },
    targetComingSoon() {
      this.isActive = false
      this.targetPath('/home/comingsoon')
    },
    targetSearch() {
      this.isActive = false
      this.targetPath('/home/search')
    }
  }
}
</script>
<style lang="less" scoped>
  .zj-home {
    .home-nav {
      position: fixed;
      top: 49px;
      display: flex;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ccc;
      z-index: 99;
      background-color: #fff;

      .nav-item {
        flex: 1;
        margin: 0 5px;
        box-sizing: border-box;
        line-height: 50px;
        color: #555;
      }
      .nav-item.active {
        color: coral;
        border-bottom: 2px solid coral;
      }
      .nav-item:hover {
        color: coral;
        border-bottom: 2px solid coral; 
      }

      .zj-icon-search {
        font-size: 30px;
        color: coral;
      }
    }
  }
</style>
