webpackJsonp([4],{VtB5:function(t,i){},hCIW:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("Osha"),s=e("A6AK"),n={components:{Bread:a.a,Bottom:s.a},name:"file",data:()=>({footerFont:"谢语：爱就像蓝天白云",loading:!1,finished:!1,list:[]}),created(){this.axios.get(this.hostName+"/file/datas").then(t=>{this.list=t.data.data,console.log(t.data.data)}).catch(t=>{console.error("请联系管理员，开斌刘")})},methods:{goDetailFn(t){this.$router.push({path:"/project_details",query:{id:t.id}})},onLoad(){setTimeout(()=>{for(let t=0;t<2;t++);this.loading=!1,this.list.length&&(this.finished=!0)},500)}}},o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"file"},[e("Bread"),e("div",{staticClass:"middle"},[e("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,function(i){return e("div",{key:i.id,staticClass:"middle_file_list",on:{click:function(e){return t.goDetailFn(i)}}},[e("div",{staticClass:"middle_file_list_main"},[e("img",{attrs:{src:i.coverPic}}),e("div",{staticClass:"middle_list_main_info"},[t._v(t._s(i.name))])])])}),0),e("Bottom")],1)],1)},staticRenderFns:[]};var l=e("VU/8")(n,o,!1,function(t){e("VtB5")},"data-v-61e62467",null);i.default=l.exports}});