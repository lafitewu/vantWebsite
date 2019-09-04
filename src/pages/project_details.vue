<template lang="pug">
  .details
    Bread
    .middle
      .middle_username
        .user_left_name {{name}}
        .user_left_info {{info}}
      van-list(
        
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad")
        .middle_pic(
          v-for="(item,index) in list"
          :key="item.info"
          :title="item"
        )
          .middle_pic_title {{item.title}}
          .middle_pic_info {{item.info}}
          .middle_pic_main(v-for="items in list[index].picList" :key="items")
            img(:src="items")
      Bottom
</template>
<script>
import Bread from "../components/bread"
import Bottom from "../components/thanking"
export default {
  components: { Bread,Bottom },
  name: 'details',
  data () {
    return {
      name: "",
      info: "项目简单的介绍",
      footerFont: "谢语：爱就像蓝天白云",
      loading: false,
      finished: false,
      list: []
    }
  },
  created() {
    this.initFn()
  },
  methods: {
    // 详情页面初始化
    initFn() {
      this.axios.get(this.hostName+'/details/data',
      {
        params: {
          id: this.$route.query.id
        }
      }).then((res)=>{
        console.log(res.data.data[0])
        var Len = res.data.data[0].detailInfo.split('&&').length - 1
        this.name = res.data.data[0].projectName
        this.info = res.data.data[0].projectInfo
        for(var i = 0; i < Len; i++) {
          this.list[i] = {
            title: res.data.data[0].detailName.split('&&')[i],
            info: res.data.data[0].detailInfo.split('&&')[i],
            picList: res.data.data[0].detailPicList.split('&&')[i],
          }
          this.list[i].picList = this.list[i].picList.split(',')
        }
        console.log(this.list)
      }).catch((err)=>{
        console.error("请联系管理员，开斌刘")
      })
    },
    showPopup() {
      this.popupShow = true
    },
    onLoad() {
      // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 2; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 10) {
      //     this.finished = true;
      //   }
      // }, 500);
    }
  }
}
</script>
<style lang="less" scoped>
    .details {
      position: relative;
      width: 100%;
      background: #F3F4F6;
      padding-bottom: 6vw;
      // 主体内容
      .middle {
        position: relative;
        width: 100%;
        .middle_username {
          position: relative;
          top: 5vw;
          height: 20vw;
          width: 92%;
          background: white;
          margin: auto;
          border-radius: 3vw;
          .user_left_name {
            font-size: 4.3vw;
            color: #242837;
            letter-spacing: 0.57px;
            padding-top: 3vw;
            text-indent: 5vw;
            font-weight:600;
          }
          .user_left_info {
            font-size: 3vw;
            color: #A3A5AE;
            letter-spacing: 0.92px;
            margin-top: 2vw;
            text-indent: 5vw;
          }
        }
        .middle_pic {
          width: 92%;
          min-height: 79.5vw;
          margin: auto;
          margin-top: 5vw;
          .middle_pic_title {
            font-size: 3.5vw;
            font-weight:600;
            color: #242837;
            letter-spacing: 0.5px;
            text-indent: 5vw;
          }
          .middle_pic_info {
            font-size: 3vw;
            color: #676B78;
            letter-spacing: 0.43px;
            text-indent: 5vw;
            margin-top: 1vw;
            margin-bottom: 4vw;
          }
          .middle_pic_main {
            width: 100%;
            height: 65vw;
            img {
              width: 100%;
              height: 100%;
            }
          }
          &:nth-of-type(1) {
            margin-top: 11vw;
          }
        }
      }
    }
</style>

