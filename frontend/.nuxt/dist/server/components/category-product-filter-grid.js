exports.ids = [10];
exports.modules = {

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryProductFilterGrid.vue?vue&type=template&id=3de4987d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-3de4987d>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-3de4987d>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-3de4987d>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product_section\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<div class=\"row px-2\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<div class=\"col-md-4 desktop_view\" data-v-3de4987d><div class=\"left_side_product\" data-v-3de4987d><div class=\"category_list\" data-v-3de4987d><h6 data-v-3de4987d>Category</h6> <ul data-v-3de4987d>" + _vm._ssrList(_vm.categories, function (category) {
    return "<li data-v-3de4987d><a href=\"#\" data-v-3de4987d>" + _vm._ssrEscape(_vm._s(category.name)) + "</a></li>";
  }) + "</ul></div></div></div> "), _vm._ssrNode("<div class=\"col-md-8\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<div class=\"product_list\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<div class=\"title_product\" data-v-3de4987d><div data-v-3de4987d><h6 data-v-3de4987d>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h6></div> <div class=\"d-none\" data-v-3de4987d><label for data-v-3de4987d>Short By:</label> <select name id data-v-3de4987d><option value data-v-3de4987d>Popularity</option> <option value data-v-3de4987d>New arrival</option> <option value data-v-3de4987d>Low to High</option> <option value data-v-3de4987d>high to low</option></select></div></div> "), _vm._ssrNode("<div class=\"grid_list\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<div data-v-3de4987d><p data-v-3de4987d>" + _vm._ssrEscape(_vm._s(_vm.pro_count) + " product found") + "</p></div> "), _vm._ssrNode("<div class=\"d-flex\" data-v-3de4987d>", "</div>", [_vm._ssrNode("<a type=\"button\" class=\"filter_btn mobile_view\" data-v-3de4987d><i class=\"fa-solid fa-sliders\" data-v-3de4987d></i></a> <a href=\"#\" data-v-3de4987d><i class=\"fa-solid fa-list\" data-v-3de4987d></i></a> "), _c('Nuxt-Link', {
    staticClass: "active",
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-grip"
  })])], 2), _vm._ssrNode(" <div class=\"filter_modal\" data-v-3de4987d><div class=\"row px-4\" data-v-3de4987d><div class=\"col-6\" data-v-3de4987d></div> <div class=\"col-6 text-end\" data-v-3de4987d><i class=\"fa-solid fa-x filter_close\" style=\"cursor: pointer;\" data-v-3de4987d></i></div></div> <div class=\"modal_fdiv\" data-v-3de4987d><div class=\"row\" data-v-3de4987d><div class=\"col-md-12\" data-v-3de4987d><div class=\"left_side_product\" data-v-3de4987d><div class=\"category_list\" data-v-3de4987d><h6 data-v-3de4987d>Category</h6> <ul data-v-3de4987d>" + _vm._ssrList(_vm.categories, function (category) {
    return "<li data-v-3de4987d><a href=\"#\" data-v-3de4987d>" + _vm._ssrEscape(_vm._s(category.name)) + "</a></li>";
  }) + "</ul></div> <div class=\"delivery_list\" data-v-3de4987d><h6 data-v-3de4987d>Express delivery</h6> <ul data-v-3de4987d><li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>DHL </label></li></ul></div> <div class=\"delivery_list\" data-v-3de4987d><h6 data-v-3de4987d>Shipped from </h6> <ul data-v-3de4987d><li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>From Bangladesh\n                                                                </label></li> <li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>From Bangladesh\n                                                                </label></li></ul></div> <div class=\"brands_list\" data-v-3de4987d><h6 data-v-3de4987d>Brand</h6> <div class=\"search_side\" data-v-3de4987d><i class=\"fa-solid fa-magnifying-glass\" data-v-3de4987d></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-3de4987d></div> <ul class=\"brand_scroll\" data-v-3de4987d><li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>Addidas\n                                                                </label></li> <li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>AGM </label></li></ul></div> <div class=\"price_range\" data-v-3de4987d><div class=\"sidebr_title\" data-v-3de4987d><h6 data-v-3de4987d>Price Range </h6> <button type=\"button\" class=\"btn_apply\" data-v-3de4987d>Apply</button></div> <div class=\"row\" data-v-3de4987d><div class=\"col-md-12\" data-v-3de4987d><div id=\"slider-range\" name=\"rangeInput\" class=\"price-filter-range\" data-v-3de4987d></div> <div class=\"d-flex\" style=\"margin:10px auto\" data-v-3de4987d><input type=\"number\" min=\"0\" max=\"9900\" oninput=\"validity.valid||(value='0');\" id=\"min_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px;\" data-v-3de4987d> <input type=\"number\" min=\"0\" max=\"10000\" oninput=\"validity.valid||(value='10000');\" id=\"max_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px\" data-v-3de4987d></div></div></div></div> <div class=\"brands_list\" data-v-3de4987d><h6 data-v-3de4987d>size</h6> <div class=\"search_side\" data-v-3de4987d><i class=\"fa-solid fa-magnifying-glass\" data-v-3de4987d></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-3de4987d></div> <ul class=\"brand_scroll\" data-v-3de4987d><li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>XS</label></li> <li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>S</label></li></ul></div> <div class=\"brands_list\" data-v-3de4987d><h6 data-v-3de4987d>Gender</h6> <ul class=\"brand_scroll\" data-v-3de4987d><li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>Boys</label></li> <li data-v-3de4987d><input type=\"checkbox\" data-v-3de4987d><label for data-v-3de4987d>Girls</label></li></ul></div></div></div></div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-3de4987d>", "</div>", _vm._l(_vm.prouducts, function (item) {
    return _vm._ssrNode("<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6\" data-v-3de4987d>", "</div>", [_vm.prouducts.length > 0 ? _vm._ssrNode("<div class=\"product_grid\" data-v-3de4987d>", "</div>", [_vm.prouducts.length > 0 ? _c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.pro_slug}`
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail_img,
        "loading": "lazy"
      }
    })]) : _vm._e(), _vm._ssrNode(" " + (item.free_shopping == 1 ? "<span data-v-3de4987d>Free Delivery</span>" : "<!---->") + " <h1 class=\"mt-1\" data-v-3de4987d>" + _vm._ssrEscape(_vm._s(item.product_name)) + "</h1> "), _vm.someValue !== null ? _vm._ssrNode("<div data-v-3de4987d>", "</div>", [item.discount_status == 1 ? _vm._ssrNode("<div class=\"d-flex align-items-center\" data-v-3de4987d>", "</div>", [_vm._ssrNode((item.discount !== 0 ? "<p class=\"me-1\" data-v-3de4987d>" + _vm._ssrEscape("$" + _vm._s(item.percentPrice)) + "</p>" : "<p class=\"me-1\" data-v-3de4987d>" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</p>") + " "), item.discount !== 0 ? _vm._ssrNode("<p data-v-3de4987d>", "</p>", [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._ssrNode(" <span data-v-3de4987d>" + _vm._ssrEscape(_vm._s(item.discount) + "%") + "</span>")], 2) : _vm._e()], 2) : item.discount_status == 2 ? _vm._ssrNode("<div class=\"d-flex align-items-center\" data-v-3de4987d>", "</div>", [_vm._ssrNode((item.discount !== 0 ? "<p class=\"me-1\" data-v-3de4987d>" + _vm._ssrEscape("$" + _vm._s(item.dis_price)) + "</p>" : "<p class=\"me-1\" data-v-3de4987d>" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</p>") + " "), item.discount !== 0 ? _vm._ssrNode("<p data-v-3de4987d>", "</p>", [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._ssrNode(" <span data-v-3de4987d>" + _vm._ssrEscape("$" + _vm._s(item.discount)) + "</span>")], 2) : _vm._e()], 2) : _vm._ssrNode("<p data-v-3de4987d>" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</p>")]) : _vm._e(), _vm._ssrNode(" <div class=\"d-flex align-items-center\" data-v-3de4987d><div class=\"rating\" data-v-3de4987d><i class=\"fa fa-star checked\" data-v-3de4987d></i> <i class=\"fa fa-star checked\" data-v-3de4987d></i> <i class=\"fa fa-star checked\" data-v-3de4987d></i> <i class=\"fa fa-star checked\" data-v-3de4987d></i> <i class=\"fa fa-star\" data-v-3de4987d></i></div> <h6 data-v-3de4987d>(200)</h6></div> " + (item.stock_qty >= 1 ? "<button type=\"button\" class=\"btn_cart\" data-v-3de4987d>Add to\n                                            cart </button>" : "<button type=\"button\" class=\"btn_sold\" data-v-3de4987d>SoldOut</button>"))], 2) : _vm._e()]);
  }), 0)], 2)])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryProductFilterGrid.vue?vue&type=template&id=3de4987d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryProductFilterGrid.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryProductFilterGridvue_type_script_lang_js_ = ({
  props: {
    receivedSlug: String
  },
  data() {
    return {
      loading: false,
      cart: [],
      loading: false,
      prouducts: [],
      categories: [],
      pro_count: 0,
      categoryname: ''
    };
  },
  async mounted() {
    this.calculateSubtotal();
    this.loadCart();
    this.cartItemCount();
    const paramSlug = this.$route.query.slug;
    //alert(paramSlug);
    this.fetchData(paramSlug);
    await this.fetchDataCategory();
  },
  methods: {
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
    calculateSubtotal() {
      let subtotal = 0;
      this.cart.forEach(item => {
        const product = item.product;
        console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
        const priceAsNumber = parseFloat(product.price.replace(/[^\d.]/g, '')); //510;//product.price;
        if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
          subtotal += item.quantity * priceAsNumber;
        } else {
          console.error('Invalid quantity or price:', item.quantity, product.price);
        }
        // console.log(`Intermediate Subtotal: ${subtotal}`);
      });
      //console.log(`Final Subtotal: ${subtotal}`);
      return this.subtotal = subtotal;
      //return subtotal;
    },

    categoryGrid() {
      const slug = this.$route.query.slug;
      //alert(paramSlug);
      this.$router.push({
        path: '/category/category-list',
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
        console.log(response.data.result);
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
// CONCATENATED MODULE: ./components/CategoryProductFilterGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryProductFilterGridvue_type_script_lang_js_ = (CategoryProductFilterGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryProductFilterGrid.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryProductFilterGridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3de4987d",
  "61d99148"
  
)

/* harmony default export */ var CategoryProductFilterGrid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("55d0e42c", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilterGrid_vue_vue_type_style_index_0_id_3de4987d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilterGrid_vue_vue_type_style_index_0_id_3de4987d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilterGrid_vue_vue_type_style_index_0_id_3de4987d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilterGrid_vue_vue_type_style_index_0_id_3de4987d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilterGrid_vue_vue_type_style_index_0_id_3de4987d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-3de4987d]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-3de4987d],.loading-indicator[data-v-3de4987d]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-3de4987d]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-3de4987d]{margin:0}.loader-top[data-v-3de4987d]{top:0}.loader-bottom[data-v-3de4987d]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=category-product-filter-grid.js.map