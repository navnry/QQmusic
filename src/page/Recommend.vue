<template>
  <div class="recommend">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in recommendData.slider">
            <img :src="item.picUrl" alt="">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </div>
    <div class="list">
      <div class="main">
        <h2>电台</h2>
        <div class="list-container">
          <div class="list-item" v-for="item in recommendData.radioList">
            <div class="pic">
              <img :src="item.picUrl" alt="">
              <span class="icon_player"><i class="iconfont iconbofang"></i></span>
            </div>
            <div class="info">
              <p>{{item.Ftitle}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="main">
        <h2>热门歌单</h2>
        <div class="list-container">
          <div class="list-item" v-for="item in recommendData.songList"
               @click="goTo('recommend/recommendDetail',item.id)">
            <div class="pic">
              <img :src="item.picUrl" alt="">
              <span class="listen_count"><i class="iconfont icontingyinfuxi"></i> {{((item.accessnum)/10000).toFixed(1)+'万'}}</span>
              <span class="icon_player"><i class="iconfont iconbofang"></i></span>
            </div>
            <div class="info">
              <p>{{item.songListDesc}}</p>
              <h3>{{item.songListAuthor}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getRecommendData} from '@/api/getRecommendData.js'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'Recommend',
    data() {
      return {
        recommendData: {},
      }
    },
    watch: {},
    computed: {},
    mounted() {
      this._getRecommendData();
    },
    methods: {
      _getRecommendData() {
        getRecommendData().then((res) => {
          this.recommendData = res.data
          console.log(res.data);
        })
      },
      goTo(place, id) {
        let url = `/${place}/${id}`
        this.$router.push(url)
      }
    },
    updated() {
      new Swiper(".banner .swiper-container", {
        speed: 800,
        pagination: {
          el: '.banner .swiper-pagination',
        },
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner {
    margin-bottom: .28rem;
  }

  .banner .swiper-slide {
    font-size: 0;
  }

  .banner .swiper-container .swiper-pagination .swiper-pagination-bullet {
    width: .14rem;
    height: .14rem;
    margin: 0 .08rem;
  }

  .list h2 {
    margin-bottom: .22rem;
    font-size: .32rem;
    font-weight: normal;
  }

  .list-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .list-item {
    width: 3.47rem;
    margin-bottom: .2rem;
    background: #ffffff;
  }

  .list-item .pic {
    position: relative;
    font-size: 0;
    margin-bottom: .1rem;
  }

  .listen_count {
    position: absolute;
    color: #ffffff;
    left: .1rem;
    bottom: .14rem;
    font-size: .22rem;
  }

  .icon_player {
    position: absolute;
    bottom: .14rem;
    right: .1rem;
  }

  .icon_player i {
    color: #ffffff;
    font-size: .4rem;
  }

  .listen_count i {
    font-size: .2rem;
  }

  .list-item .info {
    width: 100%;
    padding: 0 .14rem .1rem;
  }

  .list-item .info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .28rem;
    line-height: .4rem;
  }

  .list-item .info h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    font-size: .24rem;
  }
</style>
