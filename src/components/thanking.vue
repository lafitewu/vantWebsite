<template lang="pug">
  .footer_font {{footerFont}}
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      footerFont: '666'
    }
  },
  created() {
    this.Init()
  },
  methods: {
    Init() {
      if(!sessionStorage.getItem("thanking")) {
        this.axios.get(this.hostName+'/personal/datas').then((res)=>{
          this.footerFont = res.data.data[0].thanking
          // 缓存
          sessionStorage.setItem("logoName",res.data.data[0].logoName)
          sessionStorage.setItem("thanking",this.footerFont)
        }).catch((err)=>{
          console.error("请联系管理员，开斌刘")
        })
      }else {
        this.footerFont = sessionStorage.getItem("thanking")
      }
    }
  }
}
</script>

<style lang="less" scoped>
  // 谢语
  .footer_font {
    margin-top: 15vw;
    text-align: center;
    color: #676B78;
    letter-spacing: 1.11px;
    font-size: 3vw;
  }
</style>
