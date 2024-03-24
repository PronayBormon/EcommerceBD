<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <navbarSecond />
        <!-- Main section start here  -->

        <section class="main_content">

            <div class="container">
                <form @submit.prevent="placeOrder()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-8">

                            <div class="delivery_addreess">
                                <h6>Delivery To : {{ insertdata.name }} </h6>
                                <div class="address">
                                    <!-- <div class="d-flex align-items-center">
                                        <span>Home</span>
                                        <p>{{ insertdata.name }}</p>
                                    </div> -->
                                    <div>
                                        <p v-if="getDatas.address_1 !== null">{{
                    shipp_address }} </p>
                                        <p v-else>Please add your address</p>
                                    </div>
                                    <div>
                                        <select v-if="getDatas.address_1 !== null" v-model="shipp_address"
                                            @change="updateSelectedData()"
                                            style="padding: 3px; font-size: 14px; height: 30px;">
                                            <option v-for="(data, index) in dataArray" :key="index" :value="data">
                                                Address {{ index + 1 }}</option>
                                        </select>
                                        <!-- <a href="#" class="chage_Daddress">Change</a> -->
                                        <nuxt-link to="/user/user-profile" class="add_address" type="button"><i
                                                class="fa-solid fa-plus"></i>Add
                                            New address</nuxt-link>
                                    </div>
                                    <!-- modal start  -->
                                    <div class="modal_checkoutpage billing ">
                                        <div class="modal_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button
                                                        class="btn_edit modal_close"><i
                                                            class="fa-solid fa-x"></i></button></div>
                                            </div>
                                            <form action="">
                                                <select name="" class="form-control">
                                                    <option value="" disabled selected> Select One </option>
                                                    <option value="">Address 1</option>
                                                    <option value="">Address 2</option>
                                                </select>
                                                <button class="btn_confirm mt-2">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                    <!-- modal end  -->
                                </div>
                                <div class="pickUp_address d-none">
                                    <!-- <h6>Collect your parcel from the nearest Ecommerce Pick-up Point with a reduced
                                        shipping fee</h6>
                                    <p>20 suggested collection point(s) nearbyCheck <a href="#"
                                            class="btn_picup">Pick-up Points</a></p> -->

                                    <!-- modal start  -->
                                    <!--  
                                        <div class="modal_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button
                                                        class="btn_edit modal_close"><i
                                                            class="fa-solid fa-x"></i></button></div>
                                            </div>
                                            <form action="">
                                                <select name="" class="form-control">
                                                    <option value="" disabled selected> Select One </option>
                                                    <option value="">PickUp Point One </option>
                                                    <option value="">Pick Point Two </option>
                                                </select>
                                                <button class="btn_confirm mt-2">Submit</button>
                                            </form>
                                        </div>
                                    </div> -->
                                    <!-- modal end  -->
                                </div>
                                <p>Bill to:{{ }}
                                    <select v-if="getDatas.address_1 !== null"
                                        v-model="billAddress" style="padding: 3px; font-size: 14px; height: 30px;">
                                        <option v-for="(data, index) in dataArray" :key="index" :value="data">
                                            Address {{ index + 1 }}</option>
                                    </select>
                                    <nuxt-link to="/user/user-profile" v-else class="btn_edit">Add address</nuxt-link>
                                </p>
                            </div>

                            <div class="items_details">
                                <h5>Items</h5>
                                <div class="checkItem" v-for="item in cart" :key="item.product.id">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <!-- {{ cart }} -->
                                            <div class="item">
                                                <nuxt-link style="max-width: 320px; min-width: 290px;"
                                                    :to="`/product-details/${item.product.pro_slug}`"
                                                    class="d-flex align-items-center text-dark">
                                                    <div><img :src="item.product.thumnail_img" class="img-fluid" alt="">
                                                    </div>
                                                    <div class="" style="width: 45%;">
                                                        <h5><b>{{ item.product.product_name }} </b></h5>
                                                        <p>
                                                            <span v-if="item.product.brand_name" class="p-0 m-0">{{
                    item.product.brand_name }}</span>
                                                            <span v-else class="p-0 m-0">No Brand</span>
                                                            <span
                                                                v-if="item.product.color !== null && item.product.color !== '' && item.product.color !== undefined"
                                                                class="p-0 m-0">,
                                                                Color: <b>{{ item.product.color }}</b></span>
                                                            <span
                                                                v-if="item.product.size !== null && item.product.size !== '' && item.product.size !== undefined"
                                                                class="p-0 m-0">,
                                                                Size:<b>{{ item.product.size }}</b> </span>
                                                        </p>
                                                    </div>
                                                </nuxt-link>
                                                <div class="">
                                                    <span class="d-flex align-items-center"
                                                        style="min-width: 80px;">QTY: {{ item.quantity }}</span>
                                                </div>
                                                <div>
                                                    <button type="button" @click="removeFromCart(item.product)"><i
                                                            class="fa-solid fa-trash-can"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="d-flex justify-content-end align-items-center">
                                                <span class="badges px-1"
                                                    v-if="item.product.discount_status == 1 && item.product.discount !== 0">{{
                    item.product.discount }}%</span>
                                                <span class="badges px-1"
                                                    v-if="item.product.discount_status == 2 && item.product.discount !== 0">${{
                    item.product.discount }}</span>
                                                <p><del class="me-1" v-if="item.product.discount !== 0">${{
                    item.product.price }}</del>${{ item.product.last_price }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sub_total">
                                        <div class="row">
                                            <div class="col-8">
                                                <div class="delivery_section">
                                                    <h5>Standard delivery | <span
                                                            v-if="item.product.flat_rate_price">${{
                    item.product.flat_rate_price }}</span> <span v-else>Free
                                                            Delivery</span> </h5>
                                                    <p>Receive by {{ calculateShippingDate(item.product.shipping_days)
                                                        }}</p>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="s_item_sub">

                                                    <p>{{ item.quantity }} item(s). Subtotal: ${{ getPrice(item) }}</p>
                                                    <span>Save: ${{ getSave(item) }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="items_details">
                                <h5>Happy Shopping</h5>
                                <div class="row">
                                    <div class="col-12">
                                        <center>
                                            <div class="loading-indicator" v-if="loading">
                                                <div class="lodcontainer">
                                                    <center class="loader-text">Loading...</center>
                                                    <img src="/loader/loader.gif" alt="Loader" />
                                                </div>
                                            </div>
                                        </center>
                                        start

                                        <table class="table w-100" style="width: 100%; font-size: 12px;">
                                            <thead>
                                                <tr>

                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Images</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in cart" :key="item.product.id">
                                                    <td>
                                                        <nuxt-link :to="`/product-details/${item.product.pro_slug}`">{{
                    item.product.product_name }}</nuxt-link>
                                                    </td>
                                                    <td><img :src="item.product.thumnail_img" class="img-thumbnail"
                                                            style="width: 50px; height:10%;"></td>
                                                    <td>{{ item.quantity }} x ${{ item.product.price }}</td>
                                                    <td><button type="button" @click="removeFromCart(item.product)"><i
                                                                class="fa-solid fa-trash-can"></i></button></td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        end 

                                    </div>

                                </div>
                                <div class="sub_total">
                                    <div class="row">

                                        <div class="col-12">
                                            <div class="s_item_sub">
                                                <p>{{ itemCount }} item(s). Subtotal: {{ subtotal }} TK</p>
                                                <span>Save 262 TK</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="delivery_addreess">
                                <strong>BILLING DETAILS</strong>
                                <div v-if="errors" style="text-align: center;">
                                    <ul style="font-size: 14px;">
                                        <li v-for="(error, field) in errors" :key="field">
                                            <span class="text-danger">{{ error[0] }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.name" />
                                            <span class="text-danger" v-if="errors.name"><small>{{ errors.name[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Name</label>

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.email" />
                                            <span class="text-danger" v-if="errors.email"><small>{{ errors.email[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Email</label>

                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.phone_number" />
                                            <span class="text-danger" v-if="errors.phone_number"><small>{{
                    errors.phone_number[0] }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Phone</label>

                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.address" />
                                            <span class="text-danger" v-if="errors.address"><small>{{ errors.address[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Address</label>

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.country" />
                                            <span class="text-danger" v-if="errors.country"><small>{{ errors.country[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Country</label>

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.city" />
                                            <span class="text-danger" v-if="errors.city"><small>{{ errors.city[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>City</label>

                                        </div>
                                    </div>

                                </div>

                                <hr />
                                <div class="different-address-form-trigger">
                                    <input type="checkbox" id="direrent-address-toggle" class="sn-checkbox"
                                        v-model="showDifferentAddress" @click="copybillingAddress">
                                    <label for="direrent-address-toggle">SHIP TO DIFFERENT ADDRESS</label>
                                    <hr />
                                    <div class="row" v-if="showDifferentAddress">
                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_name" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Name</label>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_email" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Email</label>

                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="group ">
                                                <input type="text" class="input"
                                                    v-model="insertdata.shipper_phone_number" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Phone</label>

                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_address" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Address</label>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_country" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Country</label>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_city" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>City</label>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="col-md-4">
                            <div class="cart_sidebar">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p>Ecommerce Voucher</p>
                                    <!-- <strong>{{ coupon.name }}</strong> -->
                                </div>

                                <form @submit.prevent="getCouponData()" id="coupon" action="">
                                    <div class=" d-flex align-items-center">
                                        <input type="text"
                                            style="font-size: 12px;border: none !important; border-bottom: 1px solid #900C3F !important;"
                                            v-model="coupons.couponCode" class="form-control me-2 rounded-0"
                                            placeholder="Enter Your Promo Code ">
                                        <button class="btn_confirm h-100 rounded-0"
                                            style="border: 1px solid;">Submit</button>
                                    </div>
                                    <p class="text-success msg mt-2" style="font-size: 12px;">Valid</p>
                                </form>

                                <div class="pirce_summary">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Order Summary</strong>
                                                </td>
                                                <td>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Items Total</strong></td>
                                                <td class="text-end">${{ sumOfLastPrices }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Delivery Fee </strong></td>
                                                <td class="text-end">${{sumOfFlatRatePrices}}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Total Payment</strong></td>
                                                <td class="text-end">${{ totalSum }}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <span v-if="cart.length > 0">
                                        <button type="submit" class="btn_cart text-center"
                                            style="visibility: unset; background-color: #900C3F; color: #fff; margin-top: 10px;">Place
                                            Order</button>
                                    </span>
                                    <span v-else>
                                        <center>Please add to cart.</center>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <!-- END Main Section here -->
        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
    </div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import RecentView from '~/components/RecentView.vue';
import navbarSecond from '../components/navbarSecond.vue';

export default {
    middleware: "auth",
    components: {
        navbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView
    },
    head: {
        title: 'Checkout',
    },
    data() {
        return {
            billAddress: '',
            shipp_address: null,
            userdata: {
                name: '',
                email: '',
                phone_number: '',
                gender: '',
                birthdate: '',
                address: '',
                address_1: '',
                country_1: '',
                landmark_1: '',
                city_1: '',
                phone_1: '',
                address_2: '',
                country_2: '',
                landmark_2: '',
                city_2: '',
                phone_2: '',
                created_at: null,
            },
            getDatas: [],
            insertdata: {
                name: '',
                address: '',
                email: '',
                phone_number: '',
                country: '',
                city: '',
                //ship
                shipper_name: '',
                shipper_email: '',
                shipper_phone_number: '',
                shipper_address: '',
                shipper_country: '',
                shipper_city: '',

                address_1: '',
                country_1: '',
                city_1: '',
                landmark_1: '',

                address_2: '',
                country_2: '',
                city_2: '',
                landmark_2: '',

                addresses: [],

            },
            coupons: {
                couponCode: '',
            },
            loading: false,
            email: '',
            showDifferentAddress: false,
            differentAddressField: '', // Initialize different address field if needed
            cart: [],
            notifmsg: '',
            invidecodeError: '',
            errors: {},
            itemCount: 0,
            subtotal: 0,
            updatedQuantity: 0,
            customer_id: '',
            coupon: '',
            dataArray: [],
            sumOfLastPrices: 0,
            sumOfFlatRatePrices: 0,
            totalSum: 0,
        };
    },

    computed: {
        loggedIn() {
            if (!$auth.loggedIn) {
                this.$router.push('/checkout');
            } else {
                this.$router.push('/');
            }
            return this.$auth.loggedIn;

        }
    },
    mounted() {
        this.defaultLoadingData();
        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();
        this.subtotal = this.calculateSubtotal();
        this.openPromo();
        this.cart.forEach(item => {
            item.shippingDate = this.calculateShippingDate(item.product.shipping_days);
        });

        if (process.client) {
            $(document).ready(function () {
                $(".filter_btn").on('click', function () {
                    $(".filter_modal").show();
                });
                $(".filter_close").on('click', function () {
                    $(".filter_modal").hide();
                });
            })
            // Now you can work with myElement
        };
        this.calculateSumOfLastPrices();
    },
    methods: {
        calculateSumOfLastPrices() {
            const cartData = localStorage.getItem('cart');
            if (cartData) {
                const cart = JSON.parse(cartData);
                let sumOfLastPrices = 0;
                let sumOfFlatRatePrices = 0;

                cart.forEach(item => {
                    sumOfLastPrices += parseFloat(item.product.last_price) * item.quantity;
                    sumOfFlatRatePrices += parseFloat(item.product.flat_rate_price) * item.quantity;
                });

                const totalSum = sumOfLastPrices + sumOfFlatRatePrices;

                this.sumOfLastPrices = sumOfLastPrices.toFixed(2);
                this.sumOfFlatRatePrices = sumOfFlatRatePrices.toFixed(2);
                this.totalSum = totalSum.toFixed(2);
            }
        },

        updateSelectedData() {
            console.log("Selected data:", this.shipp_address, "BilTo:", this.billAddress);
        },

        getPrice(item) {
            const price = item.quantity * item.product.last_price;
            console.log(price);
            return price.toFixed(2);
        },
        getSave(item) {
            const save = (item.quantity * item.product.price) - (item.quantity * item.product.last_price);
            console.log(save);
            return save.toFixed(2);
        },
        calculateShippingDate(shippingDays) {
            const currentDate = new Date();
            const currentHour = currentDate.getHours();
            const nextDay = currentHour >= 17 ? 1 : 0;

            const shippingDate = new Date();
            shippingDate.setDate(currentDate.getDate() + shippingDays + nextDay);

            const formattedDate = shippingDate.toLocaleDateString('en-US', {
                weekday: 'short',
                day: 'numeric',
                year: 'numeric'
            });

            return formattedDate;
        },
        getCouponData() {
            const formData = new FormData();
            formData.append('couponCode', this.coupons.couponCode);

            this.$axios.get(`/unauthenticate/readcoupons/${this.coupons.couponCode}`).then(response => {
                this.coupon = response.data.data;
                $('.msg').fadeIn();
            });
        },

        openPromo() {
            $(".btn_promo").on("click", function () {
                $(".promo").fadeIn();
            });
            $(".modal_close").on("click", function () {
                $(".promo").fadeOut();
            });
        },
        copybillingAddress() {

            this.insertdata.shipper_name = this.insertdata.name;
            this.insertdata.shipper_email = this.insertdata.email;
            this.insertdata.shipper_phone_number = this.insertdata.phone_number;
            this.insertdata.shipper_address = this.insertdata.address;
            this.insertdata.shipper_country = this.insertdata.country;
            this.insertdata.shipper_city = this.insertdata.city;

        },
        defaultLoadingData() {
            this.$axios.get('/auth/showProfileData').then(response => {
                console.log(response.data.data.name)
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.getDatas = response.data.data;
                this.getDatasAddressOne = response.data.data.address_1;
                this.insertdata.email = response.data.data.email;
                this.insertdata.phone_number = response.data.data.phone_number;

                let address1 = this.getDatasAddressOne ? `${response.data.data.landmark_1},${response.data.data.address_1}, ${response.data.data.city_1}, ${response.data.data.country_1}` : "";

                let address2 = this.getDatasAddressOne ? `${response.data.data.landmark_2},${response.data.data.address_2}, ${response.data.data.city_2}, ${response.data.data.country_2} ` : "";

                console.log("==="+this.getDatasAddressOne);

                // if (getDatas.address_1 == null) {
                //     this.shipp_address = getDatas.address_1;
                // } else  {
                //     this.shipp_address = address1;
                // }
                this.shipp_address = address1;
                this.billAddress = address1;
                this.dataArray.push(address1, address2);
            });
        },

        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.cartItemCount();
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        placeOrder() {

            const formData = new FormData();
            formData.append('cart', JSON.stringify(this.cart));
            //Billing
            // formData.append('billing_name', this.insertdata.name);
            // formData.append('billing_address', this.insertdata.address);
            // formData.append('billing_email', this.insertdata.email);
            // formData.append('billing_phone_number', this.insertdata.phone_number);
            // formData.append('billing_country', this.insertdata.country);
            // formData.append('billing_city', this.insertdata.city);
            //Shipping
            // formData.append('shipper_name', this.insertdata.shipper_name);
            // formData.append('shipper_email', this.insertdata.shipper_email);
            // formData.append('shipper_phone_number', this.insertdata.shipper_phone_number);
            // formData.append('shipper_address', this.insertdata.shipper_address);
            // formData.append('shipper_country', this.insertdata.shipper_country);
            // formData.append('shipper_city', this.insertdata.shipper_city);
            formData.append('subTotal', this.totalSum);
            formData.append('item_total', this.sumOfLastPrices);
            formData.append('shipp_address', this.shipp_address);
            formData.append('billAddress', this.billAddress);
            formData.append('Cutomer_name', this.insertdata.name);
            formData.append('Cutomer_email', this.insertdata.email);
            formData.append('Cutomer_phone_number', this.insertdata.phone_number);
            // console.log(formData);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/order/submitOrder',
                formData, {
                headers,
            })
                .then((response) => {
                    // const token = response.data.access_token;
                    // this.$auth.setUserToken(token);
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    this.clearCart();
                    Toast.fire({
                        icon: "success",
                        title: "Order submitted successfully!"
                    });
                    this.$router.push('/');

                }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                        console.log(this.errors); // Log the errors to check its content
                        // Extract error messages from the errors object
                        const errorMessages = Object.values(this.errors).flat();

                        // Concatenate error messages into a single string
                        const errorMessage = errorMessages.join('<br>');
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "error",
                            title: errorMessage
                        });
                    }
                });

        },
        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.cartItemCount();
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },
        updateQuantity(productId, newQuantity) {

            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === productId);
            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
                setTimeout(() => {
                    this.loading = false;
                }, 2000);

            }

        },
        loadCart() {
            this.loading = true;
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        handleCartItemCountUpdated(itemCount) {
            // This method will be called when the event is emitted from ComponentA
            console.log('Received  DesktopViewOptions Com.:', itemCount);
            // Update the local data property with the received itemCount
            this.itemCount = itemCount;
        },

        removeFromCart(product) {
            this.loading = true;
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
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));

        },
        addToCart(productId) {

            const productToAdd = this.prouducts.find((product) => product.id === productId);
            const existingItem = this.cart.find((item) => item.product.id === productId);

            if (existingItem) {
                // existingItem.quantity += 1;
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
        cartItemCount() {
            //  this.loading = true;
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        calculateSubtotal() {
            //  this.loading = true;
            let subtotal = 0;
            this.cart.forEach((item) => {
                const product = item.product;
                // console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
                // const priceWithoutCommas = product.price.replace(/,/g, '');
                const priceWithoutCommas = product.price;
                const priceAsNumber = parseFloat(priceWithoutCommas);
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
    },
};
</script>
<style>
.checkItem {
    border-bottom: 1px solid #e1e1e1;
    padding-top: 15px;
}

.checkItem:last-child {
    border: none;
}
</style>
