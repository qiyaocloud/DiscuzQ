(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"03bQ":function(t,e,a){"use strict";a.r(e);var n=a("RhCA"),r=a("n9eR");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o=a("KHd+"),s=Object(o.a)(r.default,n.a,n.b,!1,null,null,null);e.default=s.exports},RhCA:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-rol-box"},[a("div",{staticClass:"user-rol-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",selectable:t.checkSelectable}}),t._v(" "),a("el-table-column",{attrs:{label:"级别名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{maxlength:"20"},model:{value:e.row._data.name,callback:function(a){t.$set(e.row._data,"name",a)},expression:"scope.row._data.name"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100",label:"显示组名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{disabled:"7"===e.row._data.id,"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:e.row._data.isDisplay,callback:function(a){t.$set(e.row._data,"isDisplay",a)},expression:"scope.row._data.isDisplay"}})]}}])}),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return["1"!==e.row._data.id?a("el-button",{attrs:{disabled:t.addStatus&&t.tableData.length-1===e.$index,type:"text"},on:{click:function(a){return t.$router.push({path:"/admin/rol-permission",query:{id:e.row._data.id,name:e.row._data.name}})}}},[t._v("设置")]):t._e(),t._v(" "),a("el-popover",{ref:"popover-"+e.$index,attrs:{width:"100",placement:"top"}},[a("p",[t._v("确定删除该项吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){e._self.$refs["popover-"+e.$index].doClose()}}},[t._v("\n              取消\n            ")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.singleDelete(e.$index,e.row._data.id),e._self.$refs["popover-"+e.$index].doClose()}}},[t._v("确定")])],1),t._v(" "),"1"!==e.row._data.id&&"6"!==e.row._data.id&&"7"!==e.row._data.id&&"10"!==e.row._data.id&&1!==e.row._data.default?a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"115"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!=e.row._data.id&&"6"!==e.row._data.id&&"7"!==e.row._data.id?a("el-radio",{attrs:{label:e.row._data.id},on:{change:function(a){return t.radioChange(e.row,e.$index)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("设为加入站点的默认级别")]):t._e()]}}])})],1)],1),t._v(" "),a("TableContAdd",{attrs:{cont:"新增"},on:{tableContAddClick:t.addList}}),t._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",loading:t.btnLoading,size:"medium"},on:{click:t.submitClick}},[t._v("提交")]),t._v(" "),a("el-button",{attrs:{size:"medium",loading:t.delLoading,disabled:t.deleteStatus},on:{click:t.deleteClick}},[t._v("删除")])],1)],1)},r=[]},dwjZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(a("QbLZ"));a("I1+7");var r=i(a("mHlf"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({name:"user-rol-view"},r.default)},mHlf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(a("4gYi")),r=o(a("pNQN")),i=o(a("kAKY"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{tableData:[],alternateLength:0,radio:"",alternateRadio:"",radioName:"",radioIndex:"",deleteStatus:!0,multipleSelection:[],addStatus:!1,btnLoading:!1,delLoading:!1,groupName:"",groupId:""}},methods:{handleSelectionChange:function(t){this.multipleSelection=t,this.multipleSelection.length>=1?this.deleteStatus=!1:this.deleteStatus=!0},radioChange:function(t,e){this.radioName=t._data.name,this.radioIndex=e,this.groupId=t._data.id},checkSelectable:function(t){switch(t._data.id){case"1":case"6":case"7":case"10":return!1;default:return!0}},addList:function(){this.alternateLength>=this.tableData.length&&this.tableData.push({_data:{name:"",type:"",color:"",icon:""}}),this.addStatus=!0},submitClick:function(){var t=this;if(this.btnLoading=!0,this.addStatus){for(var e={type:"groups",attributes:{name:"",default:""}},a=this.alternateLength;a<this.tableData.length;a++)e.attributes.name=this.tableData[a]._data.name;this.radioIndex+1===this.tableData.length&&(e.attributes.default=1),this.postGroups(e)}else{var n=[];this.tableData.forEach((function(e){n.push({attributes:{name:e._data.name,id:e._data.id,isDisplay:e._data.isDisplay,default:e._data.id==t.radio}})})),this.batchPatchGroup(n)}this.PermissionPurchaseAllowed()},singleDelete:function(t,e){t>this.alternateLength-1?(this.tableData.pop(),this.addStatus=!1):this.singleDeleteGroup(e)},deleteClick:function(){this.delLoading=!0;var t={id:[]};this.multipleSelection.forEach((function(e){t.id.push(e._data.id)})),this.batchDeleteGroup(t)},getGroups:function(){var t=this;this.appFetch({url:"groups",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.tableData=e.readdata,t.alternateLength=e.readdata.length,t.tableData.forEach((function(e){t.groupName=e._data.isDisplay,1==e._data.default&&(t.radio=e._data.id,t.alternateRadio=e._data.id)})))})).catch((function(t){}))},postGroups:function(t){var e=this;this.appFetch({url:"groups",method:"post",data:{data:t}}).then((function(t){e.btnLoading=!1,t.errors?t.errors[0].detail?e.$message.error(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$message.error(t.errors[0].code):(e.$message({message:"提交成功！",type:"success"}),e.addStatus=!1,e.getGroups())})).catch((function(t){}))},singleDeleteGroup:function(t){var e=this;this.appFetch({url:"groups",method:"delete",splice:"/"+t,data:{}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.$message({message:"删除成功！",type:"success"}),e.getGroups())})).catch((function(t){}))},batchDeleteGroup:function(t){var e=this;this.appFetch({url:"groups",method:"delete",data:{data:t}}).then((function(t){e.delLoading=!1,t.errors?e.$message.error(t.errors[0].code):(e.$message({message:"删除成功！",type:"success"}),e.getGroups())})).catch((function(t){}))},singlePatchGroup:function(t,e){var a=this;this.appFetch({url:"groups",method:"patch",splice:"/"+t,data:{data:{attributes:{name:e,default:1}}}}).then((function(t){a.btnLoading=!1,t.errors?a.$message.error(t.errors[0].code):(a.$message({message:"提交成功！",type:"success"}),a.getGroups())})).catch((function(t){}))},batchPatchGroup:function(t){var e=this;this.appFetch({url:"groups",method:"patch",data:{data:t}}).then((function(t){e.btnLoading=!1,t.errors?e.$message.error(t.errors[0].code):(e.$message({message:"提交成功！",type:"success"}),e.getGroups())})).catch((function(t){}))},PermissionPurchaseAllowed:function(){this.appFetch({url:"groups",method:"PATCH",splice:"/"+this.groupId,data:{data:{attributes:{name:this.radioName,is_paid:0}}}}).then((function(t){})).catch((function(t){}))}},created:function(){this.getGroups()},components:{Card:n.default,CardRow:r.default,TableContAdd:i.default}}},n9eR:function(t,e,a){"use strict";a.r(e);var n=a("dwjZ"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e.default=r.a}}]);