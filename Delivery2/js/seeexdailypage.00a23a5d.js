(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["seeexdailypage"],{"05de":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("nav-bar-top",{attrs:{title:"延迟申请"},on:{rightClick:t.showTime},scopedSlots:t._u([{key:"right",fn:function(){return[a("svg-icon",{attrs:{iconClass:"timelou"}})]},proxy:!0}])}),a("div",{staticClass:"home"},[a("van-pull-refresh",{on:{refresh:t.onRefresh},scopedSlots:t._u([{key:"pulling",fn:function(e){return[a("svg-icon",{style:{transform:"scale("+e.distance/80+")"},attrs:{iconClass:"Loading"}}),a("span",{staticClass:"refresh_text"},[t._v("加载")])]}},{key:"loosing",fn:function(){return[a("svg-icon",{attrs:{iconClass:"Loading"}}),a("span",{staticClass:"refresh_text"},[t._v("加载")])]},proxy:!0},{key:"loading",fn:function(){return[a("svg-icon",{attrs:{iconClass:"shuaxin"}}),a("span",{staticClass:"refresh_text"},[t._v("刷新")])]},proxy:!0}]),model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.ifList,expression:"ifList"}],staticClass:"home_padd"},t._l(t.commiList,(function(e,s){return a("div",{key:s,staticClass:"daily_seebox",on:{click:function(e){return t.routeItem("/ExtentionDetail",s)}}},[a("div",{staticClass:"daily_seedate"},[t._v(t._s(e.date)+" "+t._s(e.time))]),a("div",{staticClass:"daily_seecontent"},[a("div",{staticClass:"text textEllipsis",staticStyle:{width:"90%"}},[t._v("任务："+t._s(e.taskName))]),a("div",{staticClass:"text"},[t._v("申请日期："+t._s(e.date))]),a("div",{staticClass:"text"},[t._v("申请延迟工时："+t._s(e.workerHour))]),a("div",{staticClass:"daily_seecontent_stepline"},[a("van-steps",{attrs:{"active-color":"#5a5959",active:e.changestatus,"active-icon":"success"}},t._l(e.state,(function(e,s){return a("van-step",{key:s},[t._v(t._s(e))])})),1),a("div",{staticClass:"bottom_text"},[a("span",[t._v("我")]),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("项目经理审批")]),a("span",[t._v("经理审批")])])],1)])])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.ifList,expression:"!ifList"}],staticClass:"home_noContent"},[a("div",{staticClass:"home_noContent_box"},[a("img",{attrs:{src:s("fc16")}}),a("div",[t._v("延期申请内容为空")]),a("div",[t._v("请填写当日延迟申请哦~")])])])]),a("div",{staticClass:"home_pop"},[a("van-popup",{style:{width:"80%",height:"100%",background:"#d3d3d3"},attrs:{position:"right","get-container":".contentBox"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"contentBox"},[a("div",{staticClass:"ruleForm"},[a("div",{staticClass:"formItem"},[a("van-field",{attrs:{"is-link":"",readonly:"",label:"提交开始时间",placeholder:"请选择"},on:{click:function(e){t.startTimePop=!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),a("van-popup",{attrs:{position:"bottom"},model:{value:t.startTimePop,callback:function(e){t.startTimePop=e},expression:"startTimePop"}},[a("van-datetime-picker",{attrs:{type:"date","max-date":t.maxDate,title:" "},on:{cancel:function(e){t.startTimePop=!1},confirm:t.onConfirmStartTime},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1),a("div",{staticClass:"formItem"},[a("van-field",{attrs:{"is-link":"",readonly:"",label:"提交结束时间",placeholder:"请选择"},on:{click:function(e){t.endTimePop=!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),a("van-popup",{attrs:{position:"bottom"},model:{value:t.endTimePop,callback:function(e){t.endTimePop=e},expression:"endTimePop"}},[a("van-datetime-picker",{attrs:{type:"date","max-date":t.maxDate,title:" "},on:{cancel:function(e){t.endTimePop=!1},confirm:t.onConfirmEndTime},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)]),a("div",{staticClass:"statusSelect_btn box_frame"},[a("div",{staticClass:"checktitle"},[t._v("审批结果")]),a("div",{staticClass:"statusCheckBtn box_frame-row"},[a("div",{class:{bgColor:t.applyStatus},on:{click:function(e){t.applyStatus=!t.applyStatus}}},[t._v(" 已通过 ")]),a("div",{class:{bgColor:t.passStatus},on:{click:function(e){t.passStatus=!t.passStatus}}},[t._v(" 未通过 ")]),a("div",{class:{bgColor:t.checkStatus},on:{click:function(e){t.checkStatus=!t.checkStatus}}},[t._v(" 审批中 ")])])]),a("div",{staticClass:"timeSelect_btn flex_evenly"},[a("div",{staticClass:"timeSelect_btn_cancel",on:{click:t.resetCheck}},[t._v("重置")]),a("div",{staticClass:"timeSelect_btn_confirm",on:{click:t.getSelectComm}},[t._v("确认")])])])])],1),a("div",{staticClass:"home_edit box_frame"},[a("div",[a("svg-icon",{attrs:{iconClass:"bu"},on:{click:function(e){return t.routeItem("/WriteExtention")}}})],1)])],1)],1)},i=[],n=(s("99af"),s("0032")),o=(s("2df3"),{components:{SvgIcon:n["a"]},name:"SeeExtention",data:function(){return{commiList:[{time:"7:30",date:"2021-4-30",state:["已申请","审批中","审批中"],taskName:"海外分行功能优化细化001-百姓",workerHour:"3小时",status:"0",id:"1",changestatus:"0"},{time:"7:30",date:"2021-4-30",state:["已申请","已通过","审批中"],taskName:"海外分行功能优化细化001-百姓",workerHour:"3小时",status:"1",id:"1",changestatus:"1"},{time:"7:30",date:"2021-4-30",state:["已申请","拒绝","审批中"],taskName:"2.X16 乘车乘车码原型设计3码原型设计3.X16 乘车码原型设计",workerHour:"3小时",status:"-1",id:"1",changestatus:"1"},{time:"7:30",date:"2021-4-30",state:["已申请","已通过","拒绝"],taskName:"2.X16 乘车乘车码原型设计3码原型设计3.X16 乘车码原型设计",workerHour:"3小时",status:"-2",id:"1",changestatus:"2"},{time:"7:30",date:"2021-4-30",state:["已申请","已通过","已通过"],taskName:"2.X16 乘车乘车码原型设计3码原型设计3.X16 乘车码原型设计",workerHour:"3小时",status:"2",id:"1",changestatus:"2"}],isLoading:!1,show:!1,startDate:"",endDate:"",currentDate:new Date,maxDate:new Date,startTimePop:!1,endTimePop:!1,applyStatus:!1,passStatus:!1,checkStatus:!1,ifList:!0}},methods:{showTime:function(){this.resetCheck(),this.show=!0},formatDate:function(t){return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())},onConfirmStartTime:function(t){this.startTimePop=!1,this.startDate="".concat(this.formatDate(t))},onConfirmEndTime:function(t){this.endTimePop=!1,this.endDate="".concat(this.formatDate(t))},resetCheck:function(){this.startDate="",this.endDate="",this.currentDate=new Date,this.applyStatus=!1,this.passStatus=!1,this.checkStatus=!1},getSelectComm:function(){this.show=!1;var t=[];this.applyStatus&&t.push(0),this.passStatus&&t.push(1),this.checkStatus&&t.push(2)},onRefresh:function(){var t=this;setTimeout((function(){t.isLoading=!1}),1e3)},routeItem:function(t,e){if(e>=0){var s=-1;this.commiList[e].status<0&&(s=1),this.$router.push({path:t,query:{refuse:s,id:JSON.stringify(this.commiList[e].id),date:JSON.stringify(this.commiList[e].date)}})}else this.$router.push(t)}}}),c=o,r=s("2877"),l=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=l.exports},"2df3":function(t,e,s){},fc16:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABVCAYAAAAIebl7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAicSURBVHhe7Z1NaFRXFMcz41tMklG6cCE0CwtdKI1gcIwpuDDgQqgLg5FW2qKBSltEqGChoQ2t1FLBFoUWatGikIiCSi2mNAshhVqaZCIRGqiLgi5a6iILSQYz4kzS//+9M9c7b9448/I+MpN5PxjuOTOZj/d/59577sd7iTW5ZHx8PBWPx/cuLCxc37Zt26Q8HRj4vs2rVq3am8/nf8f3jcjTgTE9PZ2cn5//AOZMJpM5393dnbNeKcWVePLB/8VisSTcHA7o1SAFTKfTvfiuyzANPHKwN27ZsuVv88UAGB0dNVavXv0HzJT1TFN/KpU6KXYJcSmr4smTJ+tEOGIgIq5OTU29IL7vaMIRY3Z29oHYgbBmzZpTKArCkVYpHXElnpz1K5Znsh7Rd07sICgIZ/K8KuSVycnJ3YuLi6yuJrBncrnc9+I64ko8kkgkDuGD9arTi+r1nth1ydjYWBuO6YK4Joj6vq6urn/EdcS1eO3t7Rl0FvthqijAF51mwy5uXcF2Ds3PZRzDWnmKx3MGbd2wuGVxLR5hJwEBPxSXJPADBtmhiF83JJPJTyDWdnHJJNpW/djKsiTxSGdn5xmE+g1xSTs6lG/ErgsmJiZ2QriPxWU7l4G/v9q2dcniEcMw+lCodgFffhA/6A1xaxp0EGuRr7KdU50Sfv8hN6mQJ/E6OjoeobC3f+fu3Lnzsri1zCAebZZpCncetUnPJCriSTyChvU2igHLM8VL4odcRUOckKdqDkTdRyh2WZ7JdHNz81Gxq8azeESycH3otBkJ55di1xQcXqL43PJMsswemEWIXzW+iEeQLLP9e2h5ZjX4AGd4j7g1AUdDHBXB1Nu5o6iu0+K6wjfxkL48xBl8G6Zq//DDLjABFXfZkdHQesszubJ169azYrvGN/EIzuAtCPaFuGz/eKYvMxGVp5YNGQX1Wp7JA/y298VeEr6KRzKZzAkIyE7EBAJuRyKqtzGhw9EPfsdpcQlnhPZJtrBkfBePCSZ+2H4IOCNPUcBjTEjFDRWOejj6gal6fzQv/X5MpfkuHuGAWtq/AgYS0kFEwDrxQ0NGPe2WZzKC5uUrsT0RiHiEs76IOP1HrkMEfCp2KDDaUQMOiks4GtJPqicCE49ggN2PQq8eG6SsChw4G/Ss5Zli6BFUEUS7PlGRQ23oQ06qmhOvBCoe2z9E2z6IMCydCMWsGqYReB9nOBgxQ27zsbm5uWFE/0V8xhjcHmYD1isRERERERERERER5al6rwonNpFsHkDSuRvusk8xBQST6EtIroeqWUGrKJ5sfuHguq53BbjkViKR6Kk0NV9xeAbhuNlmJQt3DQ/7BqKd8/Pz6UqLWM+NPFmD+NHyzIF6Bo8BDLiH/Bxg1wLpdHoHmiSu46ppeh4rxtcnxC2hrHisrslk8i98YGENlrMb3RCNg+wViWyk5P68QsRl8/n8S1yfEb+IstW2paWFWxHU4jVnX1eycAQi3UW06eu3CdSyd8Quoax4OANvimlWV4h5XtwVjUyD3ROXKB3sOIrHeX98gFpzRQQOLWVRuF7Bsf8gJo99Q7ntc47iPX78eA/epGZhUe/VhzUCqKoXUagZbMMwDohZhKN4EO51McldP1aa6gnJJNT2OURir9Pac4l43HoF8dQmGD2EGwkct74fua21tXWH2IoS8agyioLKWYTskNgNBTqOX6GF6jhQlUuqrlO11XuXa15X1esZvdbB3mMfcRSJNzU1tR5VVu3P1d/ciOgdBztQVF19r0uxeLlc7i0xKdw9hq64DYm947B1pMXi6S82etQVgA6q42BHyg5V3GfiSSJYWJHP4U0N2VHYsXUcBoapqnYq8dCr6h3FjXKD4UZEr4V67VTi4Q/UJQCNNqKohK3j6Crs9jenpGQua5R2gIwg5C91dnYG1hzIJabcxBjoVl4E2nFU588KkVd25sBHduEMXghqj57kYNxzHMYeaFOvgnhF+UuA8CK5LrF9paWlZQOiLrBrf3XwPc+qLbrfRZYEuU3FRSE3cHorm83OicuQP4KQ/1Zc38AxcFXvpuWZk7eb3G5Jq4RdJ9VhBIXMA6qDwFl7RUy/URsfcYIyfgvnRODiCfqBMEJ8B4K9Jia5K2WghCIeDuy6mKSNvbvYvsDUARGt2lJ8309iBkoo4mUyGY4PVdKNA+WNEHwDYvE6NzWNJnlZ4IQiHrcu4AD1ycXUxMSEuhmCF5jboVDZAk7MFRnQB05YbV5Tc3MzLytQK/OIjlNeL2yR3fHqxgo4QY+ePn2qLl8NmtDEk173iOWZ8MKWmxBADbTdQOERZb/hoV8uMFDpjhR+Epp4BNWJlxQcF5dwUXkQDX7VIw9e9om/P4X3/QLhVFIM+2IQ+ePzCFU8wjEhDvSMuCYQ9CBGHveRhH7HZNc+3U2fkQbRTudyufv4+2N4Wl/NujY7O3tI7NAIfIRRDohxDNGj95JFQKAZiMyNRUmUagLSDl4/id58oNo7Ungh9BFGOTACYAfSjYdjQiuCcU3FUTiIxrtQ9CCS+8MQzollE4/g7N3GowNmD8Tg5VXViMAF+D5E20a8V7+vS+gsW7V1gp0BUo3diDbOWryIas1pbwr6L557kM/nR5ZzhtuuU02JV+vUTJu3EojE80Akngci8TwQieeBSDwPROJ5IBLPA5F4HojE80CJeBiCuLpxTINRNEtdEE9dcwAi8RyQ+wAW7YMpiKcvSh+WMkLDMIx3xTQnalma4sH5maWwM51Ol71YrREZHx/ndSm8SatJPB43795tTj/JZpw/Yeq3hDwbi8W+DvJfKNQyXDfhzisIdRg68E5o5nIBAu1RPp/fxFU6NXeHjqJol5EGJx85Fe641tBoQDy1y0v1tqlUanjBumG+faaWS4INLxwjTheOlMwacyocYcl7fPKS0Zq50+xyAcFm2MZxJ0KYC+ornKam/wHnuI6xTm1soQAAAABJRU5ErkJggg=="}}]);