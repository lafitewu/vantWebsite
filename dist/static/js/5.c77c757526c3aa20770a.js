webpackJsonp([5],{"0isC":function(t,e){},LSHy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Osha"),o=i("A6AK"),a={components:{Bread:s.a,Bottom:o.a},name:"other",data:()=>({footerFont:"谢语：爱就像蓝天白云",loading:!1,finished:!1,list:[]}),created(){this.axios.get(this.hostName+"/other/datas").then(t=>{this.list=t.data.data,console.log(this.list)}).catch(t=>{console.error("请联系管理员，开斌刘")})},methods:{goDetailFn(t){this.$router.push({path:"/project_details",query:{id:t.id}})},onLoad(){console.log("666"),setTimeout(()=>{for(let t=0;t<2;t++);this.loading=!1,this.list.length&&(this.finished=!0)},500)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"other"},[i("Bread"),i("div",{staticClass:"middle"},[t.list?i("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e){return i("div",{key:e.id,staticClass:"middle_pic_list",on:{click:function(i){return t.goDetailFn(e)}}},[i("img",{attrs:{src:e.coverPic}})])}),0):t._e(),i("Bottom")],1)],1)},staticRenderFns:[]};var l=i("VU/8")(a,n,!1,function(t){i("0isC")},"data-v-4229df7b",null);e.default=l.exports}});