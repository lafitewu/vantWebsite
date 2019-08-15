<template lang="pug">
  .project
    Bread
    .middle
      .top_tab
        van-tabs(v-model="active" animated title-active-color="#242837" title-inactive-color="#676B78")
          van-tab(title="App") 
            van-list(
            :finished="finished"
            )
            .middle_list(
              @click="goDetailFn"
              v-for="item in app_list"
              :key="item.id"
            )
              .middle_list_top
                .list_top_left
                  .top_left_main
                    .left_main_title {{item.name}}
                    .left_main_info {{item.intro}}
                .list_top_right
                  img(:src="item.icon")
              .middle_list_pic
                  img(:src="item.coverPic")
          van-tab(title="Web")
            van-list(
            :finished="finished"
            )
            .middle_list(
              @click="goDetailFn"
              v-for="item in web_list"
              :key="item.id"
            )
              .middle_list_top
                .list_top_left
                  .top_left_main
                    .left_main_title {{item.name}}
                    .left_main_info {{item.intro}}
                .list_top_right
                  img(:src="item.icon")
              .middle_list_pic
                  img(:src="item.coverPic")
          van-tab(title="小程序")
            van-list(
            :finished="finished"
            )
            .middle_list(
              @click="goDetailFn"
              v-for="item in mini_list"
              :key="item.id"
            )
              .middle_list_top
                .list_top_left
                  .top_left_main
                    .left_main_title {{item.name}}
                    .left_main_info {{item.intro}}
                .list_top_right
                  img(:src="item.icon")
              .middle_list_pic
                  img(:src="item.coverPic")
          van-tab(title="其他")
            van-list(
            :finished="finished"
            )
            .middle_list(
              @click="goDetailFn"
              v-for="item in other_list"
              :key="item.id"
            )
              .middle_list_top
                .list_top_left
                  .top_left_main
                    .left_main_title {{item.name}}
                    .left_main_info {{item.intro}}
                .list_top_right
                  img(:src="item.icon")
              .middle_list_pic
                  img(:src="item.coverPic")
      Bottom
</template>
<script>
import Bread from "../components/bread"
import Bottom from "../components/thanking"
export default {
  components: { Bread,Bottom },
  name: 'project',
  data () {
    return {
      info: "项目简单的介绍",
      footerFont: "谢语：爱就像蓝天白云",
      loading: false,
      finished: false,
      app_list: [],
      web_list: [],
      mini_list: [],
      other_list: [],
      active: 0
    }
  },
  created() {
    this.axios.get(this.hostName+'/project/datas').then((res)=>{
      var Len = res.data.data.length
      for(var i = 0; i < Len; i++) {
        if(res.data.data[i].type == 0) {
          this.app_list.push(res.data.data[i])
        }else if(res.data.data[i].type == 1) {
          this.web_list.push(res.data.data[i])
        }else if(res.data.data[i].type == 2) {
          this.mini_list.push(res.data.data[i])
        }else {
          this.other_list.push(res.data.data[i])
        }
      }
    }).catch((err)=>{
      console.error("请联系管理员，开斌刘")
    })
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
    .top {
      box-shadow: none !important;
    }
    .project {
      position: relative;
      width: 100%;
      background: #F3F4F6;
      padding-bottom: 6vw;
      // 主体内容
      .middle {
        position: relative;
        width: 100%;
        .top_tab {
          width: 100%;
          background: white;
        }
        .middle_username {
          position: relative;
          top: 5vw;
          height: 20vw;
          width: 92%;
          background: white;
          margin: auto;
          border-radius: 3vw;
          .user_left_name {
            font-size: 4.5vw;
            color: #242837;
            letter-spacing: 0.57px;
            padding-top: 3vw;
            text-indent: 5vw;
          }
          .user_left_info {
            font-size: 3vw;
            color: #A3A5AE;
            letter-spacing: 0.92px;
            margin-top: 2vw;
            text-indent: 5vw;
          }
        }
        // card列表
        .van-tabs__track {
        .middle_list {
          position: relative;
          top: 5vw;
          width: 92%;
          height: 78vw;
          background: white;
          margin: auto;
          margin-top: 3.5vw;
          border-radius: 3vw;
          .middle_list_top {
            width: 100%;
            height: 23vw;
            border-bottom: 1px solid #eee;
            .list_top_left {
              float: left;
              width: 86%;
              height: 100%;
              border-right: 1px solid #eee;
              .top_left_main {
                width: 90%;
                height: 100%;
                margin: auto;
                .left_main_title {
                  font-size: 4vw;
                  color: #242837;
                  padding-top: 3vw;
                  font-weight:600;
                  letter-spacing: 1.29px;
                }
                .left_main_info {
                  color: #676B78;
                  letter-spacing: 0.94px;
                  font-size: 3.2vw;
                  margin-top: 2vw;
                }
              }
            }
            .list_top_right {
              float: right;
              width: 12%;
              height: 100%;
              line-height: 30vw;
              img {
                width: 60%;
                margin-left: 10%;
              }
            }
          }
          .middle_list_pic {
            width: 93%;
            height: 48vw;
            margin: 3.5vw auto;
            border-radius: 3vw;
            overflow: hidden;
            video {
              width: 100%;
              height: 100%;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          &:nth-of-type(1) {
            margin-top: 0; 
          }
        }
        }
      }
    }
</style>
<style>
.van-hairline--top-bottom::after {
  border: none !important;
}
.van-tabs__wrap {
  z-index: 88;
  position: relative;
  height: 40px !important;
  width: 100%;
  box-shadow:0px 1px 2px 0px rgba(0,0,0,0.1);
}
.van-tab {
  max-width: 16%;
}
.van-tabs__line {
  background: #242837 !important;
  height: 2px;
  width: 18px !important;
}
.van-tab__pane-wrapper {
  background: #F3F4F6;
  margin-top: -4.5vw;
}
.van-tab__pane {
  padding-bottom: 10vw;
}
.van-tab--active {
  font-weight: bold !important;
}
</style>




