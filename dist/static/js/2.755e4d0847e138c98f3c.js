webpackJsonp([2],{Nzen:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"home",data:()=>({info:"项目简单的介绍",footerFont:"谢语：爱就像蓝天白云",loading:!1,finished:!1,list:[]}),methods:{showPopup(){this.popupShow=!0},onLoad(){setTimeout(()=>{for(let t=0;t<2;t++)this.list.push(this.list.length+1);this.loading=!1,this.list.length>=10&&(this.finished=!0)},500)}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"project"},[e("div",{staticClass:"middle"},[e("div",{staticClass:"middle_username"},[e("div",{staticClass:"user_left_name"},[t._v("项目的名称")]),e("div",{staticClass:"user_left_info"},[t._v(t._s(t.info))])]),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,function(i){return e("div",{key:i,staticClass:"middle_pic",attrs:{title:i}},[e("div",{staticClass:"middle_pic_title"},[t._v("标题"+t._s(i))]),e("div",{staticClass:"middle_pic_info"},[t._v("模块"+t._s(i)+"简单介绍")]),e("div",{staticClass:"middle_pic_main"},[e("img",{attrs:{src:s("t2yv")}})])])}),0),e("div",{staticClass:"footer_font"},[t._v(t._s(t.footerFont))])],1)])},staticRenderFns:[]};var n=s("VU/8")(e,a,!1,function(t){s("baQt")},"data-v-6fb9e05e",null);i.default=n.exports},baQt:function(t,i){},t2yv:function(t,i,s){t.exports=s.p+"static/img/pro_detail_page_1.eb43a64.png"}});