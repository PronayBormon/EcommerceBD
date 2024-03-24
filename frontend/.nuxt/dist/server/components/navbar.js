exports.ids = [30];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=a8d767be&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "search_bar position-sticky top-0"
  }, [_vm._ssrNode("<div class=\"container\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between align-items-center\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-8\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"logo nav_tab\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\" class=\"btn_menu mobile_view\" data-v-a8d767be><i class=\"fa-solid fa-bars-staggered\" data-v-a8d767be></i></button> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"offcanvasExample\" aria-labelledby=\"offcanvasExampleLabel\" class=\"offcanvas offcanvas-start\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\" data-v-a8d767be><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\" data-v-a8d767be></button> <h5 id=\"offcanvasExampleLabel\" class=\"offcanvas-title\" data-v-a8d767be>Ecommerce</h5></div> "), _vm._ssrNode("<div class=\"offcanvas-body\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"side_nav\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\" data-v-a8d767be>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_c('h6', [_vm._v("My Ecommerce Account")]), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul data-v-a8d767be>", "</ul>", [_vm.loggedIn ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-box"
  }), _vm._v("Order")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/my-reviews"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-comment-dots"
  }), _vm._v("Pending\n                                                        Reviews")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-ticket-simple"
  }), _vm._v("Voucher\n                                                    ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-heart"
  }), _vm._v("Save items ")])], 1) : _vm._e()], 2)], 2)]), _vm._ssrNode(" "), _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<div class=\"row\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\" data-v-a8d767be>", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": "/category/all-categorys"
      }
    }, [_c('h6', [_vm._v(_vm._s(category.name))]), _vm._v(" "), _c('p', [_vm._v("See all")])])], 1), _vm._ssrNode(" <ul data-v-a8d767be>" + _vm._ssrList(category.children, function (childCategory) {
      return "<li data-v-a8d767be><a href=\"#\" data-v-a8d767be><i class=\"fa-solid fa-list\" style=\"font-size: 10px;\" data-v-a8d767be></i>" + _vm._ssrEscape(_vm._s(childCategory.name)) + "</a></li>";
    }) + "</ul>")], 2)]);
  }), _vm._ssrNode(" <div class=\"row\" data-v-a8d767be><div class=\"col-12\" data-v-a8d767be><ul data-v-a8d767be><li data-v-a8d767be><a href=\"#\" data-v-a8d767be>Contact Us</a></li> <li data-v-a8d767be><a href=\"#\" data-v-a8d767be>Terms and condition</a></li></ul></div></div>")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"nav_bar tab_show\" style=\"@media(max-width: 768px){display: none;}\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<button type=\"button\" class=\"btn_menu\" data-v-a8d767be><i class=\"fa-solid fa-bars-staggered\" data-v-a8d767be></i></button> "), _vm._ssrNode("<div class=\"nav_menu nav_op\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<nav data-v-a8d767be>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul data-v-a8d767be>" + (index < _vm.limit ? "<li data-v-a8d767be><a href=\"#\" class=\"d-flex justify-content-between align-items-center\" data-v-a8d767be><div class=\"d-flex align-items-center\" data-v-a8d767be><i class=\"fa-solid fa-list\" data-v-a8d767be></i>" + _vm._ssrEscape("\n                                                    " + _vm._s(category.name) + "\n                                                ") + "</div> <i class=\"fa-solid fa-angle-right\" data-v-a8d767be></i></a> <div class=\"sub_menu\" data-v-a8d767be>" + (category.children && category.children.length > 0 ? "<div class=\"row\" data-v-a8d767be>" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\" data-v-a8d767be><h6 data-v-a8d767be><a href=\"#\" data-v-a8d767be>" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul data-v-a8d767be>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li data-v-a8d767be><a href=\"#\" data-v-a8d767be>" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul data-v-a8d767be>", "</ul>", [_vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("Other Categories\n                                                ")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2)])], 2), _vm._ssrNode(" "), _c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid navLogo",
    attrs: {
      "src": "/images/logo.png",
      "alt": "",
      "width": "200px"
    }
  })])], 2)]), _vm._ssrNode(" <div class=\"col-6 desktop_view mini_tab_hide\" data-v-a8d767be><form action data-v-a8d767be><i class=\"fa-solid fa-magnifying-glass\" data-v-a8d767be></i> <input type=\"text\" id=\"autocomplete-input\" placeholder=\"Search products...\" class=\"form-control ui-menu-item\" data-v-a8d767be> <button type=\"button\" data-v-a8d767be>Search</button></form></div> "), _vm._ssrNode("<div class=\"col-lg-3 col-md-2 col-2 desktop_view\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"menus\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"dropdown\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle btn_account b_link\" data-v-a8d767be><i class=\"fas fa-user\" data-v-a8d767be></i> Account\n                            </button> "), _vm._ssrNode("<ul class=\"dropdown-menu\" data-v-a8d767be>", "</ul>", [_vm._ssrNode((_vm.loggedIn ? "<span data-v-a8d767be><button type=\"button\" class=\"drop_btn\" data-v-a8d767be>Sign Out</button></span>" : "<span data-v-a8d767be><button type=\"button\" class=\"drop_btn\" data-v-a8d767be>Sign In</button></span>") + " "), _vm.loggedIn ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": _vm.getProfileLink()
    }
  }, [_vm._v("MY Account")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li data-v-a8d767be>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-wishlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e()], 2)], 2), _vm._ssrNode(" <div class=\"dropdown\" data-v-a8d767be><button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle\" data-v-a8d767be><i class=\"fas fa-circle-question\" data-v-a8d767be></i> Help\n                            </button> <ul class=\"dropdown-menu\" data-v-a8d767be><li data-v-a8d767be><a href=\"#\" class=\"dropdown-item\" data-v-a8d767be>Help Center </a></li> <li data-v-a8d767be><a href=\"#\" class=\"dropdown-item\" data-v-a8d767be>Place An Order</a></li> <li data-v-a8d767be><a href=\"#\" class=\"dropdown-item\" data-v-a8d767be>Payment Option </a></li> <li data-v-a8d767be><a href=\"#\" class=\"dropdown-item\" data-v-a8d767be>Truck an order </a></li> <li data-v-a8d767be><a href=\"#\" class=\"dropdown-item\" data-v-a8d767be>Cancel an order </a></li> <li data-v-a8d767be><a href=\"#\" class=\"dropdown-item\" data-v-a8d767be>Return &amp; Refund </a></li> <button type=\"button\" class=\"drop_btn\" data-v-a8d767be>live Chart </button></ul></div> "), _c('Nuxt-link', {
    staticClass: "cart_count",
    attrs: {
      "to": "/cart"
    }
  }, [_c('i', {
    staticClass: "fas fa-cart-shopping"
  }), _c('span', {
    staticStyle: {
      "top": "-16px"
    }
  }, [_vm._v(_vm._s(_vm.itemCount))]), _vm._v("Cart")])], 2)]), _vm._ssrNode(" <div class=\"col-4 ms-auto mobile_view\" data-v-a8d767be><div class=\"mobile_nav_option\" data-v-a8d767be><a class=\"search_form\" data-v-a8d767be><i class=\"fa-solid fa-magnifying-glass\" data-v-a8d767be></i></a></div></div> "), _vm._ssrNode("<div class=\"search_form_modal\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"search_box_main\" data-v-a8d767be>", "</div>", [_vm._ssrNode("<div class=\"bar_search\" data-v-a8d767be><div data-v-a8d767be><a class=\"close_search_modal\" data-v-a8d767be><i class=\"fa-solid fa-arrow-left\" data-v-a8d767be></i></a></div> <div data-v-a8d767be><input type=\"text\" id=\"autocomplete-input_mobile\" name placeholder=\"Search Product, Categories\" data-v-a8d767be></div> <div data-v-a8d767be><button type=\"submit\" data-v-a8d767be><i class=\"fa-solid fa-magnifying-glass\" data-v-a8d767be></i></button></div></div> "), _vm._ssrNode("<ul data-v-a8d767be>", "</ul>", _vm._l(_vm.searchloop, function (item, key) {
    return _vm._ssrNode("<li data-v-a8d767be>", "</li>", [item.type == 'category' ? _c('nuxt-link', {
      attrs: {
        "to": `/category/category-grid?slug=${item.catslug}`
      }
    }, [_vm._v(_vm._s(item.label))]) : _vm._e(), _vm._ssrNode(" "), item.type == 'product' ? _c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_vm._v(_vm._s(item.label))]) : _vm._e()], 2);
  }), 0)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=a8d767be&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      cart: [],
      id: '',
      categories: [],
      itemCount: 0,
      //loggedIn: false,
      searchloop: []
    };
  },
  async mounted() {
    if (false) {}
    // this.fetchUserData();
    this.$eventBus.$on('cartItemCountUpdated', this.handleCartItemCountUpdated);
    this.loadCart();
    await this.fetchData();
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    userRole() {
      return this.$auth.loggedIn ? this.$auth.user.role_id : null;
    }
  },
  methods: {
    getProfileLink() {
      // Generate the profile link based on the user's role_id
      return this.userRole === 3 ? '/seller/seller-profile' : '/user/user-profile';
    },
    openLoginModal() {
      $(".login_popup").fadeIn();
    },
    closePopup() {
      $(".login_popup").fadeOut();
    },
    logout() {
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    },
    async fetchUserData() {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        this.$router.push('/');
        console.error('JWT token not found in local storage');
        return;
      }
      try {
        this.$axios.setToken(token, 'Bearer');
        const response = await this.$axios.post('/auth/me');
        //  console.log('User data:', response.data);
        this.id = response.data.id;
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        this.$axios.setToken(false);
      }
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += parseInt(item.quantity);
      });
      this.itemCount = itemCount;
    },
    handleCartItemCountUpdated(itemCount) {
      // This method will be called when the event is emitted from ComponentA
      console.log('Received  DesktopViewOptions Com.:', itemCount);
      // Update the local data property with the received itemCount
      this.itemCount = itemCount;
    },
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    },
    async logout() {
      await this.$auth.logout();
    }
  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a8d767be",
  "cec08666"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("06ab6b9c", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_a8d767be_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_a8d767be_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_a8d767be_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_a8d767be_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_a8d767be_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ui-menu-item>a.ui-corner-all[data-v-a8d767be]{clear:both;color:#555;display:block;font-weight:400;line-height:18px;padding:3px 15px;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.ui-state-active[data-v-a8d767be],.ui-state-hover[data-v-a8d767be]{background-color:#08c;background-image:none;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;color:#fff;-webkit-text-decoration:none;text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=navbar.js.map