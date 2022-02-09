<script>
import {
    productData
} from "./data-products";
/**
 * Products component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            productData: productData,
            title: "Products",
            items: [{
                    text: "Ecommerce",
                },
                {
                    text: "Products",
                    active: true,
                },
            ],
            sliderPrice: 800,
            currentPage: 1,
        };
    },
    middleware: "authentication",
    methods: {
        valuechange(value) {
            this.productData = productData.filter(function (product) {
                return product.newprice <= value.currentValue;
            });
        },
    },
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-xl-3 col-lg-4">
            <div class="card">
                <div class="card-header bg-transparent border-bottom">
                    <h5 class="mb-0">Filters</h5>
                </div>

                <div class="p-4">
                    <h5 class="font-size-14 mb-3">Categories</h5>
                    <div class="custom-accordion">
                        <a class="text-body font-weight-semibold pb-2 d-block" data-toggle="collapse" href="javascript: void(0);" role="button" aria-expanded="false" v-b-toggle.categories-collapse>
                            <i class="mdi mdi-chevron-up accor-down-icon text-primary mr-1"></i>
                            Footwear
                        </a>
                        <b-collapse visible id="categories-collapse">
                            <div class="card p-2 border shadow-none">
                                <ul class="list-unstyled categories-list mb-0">
                                    <li>
                                        <a href="#">
                                            <i class="mdi mdi-circle-medium mr-1"></i> Formal
                                            Shoes
                                        </a>
                                    </li>
                                    <li class="active">
                                        <a href="#">
                                            <i class="mdi mdi-circle-medium mr-1"></i> Sports
                                            Shoes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="mdi mdi-circle-medium mr-1"></i> casual
                                            Shoes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="mdi mdi-circle-medium mr-1"></i> Sandals
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="mdi mdi-circle-medium mr-1"></i> Slippers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </b-collapse>
                    </div>
                </div>

                <div class="p-4 border-top">
                    <div>
                        <h5 class="font-size-14 mb-4">Price</h5>
                        <vue-slide-bar v-model="sliderPrice" :min="0" :max="1000" @dragEnd="valuechange" />
                    </div>
                </div>

                <div class="custom-accordion">
                    <div class="p-4 border-top">
                        <div>
                            <h5 class="font-size-14 mb-0">
                                <a href="javascript: void(0);" class="text-dark d-block" data-toggle="collapse" v-b-toggle.filtersizes-collapse>
                                    Sizes
                                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                </a>
                            </h5>

                            <b-collapse visible id="filtersizes-collapse">
                                <div class="mt-4">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <h5 class="font-size-15 mb-0">Select Sizes</h5>
                                        </div>
                                        <div class="w-xs">
                                            <select class="custom-select">
                                                <option value="1">3</option>
                                                <option value="2">4</option>
                                                <option value="3">5</option>
                                                <option value="4">6</option>
                                                <option value="5" selected>7</option>
                                                <option value="6">8</option>
                                                <option value="7">9</option>
                                                <option value="8">10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                    </div>

                    <div class="p-4 border-top">
                        <div>
                            <h5 class="font-size-14 mb-0">
                                <a href="javascript: void(0);" class="text-dark d-block" data-toggle="collapse" v-b-toggle.filterprodductcolor-collapse>
                                    Colors
                                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                </a>
                            </h5>

                            <b-collapse visible id="filterprodductcolor-collapse">
                                <div class="mt-4">
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck1" />
                                        <label class="custom-control-label" for="productcolorCheck1">
                                            <i class="mdi mdi-circle text-dark mx-1"></i>
                                            Black
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck2" />
                                        <label class="custom-control-label" for="productcolorCheck2">
                                            <i class="mdi mdi-circle text-light mx-1"></i>
                                            White
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck3" />
                                        <label class="custom-control-label" for="productcolorCheck3">
                                            <i class="mdi mdi-circle text-secondary mx-1"></i>
                                            Gray
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck4" />
                                        <label class="custom-control-label" for="productcolorCheck4">
                                            <i class="mdi mdi-circle text-primary mx-1"></i>
                                            Blue
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck5" />
                                        <label class="custom-control-label" for="productcolorCheck5">
                                            <i class="mdi mdi-circle text-success mx-1"></i>
                                            green
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck6" />
                                        <label class="custom-control-label" for="productcolorCheck6">
                                            <i class="mdi mdi-circle text-danger mx-1"></i>
                                            Red
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck7" />
                                        <label class="custom-control-label" for="productcolorCheck7">
                                            <i class="mdi mdi-circle text-warning mx-1"></i>
                                            Yellow
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                        <input type="checkbox" class="custom-control-input" id="productcolorCheck8" />
                                        <label class="custom-control-label" for="productcolorCheck8">
                                            <i class="mdi mdi-circle text-purple mx-1"></i>
                                            Purple
                                        </label>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                    </div>

                    <div class="p-4 border-top">
                        <div>
                            <h5 class="font-size-14 mb-0">
                                <a href="javascript: void(0);" class="text-dark d-block" data-toggle="collapse" v-b-toggle.filterproduct-color-collapse>
                                    Customer Rating
                                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                </a>
                            </h5>

                            <b-collapse visible id="filterproduct-color-collapse">
                                <div class="mt-4">
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productratingRadio1" name="productratingRadio1" class="custom-control-input" />
                                        <label class="custom-control-label" for="productratingRadio1">
                                            4
                                            <i class="mdi mdi-star text-warning"></i> &
                                            Above
                                        </label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productratingRadio2" name="productratingRadio1" class="custom-control-input" />
                                        <label class="custom-control-label" for="productratingRadio2">
                                            3
                                            <i class="mdi mdi-star text-warning"></i> &
                                            Above
                                        </label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productratingRadio3" name="productratingRadio1" class="custom-control-input" />
                                        <label class="custom-control-label" for="productratingRadio3">
                                            2
                                            <i class="mdi mdi-star text-warning"></i> &
                                            Above
                                        </label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productratingRadio4" name="productratingRadio1" class="custom-control-input" />
                                        <label class="custom-control-label" for="productratingRadio4">
                                            1
                                            <i class="mdi mdi-star text-warning"></i>
                                        </label>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                    </div>

                    <div class="p-4 border-top">
                        <div>
                            <h5 class="font-size-14 mb-0">
                                <a href="#filterproduct-discount-collapse" class="text-dark d-block" data-toggle="collapse" v-b-toggle.filterproduct-discount-collapse>
                                    Discount
                                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                </a>
                            </h5>

                            <b-collapse id="filterproduct-discount-collapse">
                                <div class="mt-4">
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productdiscountRadio1" name="productdiscountRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="productdiscountRadio1">50% or more</label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productdiscountRadio2" name="productdiscountRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="productdiscountRadio2">40% or more</label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productdiscountRadio3" name="productdiscountRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="productdiscountRadio3">30% or more</label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productdiscountRadio4" name="productdiscountRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="productdiscountRadio4">20% or more</label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productdiscountRadio5" name="productdiscountRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="productdiscountRadio5">10% or more</label>
                                    </div>
                                    <div class="custom-control custom-radio mt-2">
                                        <input type="radio" id="productdiscountRadio6" name="productdiscountRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="productdiscountRadio6">Less than 10%</label>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-9 col-lg-8">
            <div class="card">
                <div class="card-body">
                    <div>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <h5>Showing result for "Shoes"</h5>
                                    <ol class="breadcrumb p-0 bg-transparent mb-2">
                                        <li class="breadcrumb-item">
                                            <a href="javascript: void(0);">Footwear</a>
                                        </li>
                                        <li class="breadcrumb-item active">Shoes</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-inline float-md-end">
                                    <div class="search-box ml-2">
                                        <div class="position-relative">
                                            <input type="text" class="form-control bg-light border-light rounded" placeholder="Search..." />
                                            <i class="mdi mdi-magnify search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul class="nav nav-tabs nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list">
                            <li class="nav-item">
                                <a class="nav-link disabled fw-medium" href="#" tabindex="-1" aria-disabled="true">Sort by:</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Popularity</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Newest</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Discount</a>
                            </li>
                        </ul>

                        <div class="row">
                            <div class="col-xl-4 col-sm-6" v-for="(item, index) in productData" :key="index">
                                <div class="product-box">
                                    <div class="product-img pt-4 px-4">
                                        <div class="product-ribbon badge badge-danger">- {{ item.discount }} %</div>
                                        <div class="product-wishlist">
                                            <a href="#">
                                                <i class="mdi mdi-heart-outline"></i>
                                            </a>
                                        </div>
                                        <img :src="item.image" alt class="img-fluid mx-auto d-block" />
                                    </div>

                                    <div class="text-center product-content p-4">
                                        <h5 class="mb-1">
                                            <nuxt-link :to="'/ecommerce/product-detail/' + item.id" class="text-dark">{{ item.name }}</nuxt-link>
                                        </h5>
                                        <p class="text-muted font-size-13">{{ item.disc }}</p>

                                        <h5 class="mt-3 mb-0">
                                            <span class="text-muted mr-2">
                                                <del>${{ item.oldprice }}</del>
                                            </span>
                                            ${{ item.newprice }}
                                        </h5>

                                        <ul class="list-inline mb-0 text-muted product-color">
                                            <li class="list-inline-item">Colors :</li>
                                            <li class="list-inline-item" v-for="(item, index) in item.colors" :key="index">
                                                <i :class="`mdi mdi-circle text-${item}`"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="row mt-4">
                            <div class="col-lg-12">
                                <b-pagination v-if="productData.length > 0" class="justify-content-end" pills v-model="currentPage" :total-rows="productData.length" :per-page="6" aria-controls="my-table"></b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
