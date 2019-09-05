<template lang="pug">
  .home
    Bread
    .middle
      .middle_username
        .user_left_pic
          img(:src="headPic")
        .user_left_name {{userName}}
        .user_left_info {{info}}
      .middle_list
        .middle_list_top
          .list_top_left
            .top_left_main
              .left_main_title 30秒简介
              .left_main_info 这是一个短视频，视频全长30s，希望你可以通过这个视频了解我的日常生活
          .list_top_right
            img(src="@/assets/images/home_default_header_1.png")
        .middle_list_pic
          video(src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls="controls" poster="@/assets/images/home_bg_img_show_1.png")
      .middle_list.middle_list2(@click="goDetailFn(item)" v-for="item in projectArr" :key="item.id")
        .middle_list_top
          .list_top_left
            .top_left_main
              .left_main_title {{item.title}}
              .left_main_info {{item.intro}}
          .list_top_right
            img(:src="item.icon")
        .middle_list_pic
            img(:src="item.coverPic")
   
      .middle_look(v-if="otherArr.length")
        .look_frist
          router-link(v-if="otherArr.length > 0" :to="{path: '/project_details',query: {id: otherArr[0].id}}")
            img(:src="otherArr[0].coverPic")
          router-link(v-if="otherArr.length > 1" :to="{path: '/project_details',query: {id: otherArr[1].id}}")
            img(:src="otherArr[1].coverPic")
        .look_second(v-if="otherArr.length > 2")
          img(:src="otherArr[2].coverPic" @click="goDetailFn(otherArr[2])")
        .look_more(@click="goOtherFn")
          | 查看更多
          i(class="iconfont iconicon_common_icon_home_turn_in")
      .middle_file
        .look_file 
          .look_file_list(@click="goDetailFn(item)" v-for="item in fileArr" :key="item.id")
            img(src="@/assets/images/icon_common_icon_folder_yellow.png")
            span {{item.name}}
          .look_file_more(@click="goFileFn")
            | 查看更多
            i(class="iconfont iconicon_common_icon_home_turn_in")
      .middle_icon
        .middle_icon_list
          i(class="iconfont iconicon_common_icon_home_dribbble icon1")
          i(class="iconfont iconicon_common_icon_home_behance icon2")
          i(class="iconfont iconicon_common_icon_home_zcool icon3")
      Bottom
</template>
<script>
import Bread from "../components/bread"
import Bottom from "../components/thanking"

export default {
  components: { Bread,Bottom },
  name: 'home',
  data () {
    return {
      userName: "",
      headPic: "",
      info: "做自己的设计，让别人无设计可做",
      footerFont: "谢语：爱就像蓝天白云",
      projectArr: [],
      otherArr: [],
      fileArr: []
    }
  },
  created() {
    this.axios.get(this.hostName+'/home/datas').then((res)=>{
      this.userName = res.data.data.users[0].nickName
      this.info = res.data.data.users[0].motto
      this.footerFont = res.data.data.users[0].thanking
      this.headPic = res.data.data.users[0].headPic
      this.projectArr = res.data.data.project
      this.otherArr = res.data.data.other
      this.fileArr = res.data.data.file
      this.fileArr[0].webIcon = "@/assets/images/icon_common_icon_folder_yellow.png"
      this.fileArr[1].webIcon = "@/assets/images/icon_common_icon_folder_green.png"
      this.fileArr[2].webIcon = "@/assets/images/icon_common_icon_folder_blue.png"
    }).catch((err)=>{
      console.error("请联系管理员，开斌刘")
    })
  },
  methods: {
    goDetailFn(val) {
      console.log(val.id)
      this.$router.push({path: '/project_details',query: {id: val.id}})
    },
    goOtherFn() {
      this.$router.push('/other')
    },
    goFileFn() {
      this.$router.push('/file')
    }
  }
}
</script>
<style lang="less" scoped>
    .home {
      position: relative;
      width: 100%;
      background: #F3F4F6;
      padding-bottom: 6vw;
      // 主体内容
      .middle {
        position: relative;
        width: 100%;
        .middle_username {
          height: 35vw;
          width: 92%;
          // background: white;
          margin: auto;
          .user_left_pic {
            width: 11vw;
            height: 11vw;
            padding-top: 5vw;
            img {
              width: 100%;
              height: 100%;
              border-radius: 90px;
            }
          }
          .user_left_name {
            font-size: 4vw;
            color: #242837;
            font-weight:600;
            letter-spacing: 1.29px;
            margin-top: 2vw;
          }
          .user_left_info {
            font-size: 3.2vw;
            color: #242837;
            letter-spacing: 1.03px;
            margin-top: 2vw;
          }
        }
        // card列表
        .middle_list {
          width: 92%;
          height: 78vw;
          background: white;
          margin: auto;
          border-radius: 3vw;
          .middle_list_top {
            width: 100%;
            height: 23vw;
            border-bottom: 1px solid #eee;
            .list_top_left {
              float: left;
              width: 85%;
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
                  font-weight: bold;
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
              // border-radius: 3vw;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .middle_list2 {
          margin-top: 3.5vw;
        }
        .middle_look {
          width: 92%;
          height: 98vw;
          margin: auto;
          margin-top: 6vw;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          .look_frist {
            width: 100%;
            height: 24vw;
            margin-top: 6vw;
            a {
              float: left;
              display: block;
              width: 47.5%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                border-radius: 3vw;
              }
              &:nth-of-type(2) {
                float: right;
              }
            }
          }
          .look_second {
            width: 100%;
            height: 50vw;
            margin-top: 3.5vw;
            img {
              width: 100%;
              height: 100%;
              border-radius: 5vw;
            }
          }
          .look_more {
            float: right;
            width: 30%;
            font-size: 3.7vw;
            color: #242837;
            text-align: right;
            margin-top: 5vw;
            letter-spacing: 1.11px;
            font-weight:600;
            cursor: pointer;
            i {
              margin-left: 1.5vw;
            }
          }
        }
        .middle_file {
          width: 92%;
          margin: auto;
          // 文件列表
          .look_file {
            width: 100%;
            height: 55vw;
            border-bottom: 1px solid #eee;
            .look_file_list {
              font-size: 3.7vw;
              color: #242837;
              letter-spacing: 1.11px;
              line-height: 14vw;
              cursor: pointer;
              img {
                position: relative;
                width: 5.5vw;
                top: 1vw;
              }
              span {
                margin-left: 4vw;
              }
            }
            &:nth-of-type(1) {
              margin-top: 2vw;
            }
            .look_file_more {
              float: right;
              width: 30%;
              font-size: 3.7vw;
              color: #242837;
              text-align: right;
              margin-top: 1vw;
              letter-spacing: 1.11px;
              font-weight:600;
              cursor: pointer;
              i {
                margin-left: 1.5vw;
              }
            }
          }
        }
        // 图标列表
        .middle_icon {
          width: 92%;
          margin: auto;
          .middle_icon_list {
            height: 15vw;
            width: 100%;
            line-height: 15vw;
            i {
              font-size: 6.5vw;
              margin-right: 10vw;
            }
            .icon1 {
              color: #d4237a;
            }
            .icon2 {
              color: #1296db;
            }
            .icon3 {
              color: #F5A623;
            }
          } 
        }
      }
    }
</style>

