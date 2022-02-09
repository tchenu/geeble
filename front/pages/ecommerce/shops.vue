<script>
/**
 * Shops component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`
        };
    },
    data() {
        return {
            title: "Shops",
            items: [{
                    text: "Ecommerce"
                },
                {
                    text: "Shops",
                    active: true
                }
            ],
            shops: [{
                    id: 1,
                    name: "Morrie Mages",
                    desc: "Clifton Taylor",
                    products: "94",
                    balance: "9,852",
                    color: "primary"
                },
                {
                    id: 2,
                    name: "Brendle's",
                    desc: "Karl Early",
                    products: "62",
                    balance: "7,952",
                    color: "warning"
                },
                {
                    id: 3,
                    name: "Tech Hifi",
                    desc: "Marion Glaze",
                    products: "40",
                    balance: "6,265",
                    color: "success"
                },
                {
                    id: 4,
                    name: "Lafayette",
                    desc: "Brent Johnson",
                    products: "51",
                    balance: "7,235",
                    color: "danger"
                },
                {
                    id: 5,
                    name: "Micro Design",
                    desc: "Kimberly Martinez",
                    products: "34",
                    balance: "4,223",
                    color: "info"
                },
                {
                    id: 6,
                    name: "Sportmart",
                    desc: "Sarah Stewart",
                    products: "43",
                    balance: "5,632",
                    color: "secondary"
                },
                {
                    id: 7,
                    name: "Tech Hifi",
                    desc: "Lauren Doyle",
                    products: "40",
                    balance: "5,268",
                    color: "success"
                },
                {
                    id: 8,
                    name: "Brendle's",
                    desc: "Elaina Torres",
                    products: "31",
                    balance: "3,965",
                    color: "primary"
                },
                {
                    id: 9,
                    name: "Standard Sales",
                    desc: "Willie Farber",
                    products: "60",
                    balance: "7,425",
                    color: "warning"
                }
            ]
        };
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-2">
        <div class="col-md-6">
            <div class="mb-3">
                <a href="javascript:void(0);" class="btn btn-success waves-effect waves-light"><i class="mdi mdi-plus me-2"></i> Add New</a>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-inline float-md-end mb-3">
                <div class="search-box ml-2">
                    <div class="position-relative">
                        <input type="text" class="form-control rounded border-0" placeholder="Search..." />
                        <i class="mdi mdi-magnify search-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-4 col-sm-6" v-for="(item, index) in shops" :key="index">
            <div class="card">
                <div class="card-body">
                    <div class="media">
                        <div class="avatar-sm me-4">
                            <span :class="
                    `avatar-title bg-soft-${item.color} text-${item.color} font-size-16 rounded-circle`
                  ">
                                {{ item.name.charAt(0) }}
                            </span>
                        </div>
                        <div class="media-body align-self-center">
                            <div class="border-bottom pb-1">
                                <h5 class="text-truncate font-size-16 mb-1">
                                    <a href="#" class="text-dark">{{ item.name }}</a>
                                </h5>
                                <p class="text-muted">
                                    <i class="mdi mdi-account me-1"></i> {{ item.desc }}
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Products</p>
                                        <h5 class="font-size-16 mb-0">{{ item.products }}</h5>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Wallet Balance</p>
                                        <h5 class="font-size-16 mb-0">{{ item.balance }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-12">
            <div class="text-center my-3">
                <a href="javascript:void(0);" class="text-primary"><i class="mdi mdi-loading mdi-spin font-size-20 align-middle me-2"></i>
                    Load more
                </a>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
