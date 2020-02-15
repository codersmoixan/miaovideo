<template>
  <div class="zj-tabbar">
      <div class="home-icon icon-item active" :style="activeStyle" :path="homePath" @click="clickTarget(homePath)">
          <i class="icon iconfont icon-dianying" ></i>
          <div>电影</div>
      </div>
      <div class="home-icon icon-item active">
          <i class="icon iconfont icon-yingyuan" @click="clickTarget(cinemaPath)"></i>
          <div>影院</div>
      </div>
      <div class="home-icon icon-item active">
          <i class="icon iconfont icon-nickname" @click="clickTarget(minePath)"></i>
          <div>我的</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {
            homePath: '/home/nowplaying',
            cinemaPath: '/cinema',
            minePath: '/mine',
            isActive: ''
        }
    },
    computed: {
        
        activeStyle() {
            return this.isActive ? {color: 'coral'} : {color: '#2c3e50'}
        }
    },
    mounted() {
        this.clickTarget(this.homePath)
    },
    methods: {
        clickTarget(path) {
            // 进入页面首页按钮呈现选中状态
            this.isActive = path === this.homePath 
            if(this.$route.path === path) {
                this.path = path
            }else {
                this.$router.push(path)
            }
             
        }
    }
}
</script>

<style lang="less" scoped>
    .zj-tabbar {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 49px;
        border-top: 1px solid #ccc;
        background-color: #fff;

        .icon-item {
            flex: 1;
            padding: 8px;
        }
        .active:hover {
            color: coral;
        }
    }
</style>>