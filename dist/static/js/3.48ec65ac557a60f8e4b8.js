webpackJsonp([3],{Nzen:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("Osha"),e=a("A6AK"),d={components:{Bread:s.a,Bottom:e.a},name:"details",data:()=>({name:"",info:"项目简单的介绍",footerFont:"谢语：爱就像蓝天白云",loading:!1,finished:!1,list:[]}),created(){this.initFn()},methods:{initFn(){this.axios.get(this.hostName+"/details/data",{params:{id:this.$route.query.id}}).then(t=>{console.log(t.data.data[0]);var i=t.data.data[0].detailInfo.split("&&").length-1;this.name=t.data.data[0].projectName,this.info=t.data.data[0].projectInfo;for(var a=0;a<i;a++)this.list[a]={title:t.data.data[0].detailName.split("&&")[a],info:t.data.data[0].detailInfo.split("&&")[a],picList:t.data.data[0].detailPicList.split("&&")[a]},this.list[a].picList=this.list[a].picList.split(",");console.log(this.list)}).catch(t=>{console.error("请联系管理员，开斌刘")})},showPopup(){this.popupShow=!0},onLoad(){}}},n={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"details"},[a("Bread"),a("div",{staticClass:"middle"},[a("div",{staticClass:"middle_username"},[a("div",{staticClass:"user_left_name"},[t._v(t._s(t.name))]),a("div",{staticClass:"user_left_info"},[t._v(t._s(t.info))])]),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad}},t._l(t.list,function(i,s){return a("div",{key:i.info,staticClass:"middle_pic",attrs:{title:i}},[a("div",{staticClass:"middle_pic_title"},[t._v(t._s(i.title))]),a("div",{staticClass:"middle_pic_info"},[t._v(t._s(i.info))]),t._l(t.list[s].picList,function(t){return a("div",{key:t,staticClass:"middle_pic_main"},[a("img",{attrs:{src:t}})])})],2)}),0),a("Bottom")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(d,n,!1,function(t){a("lNu4")},"data-v-ebbb5b9e",null);i.default=l.exports},lNu4:function(t,i){}});