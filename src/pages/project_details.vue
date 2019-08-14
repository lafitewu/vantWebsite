<template lang="pug">
  .details
    Bread
    .middle
      .middle_username
        .user_left_name 项目的名称
        .user_left_info {{info}}
      van-list(
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad")
        .middle_pic(
          v-for="item in list"
          :key="item"
          :title="item"
        )
          .middle_pic_title 标题{{item}}
          .middle_pic_info 模块{{item}}简单介绍
          .middle_pic_main
            img(src="@/assets/images/pro_detail_page_1.png")
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
      info: "项目简单的介绍",
      footerFont: "谢语：爱就像蓝天白云",
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    showPopup() {
      this.popupShow = true
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 500);
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
          height: 79.5vw;
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
          }
          .middle_pic_main {
            width: 100%;
            height: 65vw;
            margin-top: 4vw;
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

