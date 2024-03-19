<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div v-for="(category, index) in categories" :key="index" class="top_selling">
                    <div class="row mb-2">
                        <div class="sell_title stock_deals">
                            <div>
                                <h5>{{ category.name }}</h5>
                            </div>
                            <div>
                                <nuxt-link :to="'category/category-grid?slug=' + category.slug" class="catLink">See
                                    All<i class="fas fa-arrow-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center my-3">
                        <div class="loading-indicator" v-if="loading" style="text-align: center;">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="slider-container">
                            <div class="slider" ref="slider">
                                <!-- {{ category.products }} -->
                                <div class="slide" v-for="item in category.products" :key="item.product_id">
                                    <div class="product_grid text-start">
                                        <nuxt-link :to="`/product-details/${item.slug}`">
                                            <img :src="item.thumnail" class="img-fluid" loading="lazy">

                                            <span v-if="item.free_shopping == 1">Free Delivery</span>
                                            <!-- <strong>Official Store </strong>` -->
                                            <h1>{{ item.name }}</h1>
                                            <div v-if="item.discount_status == 1" class="d-flex aligh-items-center">
                                                <p v-if="item.discount !== 0">${{ item.price - (item.price *
                    item.discount / 100) }}</p>
                                                <p v-else>${{ item.price }}</p>
                                                <p class="ms-1" v-if="item.discount !== 0"><strike>${{ item.price
                                                        }}</strike>
                                                    <span>{{ item.discount }}%</span>
                                                </p>
                                            </div>
                                            <div v-else-if="item.discount_status == 2"
                                                class="d-flex aligh-items-center">
                                                <p v-if="item.discount !== 0">${{ item.price - item.discount }}</p>
                                                <p v-else>${{ item.price }}</p>

                                                <p class="ms-1" v-if="item.discount !== 0"><strike>${{ item.price
                                                        }}</strike>
                                                    <span>${{ item.discount }}</span>
                                                </p>
                                            </div>
                                            <div v-else>
                                                <p>${{ item.price }}</p>
                                                <!-- <p><strike>${{ item.price }}</strike></p> -->
                                            </div>

                                        </Nuxt-link>

                                        <div class="d-flex align-items-center">
                                            <div class="rating">
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star "></i>
                                            </div>
                                            <h6>(200)</h6>
                                        </div>
                                        <button type="button" class="btn_cart" @click="addToCart(item)">Add to cart
                                        </button>
                                        <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                    </div>

                                </div>
                                <div class="prev-slide" @click="scrollLeft(index)">&lsaquo;</div>
                                <div class="next-slide" @click="scrollRight(index)">&rsaquo;</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- {{ product }} -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            categoryname: '',
            currentSlide: 0,
            category_slug: '',
            categories: [],
            // slider: [],
            cart: [],
            loading: false,
            products_details: [],

            products: [],
            loading: false,
            categories: [],
            pro_count: 0,
            categoryname: '',
        };
    },
    async mounted() {


        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();

        await this.initOwlCarousel();
        await this.fetchDefaultProduct();
        this.$nextTick(() => {
            const slider = this.$refs.slider;
        });
    },

    methods: {

        cartItemCount() {
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += item.quantity;
            });
            this.itemCount = itemCount;
            console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        updateQuantity(productId, newQuantity) {
            const index = this.cart.findIndex((item) => item.product.id === productId);

            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
            }
        },
        addToCart(product) {
            console.log("Adding product to cart:", product);
            const existingCartItemIndex = this.cart.findIndex(item => item.product.id === product.id);
            if (existingCartItemIndex !== -1) {
                console.log("Product already exists in cart, increasing quantity.");
                this.cart[existingCartItemIndex].quantity++;
            } else {
                console.log("Product does not exist in cart, adding it.");
                this.cart.push({
                    product: product,
                    quantity: 1
                });
            }

            console.log("Updated cart:", this.cart);
            this.saveCart();
            this.cartItemCount();
            this.calculateSubtotal();
        },

        removeFromCart(product) {
            const index = this.cart.findIndex((item) => item.product.id === product.id);

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

            // let subtotal = 0;
            // this.cart.forEach((item) => {
            //     const product = item.products;
            //     console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
            //     const priceAsNumber = parseFloat(product.price.replace(/[^\d.]/g, '')); //510;//product.price;
            //     if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
            //         subtotal += item.quantity * priceAsNumber;
            //     } else {
            //         console.error('Invalid quantity or price:', item.quantity, product.price);
            //     }
            //     // console.log(`Intermediate Subtotal: ${subtotal}`);
            // });
            //console.log(`Final Subtotal: ${subtotal}`);
            return 0;
            //return subtotal;
        },
        async fetchDefaultProduct() {
            this.loading = true;
            const category_id = 25;
            await this.$axios.get('/unauthenticate/searchProductCategory', {
                params: {
                    category_id: category_id,
                    // Add more parameters as needed
                }
            }).then(response => {
                // console.log("======" + response.data.result);
                this.products_details = response.data.result;
                this.products = response.data.products;
                this.categories = response.data.result;
                // console.log(this.products);

            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },


        scrollLeft() {

            if (this.currentSlide > 0) {
                this.currentSlide--;
                this.scrollToCurrentSlide();
            }
        },
        scrollRight() {
            if (this.currentSlide < this.products.length - 1) {
                this.currentSlide++;
                this.scrollToCurrentSlide();
            }

        },
        scrollToCurrentSlide() {
            const slidesContainer = this.$refs.slider;
            slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
        },
        async initOwlCarousel() {
            const slider = this.$el.querySelector('.slider');
            if (!slider) {
                console.error('Slider element not found');
                return;
            }
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX;
                const walk = (x - startX) * 3; // Adjust this value for smoother scrolling
                slider.scrollLeft = scrollLeft - walk;
            });
        },
    },
};
</script>
<style>
.catLink {
    font-size: 14px;

}

.catLink i {
    margin-left: 5px;
}
</style>