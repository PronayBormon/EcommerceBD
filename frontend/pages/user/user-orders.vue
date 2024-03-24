<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <navbarSecond/>
        <!-- Main section start here  -->

        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar/>
                    </div>
                    <div class="col-md-9 ps-md-0">
                        <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="main_profile">

                            <div class="recent_orders">
                                <h4>Orders </h4>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Place On </th>
                                            <th>Total </th>
                                            <th>Status </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="order in orders" :key="order.id">
                                            <td>{{ order.orderId }}</td>
                                            <td>{{ order.placeOn }}</td>
                                            <td>{{ order.total }}</td>
                                            <td>{{ order.name }}</td>
                                            <td><button class="btn btn_edit_nxt" @click="orderDetails(order.orderId)"><i
                                                        class="fas fa-search-plus"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row d-none">
                                    <div class="col-12">
                                        <div class="pagination">
                                            <ul>
                                                <li>
                                                    <a href="#"> prv </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="active"> 1 </a>
                                                </li>
                                                <li>
                                                    <a href="#"> 2 </a>
                                                </li>
                                                <li>
                                                    <a href="#"> 3 </a>
                                                </li>
                                                <li>
                                                    <a href="#"> next </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
import userSidebar from '~/components/userSidebar.vue';
import navbarSecond from '../../components/navbarSecond.vue';

export default {

    middleware: 'auth',
    components: {
        navbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,

    },
    head: {
        title: 'My Orders',
    },
    data() {
        return {
            loading: false,
            orders: [],
            errors: {},
        }
    },
    mounted() {
        this.loadingOrders();
        this.setupEventHandlers();
    },
    methods: {
        setupEventHandlers() {
            // Ensure DOM elements exist before executing jQuery functions
            $(".post_mdal_open").click(function () {
                $(".post_mdal_").fadeIn();
                $(".product_slider").css("z-index", "0");
            })
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
                $(".product_slider").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
                $(".product_slider").css("z-index", "1");
            })
        },

        orderDetails(orderId) {

            this.$router.push({
                path: '/user/order-details',
                query: {
                    orderId: orderId
                }
            })

        },
        async loadingOrders() {
            this.loading = true;
            await this.$axios.get(`/order/allOrders`).then(response => {
                this.orders = response.data.orderdata;
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },

    }
}
</script>

<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}</style>
