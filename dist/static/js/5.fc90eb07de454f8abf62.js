webpackJsonp([5],{LSHy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Osha"),s=i("A6AK"),a={components:{Bread:o.a,Bottom:s.a},name:"other",data:()=>({footerFont:"谢语：爱就像蓝天白云",loading:!1,finished:!1,list:[]}),created(){this.axios.get(this.hostName+"/other/datas").then(t=>{this.list=t.data.data,console.log(this.list)}).catch(t=>{console.error("请联系管理员，开斌刘")})},methods:{goDetailFn(){this.$router.push("/project_details")},onLoad(){console.log("666"),setTimeout(()=>{for(let t=0;t<2;t++);this.loading=!1,this.list.length&&(this.finished=!0)},500)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"other"},[i("Bread"),i("div",{staticClass:"middle"},[t.list?i("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e){return i("div",{key:e.id,staticClass:"middle_pic_list",on:{click:t.goDetailFn}},[i("img",{attrs:{src:e.coverPic}})])}),0):t._e(),i("Bottom")],1)],1)},staticRenderFns:[]};var l=i("VU/8")(a,n,!1,function(t){i("t3Gq")},"data-v-3ee6ea88",null);e.default=l.exports},t3Gq:function(t,e){}});