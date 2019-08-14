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
      .alert_main(@click="popupShow=false")
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
  created() {
    this.Init()
  },
  methods: {
    Init() {
      if(!sessionStorage.getItem("logoName")) {
        this.axios.get(this.hostName+'/personal/datas').then((res)=>{
          this.name = res.data.data[0].logoName
          // 缓存
          sessionStorage.setItem("logoName",this.name)
          sessionStorage.setItem("thanking",res.data.data[0].thanking)
        }).catch((err)=>{
          console.error("请联系管理员，开斌刘")
        })
      }else {
        this.name = sessionStorage.getItem("logoName")
      }
    },
    showPopup() {
      this.popupShow = true
    }
  }
}
</script>

<style lang="less" scoped>
// 顶部菜单
.top {
  z-index: 99;
  position: relative;
  width: 100%;
  height: 12.2vw;
  color: #242837;
  background: white;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
  .top_main {
    width: 92%;
    height: 100%;
    margin: auto;
    // background: red;
    line-height: 12vw;
    .top_left {
      width: 30%;
      float: left;
      text-align: left;
      font-size: 4vw;
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
    font-weight:600;
  }
}
</style>
<style>
  /* 遮罩层样式 */
  .van-overlay {
    background: transparent !important;
  }
  .van-popup {
    background: rgba(0,0,0,.7) !important;
  }
</style>
