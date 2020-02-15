<template>
  <div class="zj-now-playing">
      <movie-list-box :movieList="movieList"></movie-list-box>
  </div>
</template>

<script>
import MovieListBox from '@/components/common/MovieListBox.vue'

export default {
  name: 'NowPlaying',
  data() {
    return {
      cityId: 10,
      movieList: []
    }
  },
  created() {
    this._getNowPlaying(this.cityId)
  },
  methods: {
    // 1. 获取正在热映的电影列表
    _getNowPlaying(cityId) {
      this.axios.get(`/api/movieOnInfoList?cityId=${cityId}`).then(res => {
        
        if(res.status === 200) {
          this.movieList.push(...res.data.data.movieList)
          console.log(this.movieList)
        }
      })
    }
  },
  components: {
    MovieListBox
  }
}
</script>

<style scoped lang="less">
  .zj-now-playing {
    margin: 99px 15px 49px;
  }
</style>