<template lang="pug">
  .file
    .middle
      van-list(
        v-model="loading"
        :finished="finished"
        @load="onLoad")
        .middle_file_list(
          @click="goDetailFn"
          v-for="item in list"
          :key="item"
          :title="item"
        )
          .middle_file_list_main
            img(src="@/assets/images/icon_common_icon_folder_yellow.png")
            .middle_list_main_info 关于banner{{item}}的测试结果(搬运工)
      .footer_font {{footerFont}}
</template>
<script>
export default {
  name: 'file',
  data () {
    return {
      footerFont: "谢语：爱就像蓝天白云",
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    goDetailFn() {
      this.$router.push('/project_details')
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
    .file {
      position: relative;
      width: 100%;
      background: #F3F4F6;
      padding-bottom: 6vw;
      // 主体内容
      .middle {
        position: relative;
        width: 100%;
      }
      .middle_file_list {
        position: relative;
        top: 5vw;
        width: 90%;
        height: 50vw;
        background: white;
        margin: auto;
        margin-top: 5vw;
        border-radius: 3vw;
        .middle_file_list_main {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 92%;
          height: 90%;
          margin: auto;
          border-radius: 2vw;
          border: 1px solid #F3F4F6;
          img {
            width: 17%;
            margin-left: 41.5%;
            padding-top: 10vw;
          }
          .middle_list_main_info {
            padding-top: 5vw;
            font-size: 3.7vw;
            color: #676B78;
            letter-spacing: 1.11px;
            text-align: center;
          }
        }
        &:nth-of-type(1) {
            margin-top: 0;
          }
      }
      // 谢语
      .footer_font {
        margin-top: 15vw;
        text-align: center;
        color: #676B78;
        letter-spacing: 1.11px;
        font-size: 3.7vw;
      }
    }
</style>


