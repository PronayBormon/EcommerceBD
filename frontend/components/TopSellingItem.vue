<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="top_selling">
                    <div class="row">
                        <div class="col-6">
                            <div class="sell_title">
                                <h5>Top Selling items</h5>
                            </div>
                        </div>
                    </div>
                    <div class="loading-indicator" v-if="loading" style="text-align: center;">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="slider-container">
                        <div class="slider" ref="slider">
                            <!-- {{ toproducts }} -->
                            <div class="slide" v-for="item in toproducts" :key="item.id">
                                <div class="product_grid text-start">
                                    <nuxt-link :to="`/product-details/${item.slug}`">
                                        <img :src="item.thumnail_img" class="img-fluid" loading="lazy">

                                        <span v-if="item.free_shopping == 1">Free Delivery</span>
                                        <!-- <strong>Official Store </strong> -->
                                        <h1>{{ item.name }}</h1>
                                        <p>${{ item.price - (item.price * item.discount / 100) }}</p>
                                        <p><strike>${{ item.price }}</strike>
                                            <span>{{ item.discount }}%</span>
                                        </p>
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
                                    <button type="button" class="btn_cart" @click="addToCart(item)">Add to cart </button>
                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                </div>
                            </div>

                            <div class="prev-slide" @click="scrollLeft">&lsaquo;</div>
                            <div class="next-slide" @click="scrollRight">&rsaquo;</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0, // Add this property to keep track of the current slide
            autoplayInterval: null,
            loading: false,
            toproducts: [],
            products: [],
            product: [],
            cart: [],
            
        };
    },
    async mounted() {

        await this.initOwlCarousel();
        await this.fetchDefaultProduct();
        
        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();

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
        scrollLeft() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
                this.scrollToCurrentSlide();
            }
        },
        scrollRight() {
            if (this.currentSlide < this.toproducts.length - 1) {
                this.currentSlide++;
                this.scrollToCurrentSlide();
            }
        },
        scrollToCurrentSlide() {
            const slidesContainer = this.$refs.slider;
            slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
        },

        // scrollToCurrentSlide() {
        //     const slidesContainer = this.$el.querySelector('.slider');
        //     slidesContainer.scrollLeft = this.currentSlide * slidesContainer.offsetWidth;
        // },
        async fetchDefaultProduct() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/topSellingProducts`).then(response => {
                this.toproducts = response.data;
                this.products = response.data;
                this.product = response.data;
                // console.log(response.data);
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },
        async initOwlCarousel() {
            const slider = this.$el.querySelector('.slider');
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

<style></style>
