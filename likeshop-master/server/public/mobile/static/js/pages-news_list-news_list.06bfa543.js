(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news_list-news_list"],{"02c8":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{active:t.active,inactive:!t.active,tab:!0},style:t.shouldShow?"":"display: none;"},[t.shouldRender?t._t("default"):t._e()],2)},s=[]},"11db":function(t,e,i){var a=i("1862");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1dcb1ed7",a,!0,{sourceMap:!1,shadowMode:!1})},1440:function(t,e,i){"use strict";var a=i("46da"),n=i.n(a);n.a},1862:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tab.active[data-v-469015b5]{height:auto}.tab.inactive[data-v-469015b5]{height:0;overflow:visible}",""]),t.exports=e},"210d":function(t,e,i){"use strict";i.r(e);var a=i("da9d"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},2224:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCategoryList=s,e.getArticleList=o,e.getArticleDetail=l;var n=a(i("107a"));i("43c7");function s(t){var e=t.type,i=e?"help/category":"article/category";return delete t.type,n.default.get(i)}function o(t){var e=t.type,i=e?"help/lists":"article/lists";return delete t.type,n.default.get(i,{params:t})}function l(t){var e=t.type,i=e?"help/detail":"article/detail";return delete t.type,n.default.get(i,{params:{id:t.id}})}},"32c7":function(t,e,i){"use strict";i.r(e);var a=i("a793"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"44f4":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/information/information.wxss */.news_list .main .article-list[data-v-9ad65798]{padding-top:%?20?%}.news_list .main .article-list .article-item[data-v-9ad65798]{padding:%?20?%;border-bottom:var(--border);-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.news_list .main .article-list .article-item .info[data-v-9ad65798]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.news_list .main .article-list .article-item .img[data-v-9ad65798]{width:%?240?%;height:%?180?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.news_list .main .article-list[data-v-9ad65798]:last-of-type{border:none}.news_list .footer[data-v-9ad65798]{padding:%?30?% 0}uni-page-body .van-tabs .van-tab--active[data-v-9ad65798]{color:#333}.news_list .van-tab[data-v-9ad65798]{width:25%;-webkit-box-flex:0;-webkit-flex:none;flex:none}',""]),t.exports=e},"46da":function(t,e,i){var a=i("e75a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("678f7d50",a,!0,{sourceMap:!1,shadowMode:!1})},"5a1a":function(t,e,i){"use strict";i.r(e);var a=i("aaea"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"5ac2":function(t,e,i){"use strict";i.r(e);var a=i("b70ea"),n=i("32c7");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("1440");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"43b0f33a",null,!1,a["a"],o);e["default"]=r.exports},"5b28":function(t,e,i){var a=i("44f4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7c3d15bf",a,!0,{sourceMap:!1,shadowMode:!1})},a24d:function(t,e,i){"use strict";var a=i("5b28"),n=i.n(a);n.a},a793:function(t,e,i){"use strict";i("4160"),i("d81d"),i("a9e3"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tabs",props:{active:{type:Number,default:0},config:{type:Object,default:function(){return{}}}},provide:function(){return{tabs:this}},data:function(){return{tabList:[],tagIndex:0,slider:{left:0,width:0,scrollLeft:0},scorll:{},defaultConfig:{bgColor:"#fff",fontSize:26,color:"#333",activeColor:"#FF2C3C",itemWidth:0,underLinePadding:10,underLineWidth:0,underLineHeight:4,underLineColor:"#FF2C3C"}}},watch:{},created:function(){this.childrens=[]},mounted:function(){this.updateTabs()},methods:{updateTabs:function(){var t=this;this.tabList=this.childrens.map((function(t){var e=t.title,i=t.info,a=t.name,n=t.dot,s=t.titleStyle,o=t.active,l=t.updateRender;return{title:e,info:i,name:a,dot:n,titleStyle:s,active:o,updateRender:l}})),this.updateConfig(),this.tagIndex=this.active,this.$nextTick((function(){t.calcScrollPosition()}))},updateConfig:function(){this.defaultConfig=Object.assign(this.defaultConfig,this.config)},calcScrollPosition:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#_scroll").boundingClientRect((function(e){t.scorll=e,t.updateTabWidth()})).exec()},updateTabWidth:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this.tabList;if(0==i.length)return!1;var a=uni.createSelectorQuery().in(this);a.select("#_tab_"+e).boundingClientRect((function(a){i[e]._slider={width:a.width,left:a.left,scrollLeft:a.left-(i[e-1]?i[e-1]._slider.width:0)},t.tagIndex==e&&t.tabToIndex(t.tagIndex),e++,i.length>e&&t.updateTabWidth(e)})).exec()},tabToIndex:function(t){var e=this,i=this.tabList[t]._slider,a=uni.upx2px(this.defaultConfig.underLineWidth);a||(a=this.defaultConfig.itemWidth?uni.upx2px(this.defaultConfig.itemWidth)/3:this.tabList[t]["title"].length*uni.upx2px(this.defaultConfig.fontSize),a+=2*uni.upx2px(this.defaultConfig.underLinePadding)),this.childrens.forEach((function(i,a){var n=a===t;n===i.active&&i.inited||i.updateRender(n,e)}));var n=this.scorll.left||0;this.slider={left:i.left-n+(i.width-a)/2,width:a,scrollLeft:i.scrollLeft-n}},tabClick:function(t){this.tagIndex=t,this.tabToIndex(t),this.$emit("change",t)}}};e.default=a},aa48:function(t,e,i){"use strict";var a=i("11db"),n=i.n(a);n.a},aaea:function(t,e,i){"use strict";i("99af"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2224"),n=i("a6e8"),s=i("43c7"),o={data:function(){return{active:0,showLoading:!0,categoryList:[],newsList:[],page:1,status:n.loadingType.LOADING,bannerList:[],type:0,showAd:!1}},onLoad:function(t){this.id=t.id,this.type=t.type||"",this.type?uni.setNavigationBarTitle({title:"帮助中心"}):uni.setNavigationBarTitle({title:"商城资讯"}),this.showAd=!0,this.getCategoryListFun()},onReachBottom:function(){this.getArticleListFun()},methods:{changeActive:function(t){var e=this;this.active=t,this.page=1,this.newsList=[],this.status=n.loadingType.LOADING,setTimeout((function(){e.getArticleListFun()}),100)},getCategoryListFun:function(){var t=this;(0,a.getCategoryList)({type:this.type}).then((function(e){1==e.code&&(t.categoryList=e.data,console.log(t.categoryList),t.getArticleListFun())}))},getArticleListFun:function(){var t=this,e=this.active,i=this.page,n=this.newsList,o=this.status;(0,s.loadingFun)(a.getArticleList,i,n,o,{type:this.type,id:e?e.toString():"",page_no:i}).then((function(e){e&&(t.page=e.page,t.newsList=e.dataList,t.status=e.status)}))},goPage:function(t){var e=t.currentTarget.dataset.id;uni.navigateTo({url:"/pages/news_details/news_details?id=".concat(e,"&type=").concat(this.type)})}}};e.default=o},b70ea:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"_tab-box",style:{fontSize:t.defaultConfig.fontSize+"rpx",color:t.defaultConfig.color}},[i("v-uni-scroll-view",{staticClass:"scroll-view-h",style:{backgroundColor:t.defaultConfig.bgColor},attrs:{id:"_scroll","scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.slider.scrollLeft}},[i("v-uni-view",{staticClass:"_scroll-content"},[i("v-uni-view",{staticClass:"_tab-item-box",class:[t.defaultConfig.itemWidth?"_clamp":"_flex"]},[t._l(t.tabList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"_item",class:{_active:t.tagIndex===a},style:{color:t.tagIndex==a?t.defaultConfig.activeColor:t.defaultConfig.color,width:t.defaultConfig.itemWidth?t.defaultConfig.itemWidth+"rpx":""},attrs:{id:"_tab_"+a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a)}}},[t._v(t._s(e.title))])]}))],2),i("v-uni-view",{staticClass:"_underline",style:{transform:"translateX("+t.slider.left+"px)",width:t.slider.width+"px",height:t.defaultConfig.underLineHeight+"rpx",backgroundColor:t.defaultConfig.underLineColor}})],1)],1),i("v-uni-view",{staticClass:"tab-content"},[i("v-uni-view",[t._t("default")],2)],1)],1)},s=[]},b880:function(t,e,i){"use strict";i.r(e);var a=i("ca28"),n=i("5a1a");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("a24d");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"9ad65798",null,!1,a["a"],o);e["default"]=r.exports},ca28:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={swipers:i("f0ba").default,tabs:i("5ac2").default,tab:i("dd61").default,loadingFooter:i("2ef7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"news_list"},[i("v-uni-view",{staticClass:"contain"},[t.showAd?i("v-uni-view",{staticClass:"banner"},[i("swipers",{attrs:{pid:t.type?10:7,height:"300rpx",radius:"0rpx"}})],1):t._e(),t.categoryList.length?i("tabs",{attrs:{active:t.active},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeActive.apply(void 0,arguments)}}},[i("tab",{attrs:{title:"全部"}}),t._l(t.categoryList,(function(t,e){return i("tab",{key:e,attrs:{title:t.name}})}))],2):t._e(),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"article-list"},t._l(t.newsList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"article-item bg-white",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title lg line2 mb20"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"lighter line2"},[i("v-uni-view",[t._v(t._s(e.synopsis))])],1)],1),i("v-uni-image",{staticClass:"img ml20",attrs:{width:"240rpx",height:"180rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"row-between mt20"},[i("v-uni-view",{staticClass:"xs muted"},[t._v("发布时间: "+t._s(e.create_time))]),i("v-uni-view",{staticClass:"row"},[i("v-uni-image",{staticClass:"icon-sm",attrs:{src:"/static/images/icon_see.png"}}),i("v-uni-view",{staticClass:"ml10 xs muted"},[t._v(t._s(e.visit)+"人浏览")])],1)],1)],1)})),1),i("loading-footer",{attrs:{status:t.status,slotEmpty:!0}},[i("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"100rpx"},attrs:{slot:"empty"},slot:"empty"},[i("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/news_null.png"}}),i("v-uni-text",{staticClass:"nr muted"},[t._v("暂无数据～")])],1)],1)],1)],1)],1)],1)},s=[]},da9d:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{dot:{type:Boolean},info:{type:null},title:{type:String},titleStyle:{type:String},name:{type:[Number,String],value:""}},inject:["tabs"],data:function(){return{active:!1,shouldShow:!1,shouldRender:!1}},created:function(){this.tabs.childrens.push(this)},mounted:function(){this.update()},methods:{getComputedName:function(){return""!==this.data.name?this.data.name:this.index},updateRender:function(t,e){this.inited=this.inited||t,this.active=t,this.shouldRender=this.inited,this.shouldShow=t},update:function(){this.tabs&&this.tabs.updateTabs()}},computed:{changeData:function(){var t=this.dot,e=this.info,i=this.title,a=this.titleStyle;return{dot:t,info:e,title:i,titleStyle:a}}},watch:{changeData:function(t){this.update()}}};e.default=a},dd61:function(t,e,i){"use strict";i.r(e);var a=i("02c8"),n=i("210d");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("aa48");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"469015b5",null,!1,a["a"],o);e["default"]=r.exports},e75a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */._tab-box[data-v-43b0f33a]{width:100%;font-size:%?26?%;position:relative;z-index:10}._tab-box .scroll-view-h[data-v-43b0f33a]{height:%?80?%;line-height:%?80?%;white-space:nowrap;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}._tab-box .scroll-view-h ._scroll-content[data-v-43b0f33a]{width:100%;height:100%;position:relative;display:inline-block}._tab-box .scroll-view-h ._scroll-content ._tab-item-box[data-v-43b0f33a]{height:100%;display:inline-block}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex[data-v-43b0f33a]{display:-webkit-box;display:-webkit-flex;display:flex}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex ._item[data-v-43b0f33a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._clamp ._item[data-v-43b0f33a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item[data-v-43b0f33a]{height:100%;display:inline-block;text-align:center;position:relative;text-align:center;color:#333}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item._active[data-v-43b0f33a]{color:#e54d42}._tab-box .scroll-view-h ._scroll-content ._underline[data-v-43b0f33a]{height:%?4?%;background-color:#e54d42;border-radius:%?6?%;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;position:absolute;bottom:0}',""]),t.exports=e}}]);