<template>
  <div class="zj-cinema">
      <header-title :pageTitle="pageTitle"></header-title>
      <div class="cinema-nav">
          <div class="city-all">
              <i class="icon iconfont">全城</i>
              <i class="icon iconfont icon-icon-test16"></i>
          </div>
          <div class="brand">
              <i class="icon iconfont">品牌</i>
              <i class="icon iconfont icon-icon-test16"></i>
          </div>
          <div class="trait">
              <i class="icon iconfont">特色</i>
              <i class="icon iconfont icon-icon-test16"></i>
          </div>
      </div>
  </div>
</template>

<script>
import MovieListBox from '@/components/common/MovieListBox.vue'
import HeaderTitle from '@/components/header/HeaderTitle.vue'

export default {
    name: 'Cinema',
    data() {
        return {
            pageTitle: '喵喵影院'
        }
    },
    methos: {

    },
    components: {
        MovieListBox,
        HeaderTitle
    }
}
</script>

<style scoped lang="less">
    .zj-cinema {
        .cinema-nav {
            display: flex;
            margin-top: 49px;
            border-bottom: 1px solid #ccc;

            div {
                flex: 1;
                width:33%;
                height: 50px;
                line-height: 50px;
            }
        }
    }
</style>