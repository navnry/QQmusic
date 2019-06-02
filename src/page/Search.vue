<template>
  <div id="search">
    <div class="main">
      <a href="javascript:;" class="hotkey-item hotkey-item-special">{{hotkeys.special_key}}</a>
      <a href="javascript:;" class="hotkey-item" v-for="item in hotkeys.hotkey">{{item.k}}</a>
    </div>
  </div>
</template>

<script>
  import {getHotKey} from "../api/getSearchData";

  export default {
    name: "Search",
    data() {
      return {
        hotkeys: {},
        searchResult: []
      }
    },
    created() {
      this._getHotData();
    },
    methods: {
      _getHotData() {
        getHotKey().then((res) => {
          console.log(res.data);
          this.hotkeys = res.data
        })
      },
    },
  }
</script>

<style scoped>
  .hotkey-item {
    display: inline-block;
    font-size: .28rem;
    padding: 0 .2rem;
    height: .6rem;
    line-height: .58rem;
    color: #000;
    border: 1px solid rgba(0, 0, 0, .6);
    border-radius: 1rem;
    word-break: keep-all;
    margin-bottom: .2rem;
    margin-right: .28rem;
  }

  .hotkey-item-special {
    color: #fc4524;
    border-color: #fc4524;
  }
</style>
