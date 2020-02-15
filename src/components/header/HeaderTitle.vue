<template>
  <div class="zj-header">
      <h2 class="title">{{pageTitle}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    pageTitle: {
      type: String,
      default() {
        return '喵喵电影'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .zj-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 49px;
    background-color: coral;
    z-index: 99;

    .title {
      font-weight: 400;
      color: #fff;
      line-height: 49px;
      font-size: 18px;
    }
  }
</style>