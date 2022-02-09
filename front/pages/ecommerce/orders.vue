<script>
/**
 * Orders component
 */
export default {
  head() {
    return {
      title: `${this.title} | Geebl`,
    };
  },
  data() {
    return {
      title: "Orders",
      items: [
        {
          text: "Ecommerce",
        },
        {
          text: "Orders",
          active: true,
        },
      ],
      orderData: [
        {
          id: "#MN0132",
          date: "10 Jul, 2020",
          name: "Melvin Martin",
          total: "$142",
          status: "Paid",
        },
        {
          id: "#MN0131",
          date: "09 Jul, 2020",
          name: "Roy Michael",
          total: "$130",
          status: "Paid",
        },
        {
          id: "#MN0130",
          date: "08 Jul, 2020",
          name: "Shelby Wolf",
          total: "$123",
          status: "unpaid",
        },
        {
          id: "#MN0129",
          date: "07 Jul, 2020",
          name: "James Riddick",
          total: "$173",
          status: "Paid",
        },
        {
          id: "#MN0128",
          date: "07 Jul, 2020",
          name: "George Kwan",
          total: "$160",
          status: "Chargeback",
        },
        {
          id: "#MN0127",
          date: "06 Jul, 2020",
          name: "Kevin Patterson",
          total: "$165",
          status: "Paid",
        },
        {
          id: "#MN0126",
          date: "05 Jul, 2020",
          name: "Danny Orr",
          total: "$161",
          status: "Paid",
        },
        {
          id: "#MN0125",
          date: "04 Jul, 2020",
          name: "Sylvia Garcia",
          total: "$153",
          status: "unpaid",
        },
        {
          id: "#MN0124",
          date: "04 Jul, 2020",
          name: "Charles Denney",
          total: "$152",
          status: "Paid",
        },
        {
          id: "#MN0123",
          date: "03 Jul, 2020",
          name: "Lisa Farrell",
          total: "$167",
          status: "Paid",
        },
        {
          id: "#MN0122",
          date: "02 Jul, 2020",
          name: "Connie Franco",
          total: "$163",
          status: "Paid",
        },
        {
          id: "#MN0121",
          date: "02 Jul, 2020",
          name: "Lara Casillas",
          total: "$171",
          status: "Paid",
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
      fields: [
        {
          key: "check",
          label: "",
        },
        {
          key: "id",
          label: "Order Id",
        },
        {
          key: "date",
          sortable: true,
        },
        {
          key: "name",
          label: "Billing Name",
          sortable: true,
        },
        {
          key: "total",
          sortable: true,
        },
        {
          key: "status",
          label: "Payment Status",
          sortable: true,
        },
        "action",
      ],
    };
  },
  middleware: "authentication",
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.orderData.length;
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
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div>
          <div class="float-end">
            <form class="form-inline mb-3">
              <label class="my-1 me-2" for="order-selectinput">Orders</label>
              <select class="custom-select my-1" id="order-selectinput">
                <option selected>All</option>
                <option value="1">Active</option>
                <option value="2">Unpaid</option>
              </select>
            </form>
          </div>
          <button
            type="button"
            class="btn btn-success waves-effect waves-light mb-3"
          >
            <i class="mdi mdi-plus me-1"></i> Add New Order
          </button>
        </div>
        <div class="table-responsive mb-0">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div id="tickets-table_length" class="dataTables_length">
                <label class="d-inline-flex align-items-center">
                  Show&nbsp;
                  <b-form-select
                    v-model="perPage"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select
                  >&nbsp;entries
                </label>
              </div>
            </div>
            <!-- Search -->
            <div class="col-sm-12 col-md-6">
              <div
                id="tickets-table_filter"
                class="dataTables_filter text-md-end"
              >
                <label class="d-inline-flex align-items-center">
                  Search:
                  <b-form-input
                    v-model="filter"
                    type="search"
                    class="form-control form-control-sm ml-2"
                  ></b-form-input>
                </label>
              </div>
            </div>
            <!-- End search -->
          </div>
          <!-- Table -->

          <b-table
            table-class="table table-centered datatable table-card-list"
            thead-tr-class="bg-transparent"
            :items="orderData"
            :fields="fields"
            responsive="sm"
            :per-page="perPage"
            :current-page="currentPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
          >
            <template v-slot:cell(check)="data">
              <div class="custom-control custom-checkbox text-center">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  :id="`contacusercheck${data.item.id}`"
                />
                <label
                  class="custom-control-label"
                  :for="`contacusercheck${data.item.id}`"
                ></label>
              </div>
            </template>
            <template v-slot:cell(id)="data">
              <a
                href="javascript: void(0);"
                class="text-dark fw-bold"
                >{{ data.item.id }}</a
              >
            </template>

            <template v-slot:cell(name)="data">
              <a href="#" class="text-body">{{ data.item.name }}</a>
            </template>
            <template v-slot:cell(status)="data">
              <div
                class="badge badge-pill bg-soft-success font-size-12"
                :class="{
                  'bg-soft-danger': data.item.status === 'Chargeback',
                  'bg-soft-warning': data.item.status === 'unpaid',
                }"
              >
                {{ data.item.status }}
              </div>
            </template>
            <template v-slot:cell(action)>
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    class="px-2 text-primary"
                    v-b-tooltip.hover
                    title="Edit"
                  >
                    <i class="uil uil-pen font-size-18"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    class="px-2 text-danger"
                    v-b-tooltip.hover
                    title="Delete"
                  >
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
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                ></b-pagination>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
