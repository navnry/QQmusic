<template>
  <div class="recommend_detail">

  </div>
</template>

<script>
  import {getHotSongSheet} from '@/api/getRecommendData.js'
  import axios from 'axios'
  export default {
    name: "RecommendDetail",
    data() {
      return {}
    },
    created(){
      this._getHotSheetData()
    },
    methods: {
      _getHotSheetData(){
        let id=this.$route.query.id;
        axios.get('./static/hotSongSheet.json').then((res)=>{
          console.log(res);
          this.info = Object.assign({},res.data[id])
        })
      },
    }
  }
</script>

<style scoped>
  .recommend_detail {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #ffffff;
    top: 0;
    z-index: 3;
  }
</style>
