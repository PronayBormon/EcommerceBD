(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{320:function(t,e,r){"use strict";var c=r(2),n=r(89).find,o=r(147),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),c({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},321:function(t,e,r){"use strict";var c=r(2),n=r(89).findIndex,o=r(147),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),c({target:"Array",proto:!0,forced:d},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},401:function(t,e,r){"use strict";r.r(e);r(42);var c=r(8),n=(r(49),r(15),r(34),r(321),r(320),r(218),r(43),r(90),{data:function(){return{loading:!1,cart:[],products:[],product:[],categories:[],pro_count:0,categoryname:""}},mounted:function(){this.calculateSubtotal(),this.loadCart(),this.cartItemCount(),this.fetchData(),this.fetchDataCategory()},methods:{cartItemCount:function(){var t=0;this.cart.forEach((function(e){t+=e.quantity})),this.itemCount=t,console.log("Emitting cartItemCountUpdated event with itemCount:",this.itemCount),this.$eventBus.$emit("cartItemCountUpdated",this.itemCount)},updateQuantity:function(t,e){var r=this.cart.findIndex((function(e){return e.product.id===t}));-1!==r&&(this.cart[r].quantity=e,this.saveCart(),this.calculateSubtotal())},addToCart:function(t){var e=this.products.find((function(e){return e.id===t})),r=this.cart.find((function(e){return e.product.id===t}));r?r.quantity+=1:(this.cart.push({product:e,quantity:1}),Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(t){t.onmouseenter=Swal.stopTimer,t.onmouseleave=Swal.resumeTimer}}).fire({icon:"success",title:"Product successfully Added to cart"}));this.saveCart(),this.cartItemCount(),this.calculateSubtotal()},removeFromCart:function(t){var e=this.cart.findIndex((function(e){return e.product.id===t.id}));-1!==e&&(this.cart[e].quantity>1?this.cart[e].quantity-=1:this.cart.splice(e,1),this.saveCart(),this.calculateSubtotal(),this.cartItemCount())},loadCart:function(){var t=localStorage.getItem("cart");t&&(this.cart=JSON.parse(t))},saveCart:function(){var t=this;this.loading=!0,localStorage.setItem("cart",JSON.stringify(this.cart)),setTimeout((function(){t.loading=!1}),2e3)},calculateSubtotal:function(){return 0},fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.$route.query.slug,e.prev=2,e.next=5,t.$axios.get("/unauthenticate/brandproductList/".concat(r)).then((function(e){t.products=e.data.products,t.product=e.data.products}));case 5:e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:return e.prev=10,t.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,8,10,13]])})))()},categoryGrid:function(){var t=this.$route.query.slug;this.$router.push({path:"/category/category-list",query:{slug:t}})},redirectCategory:function(t){this.$router.push({path:"/category/category-list",query:{slug:t}})},fetchDataCategory:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/filterCategorys").then((function(e){t.categories=e.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()}}}),o=r(33),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"product_section"},[e("div",{staticClass:"row px-2"},[e("div",{staticClass:"col-md-4 desktop_view"},[e("div",{staticClass:"left_side_product"},[e("div",{staticClass:"category_list"},[e("h6",[t._v("Category")]),t._v(" "),e("ul",t._l(t.categories,(function(r){return e("li",{key:r.id},[e("nuxt-link",{attrs:{to:"/category/category-grid?slug=".concat(r.slug)}},[t._v(t._s(r.name))])],1)})),0)])])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"product_list"},[e("div",{staticClass:"title_product"},[e("div",[e("h6",[t._v(t._s(t.categoryname))])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"grid_list"},[e("div",[e("p",[t._v(t._s(t.pro_count)+" product found")])]),t._v(" "),e("div",{staticClass:"d-flex"},[t._m(1),t._v(" "),e("a",{attrs:{href:"#"},on:{click:t.categoryGrid}},[e("i",{staticClass:"fa-solid fa-list"})]),t._v(" "),e("Nuxt-Link",{staticClass:"active",attrs:{to:"#"}},[e("i",{staticClass:"fa-solid fa-grip"})])],1),t._v(" "),e("div",{staticClass:"filter_modal"},[t._m(2),t._v(" "),e("div",{staticClass:"modal_fdiv"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"left_side_product"},[e("div",{staticClass:"category_list"},[e("h6",[t._v("Category")]),t._v(" "),e("ul",t._l(t.categories,(function(r){return e("li",{key:r.id},[e("nuxt-link",{attrs:{to:"category/category-grid?slug=".concat(r.slug)}},[t._v(t._s(r.name))])],1)})),0)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])])])])])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.products,(function(r){return e("div",{key:t.product.id,staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"},[e("div",{staticClass:"product_grid"},[e("nuxt-link",{attrs:{to:"/product-details/".concat(r.slug)}},[e("img",{staticClass:"img-fluid",attrs:{src:r.image,alt:r.name}}),t._v(" "),1==r.free_shopping?e("span",[t._v("Free Delivery")]):t._e(),t._v(" "),r.seller_name?e("strong",[t._v(t._s(r.seller_name)+" ")]):e("strong",[t._v("Admin Seller")]),t._v(" "),e("h1",[t._v(t._s(r.name))]),t._v(" "),e("div",[1==r.discount_status?e("div",{staticClass:"d-flex align-items-center"},[0!==r.discount?e("p",{staticClass:"me-1"},[t._v("$"+t._s(r.percent_discount))]):e("p",{staticClass:"me-1"},[t._v("$"+t._s(r.price))]),t._v(" "),0!==r.discount?e("p",[e("strike",[t._v("$"+t._s(r.price))]),t._v(" "),e("span",[t._v(t._s(r.discount)+"%")])],1):t._e()]):2==r.discount_status?e("div",{staticClass:"d-flex align-items-center"},[0!==r.discount?e("p",{staticClass:"me-1"},[t._v("$"+t._s(r.fixed_discount)+"\n                                                    ")]):e("p",{staticClass:"me-1"},[t._v("$"+t._s(r.price))]),t._v(" "),0!==r.discount?e("p",[e("strike",[t._v("$"+t._s(r.price))]),t._v(" "),e("span",[t._v("$"+t._s(r.discount))])],1):t._e()]):e("p",[t._v("$"+t._s(r.price))])])]),t._v(" "),t._m(9,!0),t._v(" "),e("button",{staticClass:"btn_cart",attrs:{type:"button"},on:{click:function(e){return t.addToCart(r.id)}}},[t._v("Add to\n                                            cart")])],1)])})),0),t._v(" "),t._m(10)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",[e("label",{attrs:{for:""}},[t._v("Short By:")]),t._v(" "),e("select",{attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[t._v("Popularity")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("New arrival")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("Low to High")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("high to low")])])])},function(){var t=this._self._c;return t("a",{staticClass:"filter_btn mobile_view",attrs:{type:"button"}},[t("i",{staticClass:"fa-solid fa-sliders"})])},function(){var t=this._self._c;return t("div",{staticClass:"row px-4"},[t("div",{staticClass:"col-6"}),this._v(" "),t("div",{staticClass:"col-6 text-end"},[t("i",{staticClass:"fa-solid fa-x filter_close",staticStyle:{cursor:"pointer"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Express delivery")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("DHL ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Shipped from ")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh\n                                                                ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh\n                                                                ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("Brand")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Addidas\n                                                                ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("AGM ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"price_range"},[e("div",{staticClass:"sidebr_title"},[e("h6",[t._v("Price Range ")]),t._v(" "),e("button",{staticClass:"btn_apply",attrs:{type:"button"}},[t._v("Apply")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"price-filter-range",attrs:{id:"slider-range",name:"rangeInput"}}),t._v(" "),e("div",{staticClass:"d-flex",staticStyle:{margin:"10px auto"}},[e("input",{staticClass:"price-range-field",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"9900",oninput:"validity.valid||(value='0');",id:"min_price"}}),t._v(" "),e("input",{staticClass:"price-range-field",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"10000",oninput:"validity.valid||(value='10000');",id:"max_price"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("size")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("XS")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("S")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("Gender")]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Boys")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Girls")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star"})]),t._v(" "),e("h6",[t._v("(200)")])])},function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"})])}],!1,null,null,null);e.default=component.exports}}]);