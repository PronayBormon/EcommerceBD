exports.ids = [11];
exports.modules = {

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("45a207ff", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_736da5bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_736da5bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_736da5bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_736da5bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_736da5bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-736da5bc]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-736da5bc],.loading-indicator[data-v-736da5bc]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-736da5bc]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-736da5bc]{margin:0}.loader-top[data-v-736da5bc]{top:0}.loader-bottom[data-v-736da5bc]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryProductFilter.vue?vue&type=template&id=736da5bc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-736da5bc>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-736da5bc>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-736da5bc>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product_section\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"row px-2\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"col-md-4 desktop_view\" data-v-736da5bc><div class=\"left_side_product\" data-v-736da5bc><div class=\"category_list\" data-v-736da5bc><h6 data-v-736da5bc>Category</h6> <ul data-v-736da5bc>" + _vm._ssrList(_vm.categories, function (category) {
    return "<li data-v-736da5bc><a href=\"#\" data-v-736da5bc>" + _vm._ssrEscape(_vm._s(category.name)) + "</a></li>";
  }) + "</ul></div></div></div> "), _vm._ssrNode("<div class=\"col-md-8\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"product_list\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"title_product\" data-v-736da5bc><div data-v-736da5bc><h6 data-v-736da5bc>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h6></div> <div class=\"d-none\" data-v-736da5bc><label for data-v-736da5bc>Short By:</label> <select name id data-v-736da5bc><option value data-v-736da5bc>Popularity</option> <option value data-v-736da5bc>New arrival</option> <option value data-v-736da5bc>Low to High</option> <option value data-v-736da5bc>high to low</option></select></div></div> "), _vm._ssrNode("<div class=\"grid_list\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div data-v-736da5bc><p data-v-736da5bc>" + _vm._ssrEscape(_vm._s(_vm.pro_count) + " product found") + "</p></div> "), _vm._ssrNode("<div class=\"d-flex\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<a type=\"button\" class=\"filter_btn mobile_view\" data-v-736da5bc><i class=\"fa-solid fa-sliders\" data-v-736da5bc></i></a> "), _c('Nuxt-Link', {
    staticClass: "active",
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-list"
  })]), _vm._ssrNode(" <a href=\"#\" data-v-736da5bc><i class=\"fa-solid fa-grip\" data-v-736da5bc></i></a>")], 2), _vm._ssrNode(" <div class=\"filter_modal\" data-v-736da5bc><div class=\"row px-4\" data-v-736da5bc><div class=\"col-6\" data-v-736da5bc></div> <div class=\"col-6 text-end\" data-v-736da5bc><i class=\"fa-solid fa-x filter_close\" style=\"cursor: pointer;\" data-v-736da5bc></i></div></div> <div class=\"modal_fdiv\" data-v-736da5bc><div class=\"row\" data-v-736da5bc><div class=\"col-md-12\" data-v-736da5bc><div class=\"left_side_product\" data-v-736da5bc><div class=\"category_list\" data-v-736da5bc><h6 data-v-736da5bc>Category</h6> <ul data-v-736da5bc><li data-v-736da5bc><a href=\"#\" data-v-736da5bc>Computing</a></li> <li data-v-736da5bc><a href=\"#\" data-v-736da5bc>Electronics</a></li></ul></div> <div class=\"delivery_list\" data-v-736da5bc><h6 data-v-736da5bc>Express delivery</h6> <ul data-v-736da5bc><li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>DHL </label></li></ul></div> <div class=\"delivery_list\" data-v-736da5bc><h6 data-v-736da5bc>Shipped from </h6> <ul data-v-736da5bc><li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>From Bangladesh </label></li> <li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>From Bangladesh </label></li></ul></div> <div class=\"brands_list\" data-v-736da5bc><h6 data-v-736da5bc>Brand</h6> <div class=\"search_side\" data-v-736da5bc><i class=\"fa-solid fa-magnifying-glass\" data-v-736da5bc></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-736da5bc></div> <ul class=\"brand_scroll\" data-v-736da5bc><li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>Addidas </label></li> <li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>AGM </label></li></ul></div> <div class=\"price_range\" data-v-736da5bc><div class=\"sidebr_title\" data-v-736da5bc><h6 data-v-736da5bc>Price Range </h6> <button type=\"button\" class=\"btn_apply\" data-v-736da5bc>Apply</button></div> <div class=\"row\" data-v-736da5bc><div class=\"col-md-12\" data-v-736da5bc><div id=\"slider-range\" name=\"rangeInput\" class=\"price-filter-range\" data-v-736da5bc></div> <div class=\"d-flex\" style=\"margin:10px auto\" data-v-736da5bc><input type=\"number\" min=\"0\" max=\"9900\" oninput=\"validity.valid||(value='0');\" id=\"min_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px;\" data-v-736da5bc> <input type=\"number\" min=\"0\" max=\"10000\" oninput=\"validity.valid||(value='10000');\" id=\"max_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px\" data-v-736da5bc></div></div></div></div> <div class=\"brands_list\" data-v-736da5bc><h6 data-v-736da5bc>size</h6> <div class=\"search_side\" data-v-736da5bc><i class=\"fa-solid fa-magnifying-glass\" data-v-736da5bc></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-736da5bc></div> <ul class=\"brand_scroll\" data-v-736da5bc><li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>XS</label></li> <li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>S</label></li></ul></div> <div class=\"brands_list\" data-v-736da5bc><h6 data-v-736da5bc>Gender</h6> <ul class=\"brand_scroll\" data-v-736da5bc><li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>Boys</label></li> <li data-v-736da5bc><input type=\"checkbox\" data-v-736da5bc><label for data-v-736da5bc>Girls</label></li></ul></div></div></div></div></div></div>")], 2), _vm._ssrNode(" <div class=\"d-none\" data-v-736da5bc>\r\n                                this div specially for testing\r\n                                <h2 data-v-736da5bc>Shopping Cart</h2> <ul data-v-736da5bc>" + _vm._ssrList(_vm.cart, function (item) {
    return "<li data-v-736da5bc>" + _vm._ssrEscape("\r\n                                        " + _vm._s(item.product.product_name) + " - $" + _vm._s(item.product.price) + " (Qty: " + _vm._s(item.quantity) + ")-\r\n                                        ") + "<input type=\"number\"" + _vm._ssrAttr("value", item.updatedQuantity) + " data-v-736da5bc> <button data-v-736da5bc>Update Quantity</button> <button data-v-736da5bc>Remove</button> <hr data-v-736da5bc></li>";
  }) + "</ul> <p data-v-736da5bc>" + _vm._ssrEscape("Subtotal: $" + _vm._s(_vm.subtotal) + "\r\n\r\n                                ") + "</p> <p data-v-736da5bc>" + _vm._ssrEscape("Items in Cart: " + _vm._s(_vm.itemCount)) + "</p> <hr data-v-736da5bc></div> "), _vm._l(_vm.prouducts, function (item) {
    return _vm._ssrNode("<div class=\"row\" data-v-736da5bc>", "</div>", [_vm.prouducts.length > 0 ? _vm._ssrNode("<div" + _vm._ssrAttr("id", item.id) + " class=\"col-12\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"products_list\" data-v-736da5bc>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-736da5bc>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.pro_slug}`
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail_img,
        "alt": ""
      }
    }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery ")]) : _vm._e()])], 1), _vm._ssrNode(" <div class=\"col pad_ding\" data-v-736da5bc>" + (item.seller_name ? "<strong data-v-736da5bc>" + _vm._ssrEscape(_vm._s(item.seller_name)) + "</strong>" : "<strong data-v-736da5bc>Admin Seller</strong>") + " <h5 data-v-736da5bc>" + _vm._ssrEscape(_vm._s(item.product_name)) + "</h5> <div class=\"d-flex align-items-center\" data-v-736da5bc><div class=\"ratings m-0\" data-v-736da5bc><i class=\"fa fa-star checked\" data-v-736da5bc></i> <i class=\"fa fa-star checked\" data-v-736da5bc></i> <i class=\"fa fa-star checked\" data-v-736da5bc></i> <i class=\"fa fa-star checked\" data-v-736da5bc></i> <i class=\"fa fa-star\" data-v-736da5bc></i></div> <h6 class=\"m-0\" data-v-736da5bc>(200)</h6></div> <div class=\"short_des\" data-v-736da5bc><p class=\"mt-0\" data-v-736da5bc>" + _vm._s(item.short_description) + "</p></div></div> "), _vm._ssrNode("<div class=\"col pad_ding\" data-v-736da5bc>", "</div>", [item.discount_status == 1 ? _vm._ssrNode("<div data-v-736da5bc>", "</div>", [_vm._ssrNode("<h4 class=\"me-1\" data-v-736da5bc>" + _vm._ssrEscape("$" + _vm._s(item.last_price.toFixed(2))) + "</h4> "), item.discount !== 0 && item.discount !== '' ? _vm._ssrNode("<h4 class=\"disabled\" data-v-736da5bc>", "</h4>", [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._ssrNode("<span data-v-736da5bc>" + _vm._ssrEscape(_vm._s(item.discount) + "%") + "</span>")], 2) : _vm._e()], 2) : item.discount_status == 2 ? _vm._ssrNode("<div data-v-736da5bc>", "</div>", [_vm._ssrNode("<h4 class=\"me-1\" data-v-736da5bc>" + _vm._ssrEscape("$" + _vm._s(item.last_price.toFixed(2))) + "</h4> "), item.discount !== 0 && item.discount !== '' ? _vm._ssrNode("<h4 class=\"disabled\" data-v-736da5bc>", "</h4>", [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._ssrNode("<span data-v-736da5bc>" + _vm._ssrEscape("$" + _vm._s(item.discount)) + "</span>")], 2) : _vm._e()], 2) : _vm._ssrNode("<div data-v-736da5bc><h4 class=\"me-1\" data-v-736da5bc>" + _vm._ssrEscape("$" + _vm._s(item.last_price.toFixed(2))) + "</h4></div>"), _vm._ssrNode(" " + (item.stock_qty >= 1 ? "<button type=\"button\" class=\"btn_cart\" style=\"display: block;visibility: unset;\" data-v-736da5bc>Add to cart</button>" : "<button type=\"button\" disabled=\"disabled\" class=\"btn_sold\" style=\"display: block;visibility: unset;\" data-v-736da5bc>Sold Out</button>"))], 2)], 2)]) : _vm._e()]);
  })], 2)])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryProductFilter.vue?vue&type=template&id=736da5bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryProductFilter.vue?vue&type=script&lang=js&
