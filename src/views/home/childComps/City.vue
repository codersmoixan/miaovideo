<template>
  <div class="zj-city clear-fix">
      
      <div class="city-list">
        <div class="hot-list">
          <div class="hot-title">热门城市</div>
          <div class="hot-city">
            <ul class="clear-fix">
              <li v-for="item in hotCityList" :key="item.index" class="city-item">{{item.nm}}</li>
            </ul>
          </div>
        </div>
        <div class="list-item">
          <div v-for="item in cityList" :key="item.index" class="item-box">
            <h2 class="letter-item">{{item.index}}</h2>
              <ul>
                <li class="city-item" v-for="cityItem in item.list" :key="cityItem.id">{{cityItem.nm}}</li>
              </ul>
          </div>
        </div>
      </div>
      <div class="city-letter">
        <ul>
          <li class="letter-list" v-for="item in cityList" :key="item.index">{{item.index}}</li>
        </ul>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'City',
  data() {
    return {
      cityList: [],
      hotCityList: []
    }
  },
  mounted() {
    this.axios.get('/api/cityList').then(res => {
      console.log(res.status);
      let list = []
      // 返回状态码 200 则表示请求成功
      if(res.status === 200) {
        list.push(...res.data.data.cities)
        this.sortCityList(list)
      }
    })
  },
  methods: {
    // 排序城市顺序
    // { index: 'B', list: [ { id: 1, nm: '北京', isHot: 1, py: 'beijing' } ] }
    sortCityList(cities) {
      let hotCityList = [], cityList = []
      for(let i = 0; i < cities.length; i++) {
        //1. 查找热门城市
        if(cities[i].isHot) {
          hotCityList.push(cities[i])
        }

        // console.log(cities[i])
        //2. 取出每个城市的首位英文字母
        var indexFirst = cities[i].py.charAt(0).toLocaleUpperCase()
        //3. 遍历存储排列城市数组里面是否有这个index 如果没有则添加这个index
        if(queryIndexCity(indexFirst)) {
          let cityObj = { id: cities[i].id, nm: cities[i].nm, isHot: cities[i].isHot, py: cities[i].py }
          cityList.push({ index: indexFirst, list: [cityObj] })
        }else {
          // 将已有的index城市添加到数组中
          for(let j = 0; j < cityList.length; j++) {
            if(cityList[j].index === indexFirst) {
              cityList[j].list.push(cities[i])
            }
          }
        }
      }
      
      // 数组重新排序
      cityList.sort((a, b) => {
        if(a.index > b.index) {
          return 1
        }else if(a.index < b.index) {
          return -1
        }else {
          return 0
        }
      })

      // 检测数组中是否有这个城市字母分类
      function queryIndexCity(firstIndex) {
        for(let i = 0; i < cityList.length; i++) {
          if(cityList[i].index === firstIndex) {
            return false
          }
        }
        return true
      }
      this.cityList = cityList
      this.hotCityList = hotCityList
      console.log(this.cityList)
    }
  }
}
</script>

<style scoped lang="less">
  .zj-city {
    margin-top: 99px;
    margin-bottom: 50px;
    display: flex;
    position: relative;
    background-color: #fff5f0;

    .city-list {
      padding-top: 15px; 
      width: 95%;
      flex: 1;

      .hot-list {
        .hot-title {
          height: 28px;
          font-size: 14px;
          line-height: 28px;
          background-color: #f0f0f0;
        }
        .hot-city {
          padding: 10px;

          .city-item {
            float: left;
            margin-top: 15px; 
            margin-left: 3%;
            width: 29%;
            height: 30px;
            background-color: #fff;
            border: 1px solid #e6e6e6;
            font-size: 14px;
            border-radius: 3px;
            line-height: 30px;
            list-style: none;
          }
        }
      }
      .list {
        height: 1300px;;
      }

      .list-item {
        padding-top: 15px;

        .item-box {
          padding: 0 0 15px 0;
        }

        .letter-item {
          padding-left: 20px;
          height: 28px;
          line-height: 28px;
          font-size: 14px;
          background-color: #f0f0f0;
          text-align: left;   
        }
        .city-item {
          padding: 10px 0 0 20px;
          text-align: left;
        }
      }
    }
    

    .city-letter {
      position: fixed;
      top: 89px;
      right: 0;
      padding-top: 20px;
      width: 5%;
      height: 100%;
      border-left: 1px solid #ccc;
      // box-sizing: border-box;
      background-color: #fff;

      ul {
        width: 100%;
      }
      .letter-list {
        padding: 2px 0;
        width: 100%;
        list-style: none;
        text-align: center;
      }
    }
  }
</style>