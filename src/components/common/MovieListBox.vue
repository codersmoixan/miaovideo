<template>
  <div class="movie-box">
    <ul>
      <li class="item" v-for="item in movieList" :key="item.id">
        <div class="item-box">
          <div class="movie-left">
            <img :src="item.img | setWH('70.90')" alt :title="item.nm" />
          </div>
          <div class="movie-center">
            <h4 class="movie-name">{{item.nm}}</h4>
            <div>
              <span>观众评：</span>
            </div>
            <div>
              <span>主演:{{item.star}}</span>
            </div>
            <div>
              <span>{{item.showInfo}}</span>
            </div>
          </div>
          <div class="movie-right">
            <span>购票</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MovieListBox',
    props: {
        movieList: {
            type: Array,
            default() {
                return {}
            }
        }
    }
};
</script>

<style lang="less" scoped>
.movie-box {

      .item {
        padding: 5px 0;
        width: 100%;
        height: 115px;
        border-bottom: 1px solid #ccc;
        list-style: none;

        .item-box {
          display: flex;

          .movie-left {
            width: 80px;
            height: 100px;;
          }
          .movie-center {
            padding-left: 15px;
            padding-top: 10px;
            flex: 1;
            text-align: left;
            box-sizing: border-box;

            div {
              padding: 5px 0;
              font-size: 12px;
            }
          }
          .movie-right {
            position: relative;
            width: 50px;
            span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%, -50%, 0);
              display: block;
              width: 45px;
              height: 25px;
              background-color: coral;
              font-size: 13px;
              color: #fff;
              line-height: 25px;
              border-radius: 5px;
            }
          }
        }
      }
    }
</style>