<template>
    <div class="zj-search">
        <div class="search-box">
            <input type="text" class="searchInp" 
            placeholder="输入搜索的影片" v-model="searchData">
        </div>
        <movie-list-box :movieList="searchMovieList"></movie-list-box>
        <!-- <ul>
            <li v-for="item in searchMovieList" :key="item.id">
                <img :src="item.img | setWH('80.90')" alt="">
                {{item.img}}
            </li>
        </ul> -->
        <div class="title">
            <h4>电影/电视剧/综艺</h4>
        </div>
    </div>
</template>
<script>
import {debounce} from '@/common/index.js'

import MovieListBox from '@/components/common/MovieListBox.vue'

export default {
    name: 'Search',
    data() {
        return {
            searchMovieList: [],
            searchData: '',
            cityId: 10,
            timer: null
        }
    },
    watch: {
        searchData(newVal) {
            this.searchData = newVal
            this.fnThrottle(this.searchMovie, 1000)
        }
    },
    methods: {
        searchMovie() {
            let _this = this
            // 请求搜索数据
            this.axios.get(`/api/searchList?cityId=${this.cityId}&kw=${this.searchData}`).then(res => {
                if(res.status === 200) {
                    this.searchMovieList.push(...res.data.data.movies.list)
                    this.searchMovieList.push(...res.data.data.cinemas.list)
                    console.log(this.searchMovieList)
                }
            })
        },
        // 节流函数
        fnThrottle(fn, awaitTime) {
            if(!this.timer) {
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    fn()
                    this.timer = null
                }, awaitTime);
            }
        }
    },
    components: {
        MovieListBox
    }
}
</script>
<style lang="less" scoped>
    .zj-search {
        margin-top: 99px;
        margin-bottom: 49px;

        .search-box {
            padding: 10px 10px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #e5e5e5;
            .searchInp {
                padding-left: 15px;
                width: 100%;
                height: 35px;
                border: 1px solid #ccc;
                outline: none;
                border-radius: 5px;
            }
            input::-webkit-input-placeholder {
                /* 修改字体颜色 */
                
                /* 修改字号，默认继承input */
                font-size: 14px;
                /* 设置背景色 */
                
            }
        }

        .title {
            padding-left: 15px;
            height: 45px;
            line-height: 45px;
            text-align: left;
            color:#999;
            border-bottom: 1px solid #e6e6e6;
        }
    }
</style>