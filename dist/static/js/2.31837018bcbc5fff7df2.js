webpackJsonp([2],{"1BOU":function(t,i){},N7fA:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("Osha"),l=s("A6AK"),e={components:{Bread:a.a,Bottom:l.a},name:"project",data:()=>({info:"项目简单的介绍",footerFont:"谢语：爱就像蓝天白云",loading:!1,finished:!1,app_list:[],web_list:[],mini_list:[],other_list:[],active:0}),created(){this.axios.get(this.hostName+"/project/datas").then(t=>{for(var i=t.data.data.length,s=0;s<i;s++)0==t.data.data[s].type?this.app_list.push(t.data.data[s]):1==t.data.data[s].type?this.web_list.push(t.data.data[s]):2==t.data.data[s].type?this.mini_list.push(t.data.data[s]):this.other_list.push(t.data.data[s])}).catch(t=>{console.error("请联系管理员，开斌刘")})},methods:{goDetailFn(t){this.$router.push({path:"/project_details",query:{id:t.id}})},onLoad(){setTimeout(()=>{for(let t=0;t<2;t++)this.list.push(this.list.length+1);this.loading=!1,this.list.length>=10&&(this.finished=!0)},500)}}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"project"},[s("Bread"),s("div",{staticClass:"middle"},[s("div",{staticClass:"top_tab"},[s("van-tabs",{attrs:{animated:"animated","title-active-color":"#242837","title-inactive-color":"#676B78"},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[s("van-tab",{attrs:{title:"App"}},[s("van-list",{attrs:{finished:t.finished}}),t._l(t.app_list,function(i){return s("div",{key:i.id,staticClass:"middle_list",on:{click:function(s){return t.goDetailFn(i)}}},[s("div",{staticClass:"middle_list_top"},[s("div",{staticClass:"list_top_left"},[s("div",{staticClass:"top_left_main"},[s("div",{staticClass:"left_main_title"},[t._v(t._s(i.title))]),s("div",{staticClass:"left_main_info"},[t._v(t._s(i.intro))])])]),s("div",{staticClass:"list_top_right"},[s("img",{attrs:{src:i.icon}})])]),s("div",{staticClass:"middle_list_pic"},[s("img",{attrs:{src:i.coverPic}})])])})],2),s("van-tab",{attrs:{title:"Web"}},[s("van-list",{attrs:{finished:t.finished}}),t._l(t.web_list,function(i){return s("div",{key:i.id,staticClass:"middle_list",on:{click:function(s){return t.goDetailFn(i)}}},[s("div",{staticClass:"middle_list_top"},[s("div",{staticClass:"list_top_left"},[s("div",{staticClass:"top_left_main"},[s("div",{staticClass:"left_main_title"},[t._v(t._s(i.title))]),s("div",{staticClass:"left_main_info"},[t._v(t._s(i.intro))])])]),s("div",{staticClass:"list_top_right"},[s("img",{attrs:{src:i.icon}})])]),s("div",{staticClass:"middle_list_pic"},[s("img",{attrs:{src:i.coverPic}})])])})],2),s("van-tab",{attrs:{title:"小程序"}},[s("van-list",{attrs:{finished:t.finished}}),t._l(t.mini_list,function(i){return s("div",{key:i.id,staticClass:"middle_list",on:{click:function(s){return t.goDetailFn(i)}}},[s("div",{staticClass:"middle_list_top"},[s("div",{staticClass:"list_top_left"},[s("div",{staticClass:"top_left_main"},[s("div",{staticClass:"left_main_title"},[t._v(t._s(i.title))]),s("div",{staticClass:"left_main_info"},[t._v(t._s(i.intro))])])]),s("div",{staticClass:"list_top_right"},[s("img",{attrs:{src:i.icon}})])]),s("div",{staticClass:"middle_list_pic"},[s("img",{attrs:{src:i.coverPic}})])])})],2),s("van-tab",{attrs:{title:"其他"}},[s("van-list",{attrs:{finished:t.finished}}),t._l(t.other_list,function(i){return s("div",{key:i.id,staticClass:"middle_list",on:{click:function(s){return t.goDetailFn(i)}}},[s("div",{staticClass:"middle_list_top"},[s("div",{staticClass:"list_top_left"},[s("div",{staticClass:"top_left_main"},[s("div",{staticClass:"left_main_title"},[t._v(t._s(i.title))]),s("div",{staticClass:"left_main_info"},[t._v(t._s(i.intro))])])]),s("div",{staticClass:"list_top_right"},[s("img",{attrs:{src:i.icon}})])]),s("div",{staticClass:"middle_list_pic"},[s("img",{attrs:{src:i.coverPic}})])])})],2)],1)],1),s("Bottom")],1)],1)},staticRenderFns:[]};var d=s("VU/8")(e,n,!1,function(t){s("1BOU"),s("ylj0")},"data-v-426c5600",null);i.default=d.exports},ylj0:function(t,i){}});