<template lang="pug">
  .other
    .middle
      .middle_username
        .user_left_name 其他
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
      .middle_list.middle_list2
        .middle_list_top
          .list_top_left
            .top_left_main
              .left_main_title 固定模块
              .left_main_info 这是一个短视频，视频全长30s，希望你可以通过这个视频了解我的日常生活
          .list_top_right
            img(src="@/assets/images/home_default_header_2.png")
        .middle_list_pic
            img(src="@/assets/images/home_bg_img_show_2.png")
      .middle_list.middle_list2
        .middle_list_top
          .list_top_left
            .top_left_main
              .left_main_title 30秒简介
              .left_main_info 这是一个短视频，视频全长30s，希望你可以通过这个视频了解我的日常生活
          .list_top_right
            img(src="@/assets/images/home_default_header_3.png")
        .middle_list_pic
          img(src="@/assets/images/home_bg_img_show_3.png")
      .middle_look
        .look_frist
          a(href="#")
            img(src="@/assets/images/home_illustrator_img_show_1.png")
          a(href="#")
            img(src="@/assets/images/home_illustrator_img_show_2.png")
        .look_second
          img(src="@/assets/images/home_illustrator_img_show_3.png")
        .look_more 
          | 查看更多
          i(class="iconfont iconicon_common_icon_home_turn_in")
      .middle_file
        .look_file 
          .look_file_list
            img(src="@/assets/images/icon_common_icon_folder_yellow.png")
            span 关于弹窗规范的总结
          .look_file_list
            img(src="@/assets/images/icon_common_icon_folder_green.png")
            span 关于弹窗规范的总结
          .look_file_list
            img(src="@/assets/images/icon_common_icon_folder_blue.png")
            span 关于弹窗规范的总结
          .look_file_more 
            | 查看更多
            i(class="iconfont iconicon_common_icon_home_turn_in")
      .middle_icon
        .middle_icon_list
          i(class="iconfont iconicon_common_icon_home_dribbble icon1")
          i(class="iconfont iconicon_common_icon_home_behance icon2")
          i(class="iconfont iconicon_common_icon_home_zcool icon3")
      .footer_font {{footerFont}}
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      info: "做自己的设计，让别人无设计可做",
      footerFont: "谢语：爱就像蓝天白云",
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
    .other {
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
          width: 90%;
          // background: white;
          margin: auto;
          .user_left_pic {
            width: 8vw;
            height: 8vw;
            padding-top: 5vw;
            img {
              width: 100%;
              height: 100%;
              // border-radius: 90px;
            }
          }
          .user_left_name {
            font-size: 4vw;
            color: #242837;
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
          width: 90%;
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
                width: 80%;
              }
            }
          }
          .middle_list_pic {
            width: 90%;
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
          margin-top: 5vw;
        }
        .middle_look {
          width: 90%;
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
            cursor: pointer;
          }
        }
        .middle_file {
          width: 90%;
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
              cursor: pointer;
            }
          }
        }
        // 图标列表
        .middle_icon {
          width: 90%;
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
        // 谢语
        .footer_font {
          margin-top: 15vw;
          text-align: center;
          color: #676B78;
          letter-spacing: 1.11px;
          font-size: 3.7vw;
        }
      }
    }
</style>

