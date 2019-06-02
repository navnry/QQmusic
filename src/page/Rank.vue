<template>
  <div id="rank">
    <div class="main">
      <div class="rank-item" v-if="item.topTitle !== '巅峰榜·MV'" v-for="item in toplist"
           @click="goTo('rank/rankdetail',item.id)">
        <div class="pic">
          <img :src="item.picUrl" alt="">
          <span class="listen_count"><i class="iconfont icontingyinfuxi"></i>{{((item.listenCount)/10000).toFixed(1)+'万'}}</span>
        </div>
        <div class="info">
          <h3>{{item.topTitle}}</h3>
          <p v-for="( song,index ) in item.songList">
            {{index+1}}
            <span>{{song.songname}}</span>
            {{song.singername}}
          </p>
          <i class="iconfont iconzyojiantou"></i>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getRankData} from "@/api/getRankData.js"

  export default {
    name: "Rank",
    data() {
      return {
        toplist: []
      }
    },
    created() {
      this._getRankData();
    },
    methods: {
      _getRankData() {
        getRankData().then((res) => {
          console.log(res.data);
          this.toplist = res.data.topList
        })
      },
      goTo(place, id) {
        let url = `/${place}/${id}`
        this.$router.push(url)
      }
    },
  }
</script>

<style scoped>
  .rank-item {
    display: flex;
    margin: .2rem 0;
    background: #ffffff;
  }

  .rank-item .pic {
    flex: 1;
    font-size: 0;
    position: relative;
  }

  .rank-item .listen_count {
    position: absolute;
    left: .1rem;
    bottom: .14rem;
    font-size: .2rem;
    color: #ffffff;
  }

  .rank-item .listen_count i {
    font-size: .2rem;
    margin-right: .1rem;
  }

  .rank-item .info {
    width: 4.6rem;
    margin: 0 .2rem 0 .3rem;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    position: relative;
  }

  .rank-item .info h3 {
    width: 100%;
    font-size: .32rem;
    color: #000;
    font-weight: 400;
    margin-bottom: .1rem;
  }

  .rank-item .info p {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .28rem;
    color: rgba(0, 0, 0, .5);
    line-height: .44rem;
  }

  .rank-item .info p span {
    color: #000;
    margin-left: .16em;
    margin-right: .1rem;
  }
  .rank-item .info i{
    position: absolute;
    right: -.1rem;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: .26rem;
    color: #b2b2b2;
    line-height: 2rem;
  }
</style>
