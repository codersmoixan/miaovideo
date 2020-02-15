<template>
  <div class="zj-comming-soon">
      <h2>即将上映</h2>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  data() {
    return {
      cityId: 59,
      ComingSoonList: []
    }
  },
  created() {
    this._getComingSoonList(this.cityId)
  },
  methods: {
    // 1. 获取即将上映的电影列表
    _getComingSoonList(cityId) {
      this.axios.get(`/api/movieComingList?cityId=${cityId}`).then(res => {
        if(res.status === 200) {
          // console.log(res)
        }
      })
    }
  }
}
</script>

<style>

</style>