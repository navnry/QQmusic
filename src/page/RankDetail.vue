<template>
  <div id="rankdetail">
    <div class="main">
      <div class="topinfo">
        <div class="list-cover">
          <img :src="topinfos.pic_v12" alt="">
        </div>
        <div class="info">
          <h3>{{topinfos.ListName}}</h3>
          <p class="info_txt">{{topinfos.ListName}}:第{{songmsgs.day_of_year}}天</p>
          <p class="info_desc">更新时间:{{songmsgs.date}}</p>
        </div>
        <div>
          <a href="" class="player-btn"></a>
        </div>
      </div>
      <div class="count_box">
        <p>排行榜:共{{songmsgs.cur_song_num}}首</p>
      </div>
      <div class="songlist">
        <ul>
          <li v-for="(item,index) in songlists">
            <div class="list_index">
              <span>{{index+1}}</span>
              <span class="upnum"><i class="iconfont iconshangzhang"></i>{{(item.in_count*100).toFixed(0)+'%'}}</span>
            </div>
            <div class="list_info">
              <p class="list_info_songname"><span class="song_name">{{item.data.songname}}</span></p>
              <p class="list_info_singer"><span v-for="items in item.data.singer">{{items.name}}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {getRank} from "@/api/getRankData.js"

  export default {
    name: "RankDetail",
    data() {
      return {
        songlists: {},
        topinfos: {},
        songmsgs: {}
      }
    },
    methods: {
      _getRankDetailData() {
        let id = this.$route.params.id;
        let songmsgArr = {}
        getRank(id).then((res) => {
          console.log(res.songlist);
          songmsgArr.date = res.date
          songmsgArr.day_of_year = res.day_of_year
          songmsgArr.cur_song_num = res.cur_song_num
          this.songlists = res.songlist
          this.topinfos = res.topinfo
          this.songmsgs = songmsgArr
        })
      }
    },
    created() {
      this._getRankDetailData();
    },
  }
</script>

<style scoped>
  #rankdetail {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #ffffff;
    top: 0;
    left: 0;
    overflow: auto;
    z-index: 3;
  }

  .topinfo {
    display: flex;
    justify-content: center;
    margin: .5rem 0;
    flex-wrap: wrap;
    text-align: center;
  }

  .topinfo h3 {
    width: 100%;
    margin-bottom: .24rem;
    line-height: .52rem;
  }

  .topinfo .info {
    width: 100%;
    margin-bottom: .24rem;
  }

  .topinfo p {
    width: 100%;
  }

  .topinfo .info_txt {
    margin-bottom: .24rem;
  }

  .topinfo .info_desc {
    font-size: .28rem;
    color: grey;
  }

  .list-cover {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: .36rem;
    box-shadow: 0 7px 13px rgba(0, 0, 0, .21);
    background-color: #dbdbdb;
    overflow: hidden;
    margin-bottom: .5rem;
  }

  .songlist ul li {
    padding: .2rem 0;
    display: flex;
  }

  .songlist ul li .list_info {
    width: 5.6rem;
    margin-left: .3rem;
  }

  .songlist ul li .list_info_singer {
    font-size: .24rem;
    color: rgba(0, 0, 0, .4);
  }

  .songlist ul li .list_info_singer span:after {
    content: ' / ';
  }

  .songlist ul li .list_info_singer span:last-child:after {
    content: '';

  }

  .songlist ul li .list_info_songname {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .songlist ul li .song_name {
    font-size: .28rem;

  }

  .songlist ul li .list_index {
    font-size: .28rem;
    width: .5rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /*line-height: .8rem;*/
  }

  .songlist ul li .list_index .upnum {
    font-size: .16rem;
    color: grey;
  }
  .songlist ul li .list_index .upnum i{
    font-size: .16rem;
    color: rgb(245, 98, 115);;
  }
  .songlist ul li:nth-child(1) .list_index {
    color: #f56273;
  }

  .songlist ul li:nth-child(2) .list_index {
    color: #f56273;
  }

  .songlist ul li:nth-child(3) .list_index {
    color: #f56273;
  }

  .player-btn {
    display: block;
    width: 3.8rem;
    height: .8rem;
    border-radius: 1rem;
    box-shadow: 0 .12rem .64rem rgba(24, 213, 156, .5);
    background-color: #22d59c;
  }

  .count_box p {
    font-size: .24rem;
    color: grey;
  }
</style>
