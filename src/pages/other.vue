<template lang="pug">
  .other
    .middle
      van-list(
        v-model="loading"
        :finished="finished"
        @load="onLoad")
        .middle_pic_list(
          @click="goDetailFn"
          v-for="item in list"
          :key="item"
          :title="item"
        )
          img(src="@/assets/images/img_common_show_img_6.png")
      .footer_font {{footerFont}}
</template>
<script>
export default {
  name: 'other',
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
    .other {
      position: relative;
      width: 100%;
      background: #F3F4F6;
      padding-bottom: 6vw;
      // 主体内容
      .middle {
        position: relative;
        width: 100%;
      }
      .middle_pic_list {
        position: relative;
        top: 5vw;
        width: 90%;
        height: 51vw;
        margin: auto;
        margin-top: 5vw;
        img {
          width: 100%;
          height: 100%;
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


