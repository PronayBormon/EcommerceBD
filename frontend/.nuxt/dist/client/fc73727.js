(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{321:function(t,e,r){"use strict";var n=r(2),c=r(89).findIndex,o=r(147),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},348:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(120).default)("599f1e04",content,!0,{sourceMap:!1})},359:function(t,e,r){"use strict";r(348)},360:function(t,e,r){var n=r(119)((function(i){return i[1]}));n.push([t.i,".catLink{font-size:14px}.catLink i{margin-left:5px}",""]),n.locals={},t.exports=n},409:function(t,e,r){"use strict";r.r(e);r(42);var n=r(8),c=r(24),o=(r(15),r(34),r(321),r(218),r(43),r(90),r(49),{data:function(){var t;return t={loading:!1,categoryname:"",currentSlide:0,category_slug:"",categories:[],cart:[]},Object(c.a)(t,"loading",!1),Object(c.a)(t,"products_details",[]),Object(c.a)(t,"products",[]),Object(c.a)(t,"loading",!1),Object(c.a)(t,"categories",[]),Object(c.a)(t,"pro_count",0),Object(c.a)(t,"categoryname",""),t},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.calculateSubtotal(),t.loadCart(),t.cartItemCount(),e.next=5,t.fetchDefaultProduct();case 5:t.ssliderTest();case 6:case"end":return e.stop()}}),e)})))()},methods:{ssliderTest:function(){new Swiper(".pro_slider",{slidesPerView:6,breakpoints:{0:{slidesPerView:2},320:{slidesPerView:2},480:{slidesPerView:3},640:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})},cartItemCount:function(){var t=0;this.cart.forEach((function(e){t+=e.quantity})),this.itemCount=t,console.log("Emitting cartItemCountUpdated event with itemCount:",this.itemCount),this.$eventBus.$emit("cartItemCountUpdated",this.itemCount)},updateQuantity:function(t,e){var r=this.cart.findIndex((function(e){return e.product.id===t}));-1!==r&&(this.cart[r].quantity=e,this.saveCart(),this.calculateSubtotal())},addToCart:function(t){console.log("Adding product to cart:",t);var e=this.cart.findIndex((function(e){return e.product.id===t.id}));-1!==e?(console.log("Product already exists in cart, increasing quantity."),this.cart[e].quantity++):(console.log("Product does not exist in cart, adding it."),this.cart.push({product:t,quantity:1}),Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(t){t.onmouseenter=Swal.stopTimer,t.onmouseleave=Swal.resumeTimer}}).fire({icon:"success",title:"Product successfully Added to cart"}));console.log("Updated cart:",this.cart),this.saveCart(),this.cartItemCount(),this.calculateSubtotal()},removeFromCart:function(t){var e=this.cart.findIndex((function(e){return e.product.id===t.id}));-1!==e&&(this.cart[e].quantity>1?this.cart[e].quantity-=1:this.cart.splice(e,1),this.saveCart(),this.calculateSubtotal(),this.cartItemCount())},loadCart:function(){var t=localStorage.getItem("cart");t&&(this.cart=JSON.parse(t))},saveCart:function(){var t=this;this.loading=!0,localStorage.setItem("cart",JSON.stringify(this.cart)),setTimeout((function(){t.loading=!1}),2e3)},calculateSubtotal:function(){return 0},fetchDefaultProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,25,e.next=4,t.$axios.get("/unauthenticate/searchProductCategory",{params:{category_id:25}}).then((function(e){t.products_details=e.data.result,t.products=e.data.products,t.categories=e.data.result})).catch((function(t){})).finally((function(){t.loading=!1}));case 4:case 5:case"end":return e.stop()}}),e)})))()}}}),l=(r(359),r(33)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},t._l(t.categories,(function(r,n){return e("div",{key:n,staticClass:"top_selling"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"sell_title stock_deals"},[e("div",[e("h5",[t._v(t._s(r.name))])]),t._v(" "),e("div",[e("nuxt-link",{staticClass:"catLink",attrs:{to:"category/category-grid?slug="+r.slug}},[t._v("See\n                                All"),e("i",{staticClass:"fas fa-arrow-right"})])],1)])]),t._v(" "),e("div",{staticClass:"container text-center my-3"},[t.loading?e("div",{staticClass:"loading-indicator",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",alt:"Loader"}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"swiper mySwiper pro_slider"},[e("div",{staticClass:"swiper-wrapper"},t._l(r.products,(function(r){return e("div",{key:r.product_id,staticClass:"swiper-slide"},[e("div",{staticClass:"product_grid text-start"},[e("nuxt-link",{attrs:{to:"/product-details/".concat(r.slug)}},[e("img",{staticClass:"img-fluid",attrs:{src:r.thumnail,loading:"lazy"}}),t._v(" "),1==r.free_shopping?e("span",[t._v("Free Delivery")]):t._e(),t._v(" "),e("h1",[t._v(t._s(r.name))]),t._v(" "),1==r.discount_status?e("div",{staticClass:"d-flex aligh-items-center"},[0!==r.discount?e("p",[t._v("$"+t._s(r.price-r.price*r.discount/100))]):e("p",[t._v("$"+t._s(r.price))]),t._v(" "),0!==r.discount?e("p",{staticClass:"ms-1"},[e("strike",[t._v("$"+t._s(r.price))]),t._v(" "),e("span",[t._v(t._s(r.discount)+"%")])],1):t._e()]):2==r.discount_status?e("div",{staticClass:"d-flex aligh-items-center"},[0!==r.discount?e("p",[t._v("$"+t._s(r.price-r.discount))]):e("p",[t._v("$"+t._s(r.price))]),t._v(" "),0!==r.discount?e("p",{staticClass:"ms-1"},[e("strike",[t._v("$"+t._s(r.price))]),t._v(" "),e("span",[t._v("$"+t._s(r.discount))])],1):t._e()]):e("div",[e("p",[t._v("$"+t._s(r.price))])])]),t._v(" "),t._m(0,!0),t._v(" "),e("button",{staticClass:"btn_cart",attrs:{type:"button"},on:{click:function(e){return t.addToCart(r)}}},[t._v("Add to cart\n                                    ")])],1)])})),0),t._v(" "),e("div",{staticClass:"swiper-button-next"}),t._v(" "),e("div",{staticClass:"swiper-button-prev"})])])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star"})]),t._v(" "),e("h6",[t._v("(200)")])])}],!1,null,null,null);e.default=component.exports}}]);