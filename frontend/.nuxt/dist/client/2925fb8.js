(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{325:function(t,e,r){"use strict";var n=r(2),c=r(91).find,o=r(147),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},327:function(t,e,r){"use strict";var n=r(2),c=r(91).findIndex,o=r(147),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},394:function(t,e,r){"use strict";r.r(e);r(43);var n=r(122),c=r(8),o=r(26),l=(r(14),r(71),r(35),r(327),r(325),r(221),r(44),r(92),r(23),r(50),r(49),{props:{receivedSlug:String},data:function(){var t;return t={loadings:!1,currentPage:1,loading:!1,cart:[]},Object(o.a)(t,"loading",!1),Object(o.a)(t,"prouducts",[]),Object(o.a)(t,"categories",[]),Object(o.a)(t,"pro_count",0),Object(o.a)(t,"categoryname",""),t},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.calculateSubtotal(),t.loadCart(),t.cartItemCount(),e.next=5,t.fetchDataCategory();case 5:return e.next=7,t.defalutLoading();case 7:case"end":return e.stop()}}),e)})))()},methods:{loadMore:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadings=!0,t.currentPage++,e.next=4,t.$axios.get("/unauthenticate/pagniatedProducts?page=".concat(t.currentPage)).then((function(e){t.prouducts=[].concat(Object(n.a)(t.prouducts),Object(n.a)(e.data.result))})).catch((function(t){})).finally((function(){t.loadings=!1}));case 4:case"end":return e.stop()}}),e)})))()},defalutLoading:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/pagniatedProducts").then((function(e){t.prouducts=e.data.result,t.pro_count=e.data.pro_count})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()},cartItemCount:function(){var t=0;this.cart.forEach((function(e){t+=e.quantity})),this.itemCount=t,console.log("Emitting cartItemCountUpdated event with itemCount:",this.itemCount),this.$eventBus.$emit("cartItemCountUpdated",this.itemCount)},updateQuantity:function(t,e){var r=this.cart.findIndex((function(e){return e.product.id===t}));-1!==r&&(this.cart[r].quantity=e,this.saveCart(),this.calculateSubtotal())},addToCart:function(t){var e=this.prouducts.find((function(e){return e.id===t}));this.cart.find((function(e){return e.product.id===t}))||this.cart.push({product:e,quantity:1}),this.saveCart(),this.cartItemCount(),this.calculateSubtotal()},removeFromCart:function(t){var e=this.cart.findIndex((function(e){return e.product.id===t.id}));-1!==e&&(this.cart[e].quantity>1?this.cart[e].quantity-=1:this.cart.splice(e,1),this.saveCart(),this.calculateSubtotal(),this.cartItemCount())},loadCart:function(){var t=localStorage.getItem("cart");t&&(this.cart=JSON.parse(t))},saveCart:function(){var t=this;this.loading=!0,localStorage.setItem("cart",JSON.stringify(this.cart)),setTimeout((function(){t.loading=!1}),2e3)},calculateSubtotal:function(){var t=0;return this.cart.forEach((function(e){var r=e.product;console.log("Quantity: ".concat(e.quantity,", Price: ").concat(r.price));var n=parseFloat(r.price.replace(/[^\d.]/g,""));isNaN(e.quantity)||isNaN(n)?console.error("Invalid quantity or price:",e.quantity,r.price):t+=e.quantity*n})),this.subtotal=t},categoryGrid:function(){var t=this.$route.query.slug;this.$router.push({path:"/category/category-list",query:{slug:t}})},redirectCategory:function(t){this.$router.push({path:"/category/category-list",query:{slug:t}})},fetchData:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.$axios.get("/unauthenticate/findCategorys/".concat(t)).then((function(t){e.prouducts=t.data.result,e.pro_count=t.data.pro_count,e.categoryname=t.data.categoryname})).catch((function(t){})).finally((function(){e.loading=!1}));case 3:r.sent;case 6:case"end":return r.stop()}}),r)})))()},fetchDataCategory:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/filterCategorys").then((function(e){t.categories=e.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()}}}),d=r(34),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"product_section"},[e("div",{staticClass:"row px-2"},[e("div",{staticClass:"col-md-4 desktop_view"},[e("div",{staticClass:"left_side_product",staticStyle:{"margin-top":"10px"}},[e("div",{staticClass:"category_list"},[e("h6",[t._v("Category")]),t._v(" "),e("ul",t._l(t.categories,(function(r){return e("li",{key:r.id},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.fetchData(r.slug)}}},[t._v(t._s(r.name))])])})),0)])])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"product_list p-0",staticStyle:{"margin-top":"10px"}},[t._m(0),t._v(" "),e("div",{staticClass:"grid_list p-3"},[e("div",[e("p",[t._v(t._s(t.prouducts.length)+" product found")]),t._v(" "),t.loading?e("div",{staticClass:"loading-indicator"},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",loading:"lazy",alt:"Loader"}})],1)]):t._e()]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row p-4"},t._l(t.prouducts,(function(r){return e("div",{key:r.id,staticClass:"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6"},[e("div",{staticClass:"product_grid"},[t.prouducts.length>0?e("nuxt-link",{attrs:{to:"/product-details/".concat(r.pro_slug)}},[e("img",{staticClass:"img-fluid",attrs:{src:r.thumnail_img,alt:""}}),t._v(" "),e("span",[t._v("Free Delivery")]),t._v(" "),e("strong",[t._v("Official Store ")]),t._v(" "),e("h1",[t._v(t._s(r.product_name))]),t._v(" "),e("p",[t._v("$"+t._s(r.price))]),t._v(" "),0!==r.discount?e("p",[e("strike",[t._v("$"+t._s(r.discount))]),t._v(" "),e("span",[t._v("-5%")])],1):t._e(),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"rating d-none"},[e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star"})]),t._v(" "),e("h6",[t._v("(200)")])]),t._v(" "),e("p",{staticClass:"left_item d-none"},[t._v("50 items left")]),t._v(" "),e("div",{staticClass:"progress d-none"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}})])]):t._e(),t._v(" "),e("button",{staticClass:"btn_cart",attrs:{type:"button"},on:{click:function(e){return t.addToCart(r.id)}}},[t._v("Add to cart\r\n                                        ")])],1)])})),0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("button",{staticClass:"btn_cart my-2 mx-auto",staticStyle:{visibility:"visible",width:"fit-content"},attrs:{disabled:t.loadings},on:{click:t.loadMore}},[t._v("\r\n                                        "+t._s(t.loadings?"Loading...":"Load more...")+"\r\n                                    ")])])])])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title_product top_title_here"},[e("div",[e("h6",[t._v("Sell On Ecommerce ")])]),t._v(" "),e("div",{staticClass:"d-none"},[e("label",{attrs:{for:""}},[t._v("Short By:")]),t._v(" "),e("select",{staticStyle:{color:"#110f0f"},attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[t._v("Popularity")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("New arrival")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("Low to High")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("high to low")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"d-flex"},[t("a",{staticClass:"filter_btn mobile_view",attrs:{type:"button"}},[t("i",{staticClass:"fa-solid fa-sliders"})])])}],!1,null,null,null);e.default=component.exports}}]);