//import { mapActions } from 'vuex'
/* harmony default export */ var CategoryProductFiltervue_type_script_lang_js_ = ({
  //  props: ['cart'],
  props: ['category_slug'],
  // props: ['product'],
  data() {
    return {
      loading: false,
      cart: [],
      updatedQuantity: 0,
      prouducts: [],
      product: [],
      subtotal: 0,
      categories: [],
      pro_count: 0,
      itemCount: 0,
      quantity: 1,
      categoryname: ''
    };
  },
  async mounted() {
    // const paramSlug = this.$route.query.slug;
    this.calculateSubtotal();
    //   this.loadCart();
    this.cartItemCount();
    const paramSlug = this.$route.query.slug;
    //alert(paramSlug);
    this.fetchData(paramSlug);
    await this.fetchDataCategory();
  },
  methods: {
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    },
    saveCart() {
      this.loading = true;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    cartItemCount() {
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += item.quantity;
      });
      this.itemCount = itemCount;
      console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
      this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);
    },
    updateQuantity(productId, newQuantity) {
      const index = this.cart.findIndex(item => item.product.id === productId);
      if (index !== -1) {
        this.cart[index].quantity = newQuantity;
        this.saveCart();
        this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
      }
    },

    addToCart(productId) {
      const productToAdd = this.prouducts.find(product => product.id === productId);
      const existingItem = this.cart.find(item => item.product.id === productId);
      if (existingItem) {
        //existingItem.quantity += 1;
      } else {
        this.cart.push({
          product: productToAdd,
          quantity: 1
        });
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Product successfully Added to cart"
        });
      }
      this.saveCart();
      this.cartItemCount();
      this.calculateSubtotal();
    },
    removeFromCart(product) {
      const index = this.cart.findIndex(item => item.product.id === product.id);
      if (index !== -1) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }
        this.saveCart();
        this.calculateSubtotal();
        this.cartItemCount();
      }
    },
    calculateSubtotal() {
      // let subtotal = 0;
      // this.cart.forEach((item) => {
      //     const product = item.product;
      //     console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
      //     const priceAsNumber = parseFloat(product.price.replace(/[^\d.]/g, '')); //510;//product.price;
      //     if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
      //         subtotal += item.quantity * priceAsNumber;
      //     } else {
      //         console.error('Invalid quantity or price:', item.quantity, product.price);
      //     }
      //     // console.log(`Intermediate Subtotal: ${subtotal}`);
      // });
      // //console.log(`Final Subtotal: ${subtotal}`);
      // return this.subtotal = subtotal;
      //return subtotal;
      return 0;
    },
    categoryGrid() {
      const slug = this.$route.query.slug;
      //alert(paramSlug);
      this.$router.push({
        path: '/category/category-grid',
        query: {
          slug: slug
        }
      });
    },
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData(slug) {
      this.loading = true;
      const response = await this.$axios.get(`/unauthenticate/findCategorys/${slug}`).then(response => {
        this.prouducts = response.data.result.reverse();
        this.pro_count = response.data.pro_count;
        this.categoryname = response.data.categoryname;
        this.loading = false;
        $('.short_des').html(response.data.result.short_description);
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
      ;
    },
    async fetchDataCategory() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/filterCategorys`).then(response => {
        this.categories = response.data;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/CategoryProductFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryProductFiltervue_type_script_lang_js_ = (CategoryProductFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryProductFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryProductFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "736da5bc",
  "5507c63c"
  
)

/* harmony default export */ var CategoryProductFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category-product-filter.js.map