(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{347:function(t,e,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(120).default)("7e647d4a",content,!0,{sourceMap:!1})},357:function(t,e,r){"use strict";r(347)},358:function(t,e,r){var n=r(119)((function(i){return i[1]}));n.push([t.i,".top_bannerOne .sec_One[data-v-2131310f]{max-height:380px}.hi-50[data-v-2131310f]{height:49%!important;-o-object-fit:cover;object-fit:cover}.height_100[data-v-2131310f]{height:100%!important;-o-object-fit:cover;object-fit:cover;width:100%!important}",""]),n.locals={},t.exports=n},405:function(t,e,r){"use strict";r.r(e);r(42);var n=r(8),c=(r(49),r(90),r(70),{data:function(){return{loading:!0,limit:12,categories:[],sliders:[],currentIndex:0,adsData1:"",adsData2:""}},mounted:function(){this.slidersImg(),this.fetchData(),this.fetchAdsData()},methods:{handleCarouselSlide:function(t){var e=t.target;e.classList.contains("carousel_nav")&&e.querySelector(".carousel-inner .carousel-item:last-child").classList.contains("active")&&e.querySelector(".carousel-control-next").click()},redirectCategory:function(t){this.$router.push({path:"/category/category-grid",query:{slug:t}})},fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/unauthenticate/getCategoryList");case 2:r=e.sent,setTimeout((function(){t.loading=!1,t.categories=r.data}),2e3);case 4:case"end":return e.stop()}}),e)})))()},slidersImg:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("slider images..."),e.next=3,t.$axios.get("/unauthenticate/slidersImages");case 3:r=e.sent,t.sliders=r.data;case 5:case"end":return e.stop()}}),e)})))()},fetchAdsData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("/unauthenticate/getAdsbanner").then((function(e){t.adsData1=e.data.image1,t.adsData2=e.data.image2})).catch((function(e){t.error=e.message,console.error("Error fetching Top ads header banner data:",e)}));case 1:case"end":return e.stop()}}),e)})))()}}}),l=(r(357),r(33)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top_bannerOne"},[e("div",{staticClass:"row my-2"},[e("div",{staticClass:"col-xl-3 col-lg-3 col-md-12 col-sm-12 mini_tab_hide sec_One"},[e("div",{staticClass:"nav_menu"},[t.loading?e("div",{staticClass:"loading-indicator",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",alt:"Loader"}})],1)]):t._e(),t._v(" "),t.categories.length>0?e("nav",[t._l(t.categories,(function(r,n){return e("ul",{key:r.id},[n<t.limit?e("li",{key:r.id},[e("a",{staticClass:"d-flex justify-content-between align-items-center",attrs:{href:"#"},on:{click:function(e){return t.redirectCategory(r.slug)}}},[e("div",{staticClass:"d-flex align-items-center"},[e("i",{staticClass:"fa-solid fa-list",staticStyle:{"font-size":"10px"}}),t._v("\n\n                                    "+t._s(r.name)+"\n                                ")]),t._v(" "),e("i",{staticClass:"fa-solid fa-angle-right"})]),t._v(" "),e("div",{staticClass:"sub_menu"},[r.children&&r.children.length>0?e("div",{staticClass:"row"},t._l(r.children,(function(r){return e("div",{key:r.id,staticClass:"col-4"},[e("h6",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.redirectCategory(r.slug)}}},[t._v(" "+t._s(r.name))])]),t._v(" "),r.children&&r.children.length>0?e("ul",t._l(r.children,(function(r){return e("li",{key:r.id},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.redirectCategory(r.slug)}}},[t._v(t._s(r.name))])])})),0):t._e()])})),0):t._e()])]):t._e()])})),t._v(" "),e("ul",[e("li",[e("Nuxt-link",{staticClass:"d-flex justify-content-between",attrs:{to:"/category/all-categorys"}},[e("div",[e("img",{attrs:{src:"images/cat_svg/more-100.png",alt:""}}),t._v("All Categories")]),t._v(" "),e("div",[e("i",{staticClass:"fa-solid fa-angle-right"})])])],1)])],2):t._e()])]),t._v(" "),t.sliders.length>0?e("div",{staticClass:"col-xl-6 col-lg-9 col-md-12 col-sm-12 sec_One"},[e("div",{staticClass:"carousel_nav carousel w-100 height_100",attrs:{id:"carouselExample","data-bs-ride":"carousel","data-bs-interval":"3000"}},[e("div",{staticClass:"carousel-indicators"},t._l(t.sliders,(function(r,n){return e("button",{key:n,class:{active:n===t.currentIndex},attrs:{type:"button","data-bs-target":"#carouselExample","data-bs-slide-to":n}})})),0),t._v(" "),t.sliders.length>0?e("div",{staticClass:"carousel-inner height_100"},t._l(t.sliders,(function(t,r){return e("div",{key:t.id,staticClass:"carousel-item height_100",class:{active:0===r}},[e("img",{staticClass:"d-block w-100 height_100",attrs:{src:t.images,alt:"Slide "+(r+1)}})])})),0):t._e(),t._v(" "),t._m(0),t._v(" "),t._m(1)])]):t._e(),t._v(" "),e("div",{staticClass:"col-lg-3 col-12 d-xl-block d-none"},[e("div",{staticClass:"row",staticStyle:{height:"49%","object-fit":"cover"}},[e("div",{staticClass:"col-12"},[e("img",{staticClass:"img-fluid h-100",attrs:{src:t.adsData1,alt:""}})])]),t._v(" "),e("div",{staticClass:"row mt-2",staticStyle:{height:"49%","object-fit":"cover"}},[e("div",{staticClass:"col-12"},[e("img",{staticClass:"img-fluid h-100",attrs:{src:t.adsData2,alt:""}})])])])])])}),[function(){var t=this,e=t._self._c;return e("button",{staticClass:"carousel-control-prev",attrs:{"data-bs-target":"#carouselExample",type:"button","data-bs-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"carousel-control-next",attrs:{"data-bs-target":"#carouselExample",type:"button","data-bs-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"visually-hidden"},[t._v("Next")])])}],!1,null,"2131310f",null);e.default=component.exports}}]);