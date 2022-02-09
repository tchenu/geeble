<script>
/**
 * Customer component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Customers",
            items: [{
                    text: "Ecommerce",
                },
                {
                    text: "Customers",
                    active: true,
                },
            ],
            customersData: [{
                    id: "#MN0123",
                    profile: require("~/assets/images/users/avatar-2.jpg"),
                    name: "William Shipp",
                    email: "WilliamShipp@jourrapide.com",
                    date: "14 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0122",
                    name: "Joe Hardy",
                    email: "JoeHardy@dayrep.com",
                    date: "14 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0121",
                    profile: require("~/assets/images/users/avatar-3.jpg"),
                    name: "Thomas Hankins",
                    email: "ThomasHankins@dayrep.com",
                    date: "13 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0120",
                    profile: require("~/assets/images/users/avatar-4.jpg"),
                    name: "Mary Frazier",
                    email: "MaryFrazier@armyspy.com",
                    date: "12 Apr, 2020",
                    status: "Deactive",
                },
                {
                    id: "#MN0119",
                    name: "Sam Perry",
                    email: "SamPerry@rhyta.com",
                    date: "12 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0118",
                    profile: require("~/assets/images/users/avatar-4.jpg"),
                    name: "Muriel Myers",
                    email: "MurielMyers@rhyta.com",
                    date: "09 Apr, 2020",
                    status: "Deactive",
                },
                {
                    id: "#MN0117",
                    name: "Jessie Jacobs",
                    email: "Jessie Jacobs@teleworm.com",
                    date: "09 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0116",
                    profile: require("~/assets/images/users/avatar-6.jpg"),
                    name: "Edward King",
                    email: "EdwardKing@teleworm.com",
                    date: "08 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0115",
                    profile: require("~/assets/images/users/avatar-7.jpg"),
                    name: "Stacy Webster",
                    email: "StacyWebster@rhyta.com",
                    date: "07 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0114",
                    name: "Amy McDonald",
                    email: "AmyMcDonald@rhyta.com",
                    date: "05 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0113",
                    name: "Terry Brown",
                    email: "TerryBrown@rhyta.com",
                    date: "02 Apr, 2020",
                    status: "Active",
                },
                {
                    id: "#MN0112",
                    profile: require("~/assets/images/users/avatar-8.jpg"),
                    name: "Crissy Holland",
                    email: "CrissyHolland@rhyta.com",
                    date: "23 Mar, 2020",
                    status: "Deactive",
                },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [{
                    key: "check",
                    label: "",
                },
                {
                    key: "id",
                    label: "Customer ID",
                },
                {
                    key: "name",
                    label: "Customer",
                    sortable: true,
                },
                {
                    key: "email",
                    sortable: true,
                },
                {
                    key: "date",
                    label: "Join Date",
                    sortable: true,
                },
                {
                    key: "status",
                    label: "Status",
                    sortable: true
                },
                "action",
            ],
        };
    },
    computed: {
        /**
         * Total no. of records
         */
        rows() {
            return this.customersData.length;
        },
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6">
                    <div id="tickets-table_length" class="dataTables_length">
                        <label class="d-inline-flex align-items-center">
                            Show&nbsp;
                            <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                        </label>
                    </div>
                </div>
                <!-- Search -->
                <div class="col-sm-12 col-md-6">
                    <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                        <label class="d-inline-flex align-items-center">
                            Search:
                            <b-form-input v-model="filter" type="search" class="form-control form-control-sm ml-2"></b-form-input>
                        </label>
                    </div>
                </div>
                <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0 ">
                <b-table table-class="table table-centered datatable table-card-list" thead-tr-class="bg-transparent" :items="customersData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                    <template v-slot:cell(check)="data">
                        <div class="custom-control custom-checkbox text-center">
                            <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />
                            <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                        </div>
                    </template>
                    <template v-slot:cell(id)="data">
                        <a href="javascript: void(0);" class="text-dark fw-bold">{{ data.item.id }}</a>
                    </template>

                    <template v-slot:cell(name)="data">
                        <img v-if="data.item.profile" :src="data.item.profile" alt class="avatar-xs rounded-circle me-2" />
                        <div v-if="!data.item.profile" class="avatar-xs d-inline-block me-2">
                            <span class="avatar-title rounded-circle bg-light text-body">{{data.item.name.charAt(0)}}</span>
                        </div>

                        <a href="#" class="text-body">{{ data.item.name }}</a>
                    </template>
                    <template v-slot:cell(status)="data">
                        <div class="badge badge-pill bg-soft-success font-size-12" :class="{'bg-soft-danger': data.item.status === 'Deactive'}">{{ data.item.status }}</div>
                    </template>
                    <template v-slot:cell(action)>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <a href="javascript:void(0);" class="px-2 text-primary" v-b-tooltip.hover title="Edit">
                                    <i class="uil uil-pen font-size-18"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript:void(0);" class="px-2 text-danger" v-b-tooltip.hover title="Delete">
                                    <i class="uil uil-trash-alt font-size-18"></i>
                                </a>
                            </li>
                        </ul>
                    </template>
                </b-table>
            </div>
            <div class="row">
                <div class="col">
                    <div class="dataTables_paginate paging_simple_numbers float-end">
                        <ul class="pagination pagination-rounded">
                            <!-- pagination -->
                            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
