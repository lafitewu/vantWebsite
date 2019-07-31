<template lang="pug">
  .top
    .top_main
      .top_left {{name}}
      .top_right(@click="showPopup")
        i(class="iconfont iconicon_nav_icon_more")
    van-popup(
      v-model="popupShow"
      position="right"
      :style="{ width: '55%',height: '100%' }"
    )
      .alert_main
        router-link(to="/") 首页
        router-link(to="/project") 项目
        router-link(to="/other") 其他
        router-link(to="/file") 文档
</template>

<script>
export default {
  name: 'bread',
  data () {
    return {
      name: 'koobinliu',
      popupShow: false
    }
  },
  methods: {
    showPopup() {
      this.popupShow = true
    }
  }
}
</script>

<style lang="less" scoped>
// 顶部菜单
.top {
  width: 100%;
  height: 12vw;
  color: #242837;
  background: white;
  .top_main {
    width: 90%;
    height: 100%;
    margin: auto;
    // background: red;
    line-height: 12vw;
    .top_left {
      width: 30%;
      float: left;
      text-align: left;
      font-size: 3.7vw;
    }
    .top_right {
      float: right;
      width: 20%;
      text-align: right;
      cursor: pointer;
    }
  }
}
// 弹窗内容
.alert_main {
  width: 100%;
  margin-top: 1.5vw;
  a {
    display: block;
    text-align: center;
    color: white;
    letter-spacing: 1.11px;
    font-size: 3.7vw;
    line-height: 12vw;
  }
}
</style>
<style>
  /* 遮罩层样式 */
  .van-overlay {
    background: transparent !important;
  }
  .van-popup {
    background: rgba(0,0,0,.7);
  }
</style>
