<template lang="pug">
  .other
    Bread
    .middle
      van-list(
        v-if="list"
        v-model="loading"
        :finished="finished"
        @load="onLoad")
        .middle_pic_list(
          @click="goDetailFn"
          v-for="item in list"
          :key="item.id"
        )
          img(:src="item.coverPic")
      Bottom
</template>
<script>
import Bread from "../components/bread"
import Bottom from "../components/thanking"
export default {
  components: { Bread,Bottom },
  name: 'other',
  data () {
    return {
      footerFont: "谢语：爱就像蓝天白云",
      loading: false,
      finished: false,
      list: []
    }
  },
  created() {
    this.axios.get(this.hostName+'/other/datas').then((res)=>{
      this.list = res.data.data
      console.log(this.list)
    }).catch((err)=>{
      console.error("请联系管理员，开斌刘")
    })
  },
  methods: {
    goDetailFn() {
      this.$router.push('/project_details')
    },
    onLoad() {
      console.log('666');
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          // this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length) {
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
        width: 92%;
        height: 51vw;
        margin: auto;
        margin-top: 5vw;
        img {
          width: 100%;
          height: 100%;
          border-radius: 2vw;
        }
        &:nth-of-type(1) {
          margin-top: 0vw;
        }
      }
    }
</style>


