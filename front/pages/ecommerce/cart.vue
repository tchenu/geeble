<script>
import NumberInputSpinner from "vue-number-input-spinner";

/**
 * Cart component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    components: {
        NumberInputSpinner,
    },
    data() {
        return {
            title: "Cart",
            items: [{
                    text: "Ecommerce",
                },
                {
                    text: "Cart",
                    active: true,
                },
            ],
        };
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-xl-8">
            <div class="card border shadow-none">
                <div class="card-body">
                    <div class="media border-bottom pb-3">
                        <div class="mr-4">
                            <img src="~/assets/images/product/img-1.png" alt class="avatar-lg" />
                        </div>
                        <div class="media-body align-self-center overflow-hidden">
                            <div>
                                <h5 class="text-truncate font-size-16">
                                    <nuxt-link to="/ecommerce/product-detail/1" class="text-dark">Nike N012 Running Shoes</nuxt-link>
                                </h5>
                                <p class="mb-1">
                                    Color :
                                    <span class="fw-medium">Gray</span>
                                </p>
                                <p>
                                    Size :
                                    <span class="fw-medium">08</span>
                                </p>
                            </div>
                        </div>
                        <div class="ml-2">
                            <ul class="list-inline mb-0 font-size-16">
                                <li class="list-inline-item" v-b-tooltip.hover title="Remove">
                                    <a href="#" class="text-muted px-2">
                                        <i class="uil uil-trash-alt"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item" v-b-tooltip.hover title="Add Wishlist">
                                    <a href="#" class="text-muted px-2">
                                        <i class="uil uil-heart"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Price</p>
                                    <h5 class="font-size-16">$260</h5>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Quantity</p>
                                    <div style="width: 120px;" class="product-cart-touchspin">
                                        <div class="input-group">
                                            <NumberInputSpinner :min="1" :max="100" :integerOnly="true" :value="2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Total</p>
                                    <h5 class="font-size-16">$520</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end card -->

            <div class="card border shadow-none">
                <div class="card-body">
                    <div class="media border-bottom pb-3">
                        <div class="mr-4">
                            <img src="~/assets/images/product/img-2.png" alt class="avatar-lg" />
                        </div>
                        <div class="media-body align-self-center overflow-hidden">
                            <div>
                                <h5 class="text-truncate font-size-16">
                                    <nuxt-link to="/ecommerce/product-detail/1" class="text-dark">Adidas Running Shoes</nuxt-link>
                                </h5>
                                <p class="mb-1">
                                    Color :
                                    <span class="fw-medium">Black</span>
                                </p>
                                <p>
                                    Size :
                                    <span class="fw-medium">09</span>
                                </p>
                            </div>
                        </div>
                        <div class="ml-2">
                            <ul class="list-inline mb-0 font-size-16">
                                <li class="list-inline-item" v-b-tooltip.hover title="Remove">
                                    <a href="#" class="text-muted px-2">
                                        <i class="uil uil-trash-alt"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item" v-b-tooltip.hover title="Add Wishlist">
                                    <a href="#" class="text-muted px-2">
                                        <i class="uil uil-heart"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Price</p>
                                    <h5 class="font-size-16">$260</h5>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Quantity</p>
                                    <div style="width: 120px;" class="product-cart-touchspin">
                                        <div class="input-group">
                                            <NumberInputSpinner :min="1" :max="100" :integerOnly="true" :value="2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Total</p>
                                    <h5 class="font-size-16">$260</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end card -->

            <div class="row mt-4">
                <div class="col-sm-6">
                    <nuxt-link to="/ecommerce/products" class="btn btn-link text-muted">
                        <i class="uil uil-arrow-left mr-1"></i> Continue Shopping
                    </nuxt-link>
                </div>
                <!-- end col -->
                <div class="col-sm-6">
                    <div class="text-sm-right mt-2 mt-sm-0">
                        <nuxt-link to="/ecommerce/checkout" class="btn btn-success">
                            <i class="uil uil-shopping-cart-alt mr-1"></i> Checkout
                        </nuxt-link>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row-->
        </div>

        <div class="col-xl-4">
            <div class="mt-5 mt-lg-0">
                <div class="card border shadow-none">
                    <div class="card-header bg-transparent border-bottom py-3 px-4">
                        <h5 class="font-size-16 mb-0">
                            Order Summary
                            <span class="float-end">#MN0124</span>
                        </h5>
                    </div>
                    <div class="card-body p-4">
                        <div class="table-responsive">
                            <table class="table mb-0">
                                <tbody>
                                    <tr>
                                        <td>Sub Total :</td>
                                        <td class="text-right">$ 780</td>
                                    </tr>
                                    <tr>
                                        <td>Discount :</td>
                                        <td class="text-right">- $ 78</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge :</td>
                                        <td class="text-right">$ 25</td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Tax :</td>
                                        <td class="text-right">$ 18.20</td>
                                    </tr>
                                    <tr class="bg-light">
                                        <th>Total :</th>
                                        <td class="text-right">
                                            <span class="font-weight-bold">$ 745.2</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- end table-responsive -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
