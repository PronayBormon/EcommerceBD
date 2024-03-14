exports.ids = [9];
exports.modules = {

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("46f97de3", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_c6cacf6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_c6cacf6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_c6cacf6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_c6cacf6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_c6cacf6e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-c6cacf6e]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-c6cacf6e],.loading-indicator[data-v-c6cacf6e]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-c6cacf6e]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-c6cacf6e]{margin:0}.loader-top[data-v-c6cacf6e]{top:0}.loader-bottom[data-v-c6cacf6e]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryProductFilter.vue?vue&type=template&id=c6cacf6e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-c6cacf6e>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-c6cacf6e>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-c6cacf6e>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product_section\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"row px-2\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"col-md-4 desktop_view\" data-v-c6cacf6e><div class=\"left_side_product\" data-v-c6cacf6e><div class=\"category_list\" data-v-c6cacf6e><h6 data-v-c6cacf6e>Category</h6> <ul data-v-c6cacf6e>" + _vm._ssrList(_vm.categories, function (category) {
    return "<li data-v-c6cacf6e><a href=\"#\" data-v-c6cacf6e>" + _vm._ssrEscape(_vm._s(category.name)) + "</a></li>";
  }) + "</ul></div></div></div> "), _vm._ssrNode("<div class=\"col-md-8\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"product_list\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"title_product\" data-v-c6cacf6e><div data-v-c6cacf6e><h6 data-v-c6cacf6e>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h6></div> <div class=\"d-none\" data-v-c6cacf6e><label for data-v-c6cacf6e>Short By:</label> <select name id data-v-c6cacf6e><option value data-v-c6cacf6e>Popularity</option> <option value data-v-c6cacf6e>New arrival</option> <option value data-v-c6cacf6e>Low to High</option> <option value data-v-c6cacf6e>high to low</option></select></div></div> "), _vm._ssrNode("<div class=\"grid_list\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div data-v-c6cacf6e><p data-v-c6cacf6e>" + _vm._ssrEscape(_vm._s(_vm.pro_count) + " product found") + "</p></div> "), _vm._ssrNode("<div class=\"d-flex\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<a type=\"button\" class=\"filter_btn mobile_view\" data-v-c6cacf6e><i class=\"fa-solid fa-sliders\" data-v-c6cacf6e></i></a> "), _c('Nuxt-Link', {
    staticClass: "active",
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-list"
  })]), _vm._ssrNode(" <a href=\"#\" data-v-c6cacf6e><i class=\"fa-solid fa-grip\" data-v-c6cacf6e></i></a>")], 2), _vm._ssrNode(" <div class=\"filter_modal\" data-v-c6cacf6e><div class=\"row px-4\" data-v-c6cacf6e><div class=\"col-6\" data-v-c6cacf6e></div> <div class=\"col-6 text-end\" data-v-c6cacf6e><i class=\"fa-solid fa-x filter_close\" style=\"cursor: pointer;\" data-v-c6cacf6e></i></div></div> <div class=\"modal_fdiv\" data-v-c6cacf6e><div class=\"row\" data-v-c6cacf6e><div class=\"col-md-12\" data-v-c6cacf6e><div class=\"left_side_product\" data-v-c6cacf6e><div class=\"category_list\" data-v-c6cacf6e><h6 data-v-c6cacf6e>Category</h6> <ul data-v-c6cacf6e><li data-v-c6cacf6e><a href=\"#\" data-v-c6cacf6e>Computing</a></li> <li data-v-c6cacf6e><a href=\"#\" data-v-c6cacf6e>Electronics</a></li></ul></div> <div class=\"delivery_list\" data-v-c6cacf6e><h6 data-v-c6cacf6e>Express delivery</h6> <ul data-v-c6cacf6e><li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>DHL </label></li></ul></div> <div class=\"delivery_list\" data-v-c6cacf6e><h6 data-v-c6cacf6e>Shipped from </h6> <ul data-v-c6cacf6e><li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>From Bangladesh </label></li> <li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>From Bangladesh </label></li></ul></div> <div class=\"brands_list\" data-v-c6cacf6e><h6 data-v-c6cacf6e>Brand</h6> <div class=\"search_side\" data-v-c6cacf6e><i class=\"fa-solid fa-magnifying-glass\" data-v-c6cacf6e></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-c6cacf6e></div> <ul class=\"brand_scroll\" data-v-c6cacf6e><li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>Addidas </label></li> <li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>AGM </label></li></ul></div> <div class=\"price_range\" data-v-c6cacf6e><div class=\"sidebr_title\" data-v-c6cacf6e><h6 data-v-c6cacf6e>Price Range </h6> <button type=\"button\" class=\"btn_apply\" data-v-c6cacf6e>Apply</button></div> <div class=\"row\" data-v-c6cacf6e><div class=\"col-md-12\" data-v-c6cacf6e><div id=\"slider-range\" name=\"rangeInput\" class=\"price-filter-range\" data-v-c6cacf6e></div> <div class=\"d-flex\" style=\"margin:10px auto\" data-v-c6cacf6e><input type=\"number\" min=\"0\" max=\"9900\" oninput=\"validity.valid||(value='0');\" id=\"min_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px;\" data-v-c6cacf6e> <input type=\"number\" min=\"0\" max=\"10000\" oninput=\"validity.valid||(value='10000');\" id=\"max_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px\" data-v-c6cacf6e></div></div></div></div> <div class=\"brands_list\" data-v-c6cacf6e><h6 data-v-c6cacf6e>size</h6> <div class=\"search_side\" data-v-c6cacf6e><i class=\"fa-solid fa-magnifying-glass\" data-v-c6cacf6e></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-c6cacf6e></div> <ul class=\"brand_scroll\" data-v-c6cacf6e><li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>XS</label></li> <li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>S</label></li></ul></div> <div class=\"brands_list\" data-v-c6cacf6e><h6 data-v-c6cacf6e>Gender</h6> <ul class=\"brand_scroll\" data-v-c6cacf6e><li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>Boys</label></li> <li data-v-c6cacf6e><input type=\"checkbox\" data-v-c6cacf6e><label for data-v-c6cacf6e>Girls</label></li></ul></div></div></div></div></div></div>")], 2), _vm._ssrNode(" <div class=\"d-none\" data-v-c6cacf6e>\r\n                                this div specially for testing\r\n                                <h2 data-v-c6cacf6e>Shopping Cart</h2> <ul data-v-c6cacf6e>" + _vm._ssrList(_vm.cart, function (item) {
    return "<li data-v-c6cacf6e>" + _vm._ssrEscape("\r\n                                        " + _vm._s(item.product.product_name) + " - $" + _vm._s(item.product.price) + " (Qty: " + _vm._s(item.quantity) + ")-\r\n                                        ") + "<input type=\"number\"" + _vm._ssrAttr("value", item.updatedQuantity) + " data-v-c6cacf6e> <button data-v-c6cacf6e>Update Quantity</button> <button data-v-c6cacf6e>Remove</button> <hr data-v-c6cacf6e></li>";
  }) + "</ul> <p data-v-c6cacf6e>" + _vm._ssrEscape("Subtotal: $" + _vm._s(_vm.subtotal) + "\r\n\r\n                                ") + "</p> <p data-v-c6cacf6e>" + _vm._ssrEscape("Items in Cart: " + _vm._s(_vm.itemCount)) + "</p> <hr data-v-c6cacf6e></div> "), _vm._l(_vm.prouducts, function (item) {
    return _vm._ssrNode("<div class=\"row\" data-v-c6cacf6e>", "</div>", [_vm.prouducts.length > 0 ? _vm._ssrNode("<div" + _vm._ssrAttr("id", item.id) + " class=\"col-12\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"products_list\" data-v-c6cacf6e>", "</div>", [_vm._ssrNode("<div class=\"col\" data-v-c6cacf6e>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.pro_slug}`
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail_img,
        "alt": ""
      }
    }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery ")]) : _vm._e()])], 1), _vm._ssrNode(" <div class=\"col pad_ding\" data-v-c6cacf6e><h5 data-v-c6cacf6e>" + _vm._ssrEscape(_vm._s(item.product_name)) + "</h5> <div class=\"d-flex align-items-center\" data-v-c6cacf6e><div class=\"ratings m-0\" data-v-c6cacf6e><i class=\"fa fa-star checked\" data-v-c6cacf6e></i> <i class=\"fa fa-star checked\" data-v-c6cacf6e></i> <i class=\"fa fa-star checked\" data-v-c6cacf6e></i> <i class=\"fa fa-star checked\" data-v-c6cacf6e></i> <i class=\"fa fa-star\" data-v-c6cacf6e></i></div> <h6 class=\"m-0\" data-v-c6cacf6e>(200)</h6></div> <div class=\"short_des\" data-v-c6cacf6e><p class=\"mt-0\" data-v-c6cacf6e>" + _vm._s(item.short_description) + "</p></div></div> "), _vm._ssrNode("<div class=\"col pad_ding\" data-v-c6cacf6e>", "</div>", [item.discount_status == 1 ? _vm._ssrNode("<div data-v-c6cacf6e>", "</div>", [_vm._ssrNode((item.discount !== 0 ? "<h4 data-v-c6cacf6e>" + _vm._ssrEscape("$" + _vm._s(item.percentPrice)) + "</h4>" : "<h4 class=\"me-1\" data-v-c6cacf6e>" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</h4>") + " "), item.discount !== 0 ? _vm._ssrNode("<h4 class=\"disabled\" data-v-c6cacf6e>", "</h4>", [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._ssrNode("<span data-v-c6cacf6e>" + _vm._ssrEscape(_vm._s(item.discount) + "%") + "</span>")], 2) : _vm._e()], 2) : item.discount_status == 2 ? _vm._ssrNode("<div data-v-c6cacf6e>", "</div>", [_vm._ssrNode((item.discount !== 0 ? "<h4 data-v-c6cacf6e>" + _vm._ssrEscape("$" + _vm._s(item.dis_price)) + "</h4>" : "<h4 class=\"me-1\" data-v-c6cacf6e>" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</h4>") + " "), item.discount !== 0 ? _vm._ssrNode("<h4 class=\"disabled\" data-v-c6cacf6e>", "</h4>", [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._ssrNode("<span data-v-c6cacf6e>" + _vm._ssrEscape("$" + _vm._s(item.discount)) + "</span>")], 2) : _vm._e()], 2) : _vm._ssrNode("<div data-v-c6cacf6e><h4 class=\"me-1\" data-v-c6cacf6e>" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</h4></div>"), _vm._ssrNode(" " + (item.stock_qty >= 1 ? "<button type=\"button\" class=\"btn_cart\" style=\"display: block;visibility: unset;\" data-v-c6cacf6e>Add to cart</button>" : "<button type=\"button\" disabled=\"disabled\" class=\"btn_sold\" style=\"display: block;visibility: unset;\" data-v-c6cacf6e>Sold Out</button>"))], 2)], 2)]) : _vm._e()]);
  })], 2)])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryProductFilter.vue?vue&type=template&id=c6cacf6e&scoped=true&

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
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryProductFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c6cacf6e",
  "1e5a39f6"
  
)

/* harmony default export */ var CategoryProductFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category-product-filter.js.map