(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-goods_seckill-goods_seckill"],{"07c6":function(t,e,i){"use strict";i.r(e);var a=i("89cf"),n=i("e816");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("df5a");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d7f27a88",null,!1,a["a"],s);e["default"]=c.exports},"07f9":function(t,e,i){"use strict";i.r(e);var a=i("adda"),n=i("a1cc");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("597f");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"60f6159f",null,!1,a["a"],s);e["default"]=c.exports},"0e9e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/active/goods_seckill/goods_seckill.wxss */.bg-gray[data-v-bada0de8]{background-color:#ccc!important}.goods-seckill .time-list .time-item[data-v-bada0de8]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:%?160?%;height:100%}.goods-seckill .time-list .time-item .state[data-v-bada0de8]{padding:0 %?10?%}.goods-seckill .goods-list .goods-item[data-v-bada0de8]{padding:%?30?%}.goods-seckill .goods-list .goods-item .goods-img[data-v-bada0de8]{width:%?180?%;height:%?180?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.goods-seckill .goods-list .goods-item .goods-info[data-v-bada0de8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?470?%}.goods-seckill .goods-list .goods-item .goods-info .sale-info[data-v-bada0de8]{padding:%?4?% %?16?%;background-color:#ffe9eb}.goods-seckill .goods-list .goods-item .goods-info .info-footer .btn[data-v-bada0de8]{padding:0 %?30?%}.goods-seckill .goods-list .goods-item .goods-info .progress-wrap .progress[data-v-bada0de8]{width:%?260?%;display:inline-block}.primary-btn[data-v-bada0de8]{padding:0 %?30?%;background:-webkit-gradient(linear,right top,left top,from(#ff2c3c),to(#f95f2f));background:-webkit-linear-gradient(right,#ff2c3c,#f95f2f);background:linear-gradient(270deg,#ff2c3c,#f95f2f)}.border-btn[data-v-bada0de8]{padding:0 %?30?%;border:1px solid #ff2c3c!important;color:#ff2c3c!important}.data-null[data-v-bada0de8]{padding-top:%?100?%}.data-null .img-null[data-v-bada0de8]{width:%?300?%;height:%?300?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}',""]),t.exports=e},1578:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:{type:Boolean,default:!0},useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,mode:{type:String,default:"scaleToFill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},customStyle:{type:Object,default:function(){}}},data:function(){return{error:!1,loading:!0,viewStyle:{}}},created:function(){this.setStyle()},methods:{setStyle:function(){var t=this.width,e=this.height,i=this.radius,a={};t&&(a.width=t),e&&(a.height=e),i&&(a["overflow"]="hidden",a["border-radius"]=i),this.viewStyle=a,this.customStyle&&(this.viewStyle=Object.assign(this.viewStyle,this.customStyle))},onLoaded:function(t){this.loading=!1,this.$emit("load",t.detail)},onErrored:function(t){this.error=!1,this.loading=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}},watch:{src:function(){this.error=!1,this.loading=!0},width:function(){this.setStyle()},height:function(){this.setStyle()}}};e.default=a},"23be":function(t,e,i){var a=i("f96f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("50deb798",a,!0,{sourceMap:!1,shadowMode:!1})},3901:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.float-tab[data-v-4aa48774]{position:fixed;right:%?16?%;bottom:%?200?%;width:%?96?%;height:%?96?%;z-index:777}.float-tab .tab-img[data-v-4aa48774]{width:100%;height:100%;position:absolute;-webkit-transition:all .5s;transition:all .5s}.float-tab .tab-img .tab-icon[data-v-4aa48774]{width:100%;height:100%}',""]),t.exports=e},"419b":function(t,e,i){var a=i("0e9e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("965e88c6",a,!0,{sourceMap:!1,shadowMode:!1})},"421e":function(t,e,i){"use strict";i.r(e);var a=i("94f6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},4323:function(t,e,i){var a=i("6c70");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("25353854",a,!0,{sourceMap:!1,shadowMode:!1})},"4b6c":function(t,e,i){"use strict";i("a9e3"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:[String,Number],default:28},secondSize:{type:[String,Number],default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:[String,Number],default:28},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&""!==t&&void 0!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}};e.default=a},"578f":function(t,e,i){"use strict";var a=i("419b"),n=i.n(a);n.a},5896:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"float-tab ~column"},[i("v-uni-navigator",{staticClass:"tab-img",style:{top:3*t.top+"px"},attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}},[i("v-uni-image",{staticClass:"tab-icon",attrs:{src:"/static/images/icon_float_home.png"}})],1),i("v-uni-navigator",{staticClass:"tab-img",style:{top:2*t.top+"px"},attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/bundle/contact_offical/contact_offical"}},[i("v-uni-image",{staticClass:"tab-icon",attrs:{src:"/static/images/icon_float_help.png"}})],1),i("v-uni-navigator",{staticClass:"tab-img",style:{top:t.top+"px"},attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/shop_cart/shop_cart"}},[i("v-uni-image",{staticClass:"tab-icon",attrs:{src:"/static/images/icon_float_cart.png"}})],1),i("v-uni-image",{staticClass:"tab-img",staticStyle:{"z-index":"99"},style:{transform:"rotateZ("+(t.showMore?135:0)+"deg)"},attrs:{src:"/static/images/icon_float_more.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1)},o=[]},"597f":function(t,e,i){"use strict";var a=i("4323"),n=i.n(a);n.a},"6c70":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".price-format[data-v-60f6159f]{font-family:Avenir,SourceHanSansCN,PingFang SC,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif}",""]),t.exports=e},8011:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={swipers:i("f0ba").default,customImage:i("07c6").default,priceFormat:i("07f9").default,loadingFooter:i("2ef7").default,floatTab:i("97c2").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-seckill"},[i("v-uni-view",{staticClass:"banner"},[i("swipers",{attrs:{pid:14,height:"284rpx",radius:"10rpx",padding:"20rpx"}})],1),i("v-uni-view",{staticClass:"time-list"},[i("v-uni-scroll-view",{staticStyle:{height:"120rpx","white-space":"nowrap"},attrs:{"scroll-into-view":"item-"+t.currentView,"scroll-x":"true","scroll-with-animation":"true"}},t._l(t.seckillTime,(function(e,a){return i("v-uni-view",{key:a,staticClass:"time-item column-center",attrs:{id:"item-"+a,"data-id":e.id,"data-index":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.exchangeTime.apply(void 0,arguments)}}},[i("v-uni-view",{class:"xl bold "+(1==e.active?"primary":"")},[t._v(t._s(e.start_time))]),i("v-uni-view",{class:"sm br60 state "+(1===e.active?"bg-primary white":"")+" "+(2===e.status?"muted":""),style:1==e.active?"background-color: #FF2C3C;color: white":""},[t._v(t._s(e.tips))])],1)})),1)],1),i("v-uni-view",{staticClass:"goods-list"},[t._l(t.seckillGoods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-item row bg-white",attrs:{"data-id":e.id,"data-shop_id":e.shop_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail.apply(void 0,arguments)}}},[i("custom-image",{staticClass:"goods-img mr20",attrs:{width:"180rpx",height:"180rpx",radius:"10rpx","lazy-load":!0,src:e.image}}),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name line2 mb10",staticStyle:{width:"490rpx"}},[t._v(t._s(e.name))]),i("v-uni-label",{staticClass:"sale-info xs primary br60"},[t._v("已抢"+t._s(e.sales_sum)+"件")]),i("v-uni-view",{staticClass:"info-footer row-between",staticStyle:{"margin-top":"5rpx"}},[i("v-uni-view",{staticClass:"price"},[i("price-format",{staticClass:"mr10",attrs:{price:e.seckill_price,color:"#FF2C3C",firstSize:34,secondSize:26,showSubscript:!0,subscriptSize:26}}),i("price-format",{staticClass:"line-through muted",attrs:{price:e.min_price,color:"#999999",firstSize:24,secondSize:24,showSubscript:!0,subscriptSize:24}})],1),i("v-uni-button",{class:"br60 white "+(2==t.currentStatus?"bg-gray":1==t.currentStatus?"primary-btn":"border-btn"),attrs:{size:"sm","data-id":e.id,"data-shop_id":e.shop_id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail.apply(void 0,arguments)}}},[t._v(t._s(2==t.currentStatus?"已结束":1==t.currentStatus?"立即抢购":"未开始"))])],1)],1)],1)})),i("loading-footer",{attrs:{status:t.loadingStatus,slotEmpty:!0}},[i("v-uni-view",{staticClass:"data-null column-center",attrs:{slot:"empty"},slot:"empty"},[i("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/goods_null.png"}}),i("v-uni-view",{staticClass:"muted nr"},[t._v("暂无商品～")])],1)],1)],2),i("float-tab")],1)},o=[]},"81b6":function(t,e,i){"use strict";i.r(e);var a=i("8011"),n=i("f1c7");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("578f");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"bada0de8",null,!1,a["a"],s);e["default"]=c.exports},"89cf":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("239c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{"custom-image":!0,"image-round":t.round},style:[t.viewStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():i("v-uni-image",{staticClass:"image",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrored.apply(void 0,arguments)}}}),t.loading&&t.showLoading?i("v-uni-view",{staticClass:"loading-wrap image"},[t.useLoadingSlot?t._t("loading"):i("u-icon",{attrs:{color:"#aaa",name:"photo-fill",size:"45"}})],2):t._e(),t.error&&t.showError?i("v-uni-view",{staticClass:"error-wrap image"},[t.useErrorSlot?t._t("error"):i("u-icon",{attrs:{color:"#aaa",name:"error-circle-fill",size:"45"}}),i("v-uni-text",{staticClass:"sm"},[t._v("加载失败")])],2):t._e()],1)},o=[]},"94f6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("43c7"),n={name:"float-tab",data:function(){return{showMore:!1,top:0}},mounted:function(){var t=this;(0,a.getRect)(".tab-img",!1,this).then((function(e){t.height=e.height,console.log(t.height)}))},methods:{onChange:function(){this.showMore=!this.showMore}},watch:{showMore:function(t){this.top=t?-this.height:0}}};e.default=n},"97c2":function(t,e,i){"use strict";i.r(e);var a=i("5896"),n=i("421e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("de61");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4aa48774",null,!1,a["a"],s);e["default"]=c.exports},a1cc:function(t,e,i){"use strict";i.r(e);var a=i("4b6c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},adda:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{class:(t.lineThrough?"line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?i("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),i("v-uni-text",{style:{"font-size":t.firstSize+"rpx","margin-right":"1rpx"}},[t._v(t._s(t.priceSlice.first))]),t.priceSlice.second?i("v-uni-text",{style:{"font-size":t.secondSize+"rpx"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()],1)},o=[]},bed0:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getGoodsCoupon=o,e.getCouponList=s,e.getActivityGoodsLists=r,e.getSeckillTime=c,e.getSeckillGoods=l,e.getGroupList=u,e.getUserGroup=d,e.getTeamInfo=f,e.teamCheck=g,e.teamBuy=p,e.getBargainList=h,e.getBargainDetail=v,e.getBargainNumber=m,e.launchBargain=b,e.getBargainActivityList=w,e.getBargainActivityDetail=y,e.getBargainPost=k,e.helpBargain=S,e.closeBargainOrder=x;var n=a(i("107a"));i("43c7");function o(t){return n.default.get("coupon/getGoodsCoupon",{params:t})}function s(t){return n.default.get("coupon/couponList",{params:t})}function r(t){return n.default.get("activity_area/activityGoodsList",{params:t})}function c(){return n.default.get("seckill/seckillTime")}function l(t){return n.default.get("seckill/seckillGoods",{params:t})}function u(t){return n.default.get("team/teamGoodsList",{params:t})}function d(t){return n.default.get("user/myTeam",{params:t})}function f(t){return n.default.get("team/teamInfo",{params:t})}function g(t){return n.default.post("team/check",t)}function p(t){return n.default.post("team/buy",t)}function h(t){return n.default.get("bargain/lists",{params:t})}function v(t){return n.default.get("bargain/detail",{params:t})}function m(){return n.default.get("bargain/barginNumber")}function b(t){return n.default.post("bargain/sponsor",t)}function w(t){return n.default.get("bargain/orderList",{params:t})}function y(t){return n.default.get("bargain/bargainDetail",{params:t})}function k(t){return n.default.get("share/shareBargain",{params:t})}function S(t){return n.default.post("bargain/knife",t)}function x(t){return n.default.get("bargain/closeBargain",{params:t})}},d5a0:function(t,e,i){var a=i("3901");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("25a59324",a,!0,{sourceMap:!1,shadowMode:!1})},de61:function(t,e,i){"use strict";var a=i("d5a0"),n=i.n(a);n.a},df5a:function(t,e,i){"use strict";var a=i("23be"),n=i.n(a);n.a},e816:function(t,e,i){"use strict";i.r(e);var a=i("1578"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f1c7:function(t,e,i){"use strict";i.r(e);var a=i("feb0"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f96f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.custom-image[data-v-d7f27a88]{position:relative;display:block;width:100%;height:100%}.custom-image.image-round[data-v-d7f27a88]{overflow:hidden;border-radius:50%}.custom-image .image[data-v-d7f27a88]{display:block;width:100%;height:100%}.custom-image .loading-wrap[data-v-d7f27a88],\n.custom-image .error-wrap[data-v-d7f27a88]{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:%?28?%;background-color:#f7f8fa}',""]),t.exports=e},feb0:function(t,e,i){"use strict";i("c740"),i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("bed0"),n=i("a6e8"),o=i("43c7"),s={data:function(){return{currentView:0,bannerList:[],seckillTime:[],seckillGoods:[],page:1,loadingStatus:"loading",currentId:0,currentStatus:0,isDataNull:!1,id:""}},components:{},props:{},onLoad:function(t){this.getSeckillTimeFun()},onReachBottom:function(){this.getSeckillGoodsFun(this.currentId)},methods:{getSeckillTimeFun:function(){var t=this,e=this.currentView,i=this.currentStatus;(0,a.getSeckillTime)().then((function(a){if(1==a.code){if(!a.data.length&&a.data.length<=0)return void(t.isDataNull=!0);var n=a.data.findIndex((function(t){return 1==t.status}));-1==n&&(n=a.data.findIndex((function(t){return 0==t.status}))),-1==n&&(n=0),a.data[n].active=1,e=n-2,i=a.data[n].status,e<0&&(e=0),t.seckillTime=a.data,t.id=a.data[n].id,t.currentView=e,t.currentStatus=i,t.getSeckillGoodsFun(a.data[n].id)}}))},getSeckillGoodsFun:function(t){var e=this,i=this.page,n=this.seckillGoods;(0,o.loadingFun)(a.getSeckillGoods,i,n,this.loadingStatus,{id:t}).then((function(t){t&&(e.page=t.page,e.seckillGoods=t.dataList,e.loadingStatus=t.status)}))},exchangeTime:function(t){var e=t.currentTarget.dataset,i=e.id,a=e.index,o=this.currentView,s=this.seckillTime,r=this.currentStatus;s.forEach((function(t,e){a==e?(t.active=1,r=t.status):t.active=0})),-1==a&&(a=0),o=a-2,o<0&&(o=0),this.page=1,this.currentView=o,this.isDataNull=!1,this.currentId=i,this.seckillGoods=[],this.loadingStatus=n.loadingType.LOADING,this.seckillTime=s,this.currentStatus=r,this.getSeckillGoodsFun(i)},goGoodsDetail:function(t){var e=t.currentTarget.dataset,i=e.id;e.shop_id;uni.navigateTo({url:"/pages/goods_details/goods_details?id="+i})},goToBuy:function(t){console.log("goToBuy"),console.log(t)}}};e.default=s}}]);