<script>

export default {
    props: ['events'],
    data() {
        return {
            fields: [
                {
                    key: "name",
                },
                {
                    key: "slug",
                },
                {
                    key: "date",
                },
                {
                    key: "seats",
                },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "date",
            sortDesc: false,
        }
    },
    computed: {
        rows() {
            return this.events.length;
        },
    },
    mounted() {
        this.totalRows = this.events.length;
    },
    filters: {
        toDate: function (date) {
            date = new Date(date)

            return `${date.getDate().toString().padStart(2, "0")}/${date.getMonth().toString().padStart(2, "0")}/${date.getFullYear()}`
        }
    },
    methods: {
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    }
};
</script>

<template>
    <div class="card card-body">
        <div class="row">
            <div class="col-md-4">
                <div>
                    <nuxt-link to="/dashboard/event/create" type="button" class="btn btn-success mb-3">
                        <i class="mdi mdi-plus me-1"></i> Add Event
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="row">
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
                        <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ms-2"></b-form-input>
                    </label>
                </div>
            </div>
            <!-- End search -->
        </div>
        <!-- Table -->
        <div class="table-responsive mb-0">
            <b-table table-class="table table-centered datatable table-card-list" thead-tr-class="bg-transparent" :items="events" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                <template v-slot:cell(date)="data">
                    {{ data.item.date | toDate }}
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
                        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"></b-pagination>
                    </ul>
                </div>
            </div>
        </div>
    </div>
<!-- end row-->
</template>
