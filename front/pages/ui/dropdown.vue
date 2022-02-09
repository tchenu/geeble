<script>
/**
 * Dropdowns component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Dropdowns",
            items: [{
                    text: "UI Elements",
                },
                {
                    text: "Dropdowns",
                    active: true,
                },
            ],
        };
    },
    middleware: "authentication"
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Single button dropdowns</h4>
                    <p class="card-title-desc">
                        Any single
                        <code class="highlighter-rouge">.btn</code> can be turned into a
                        dropdown toggle with some markup changes. Here’s how you can put
                        them to work with either
                        <code class="highlighter-rouge">&lt;button&gt;</code>
                        elements:
                    </p>

                    <div class="row">
                        <div class="col-sm-6">
                            <b-dropdown variant="primary">
                                <template v-slot:button-content>
                                    Dropdown button
                                    <i class="mdi mdi-chevron-down"></i>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another Action</b-dropdown-item>
                                <b-dropdown-item>Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Variant</h4>
                    <p class="card-title-desc mb-3">The best part is you can do this with any button variant, too:</p>

                    <div class>
                        <div class="btn-group mr-1 mt-2">
                            <b-dropdown variant="primary">
                                <template v-slot:button-content>
                                    Primary
                                    <i class="mdi mdi-chevron-down"></i>
                                </template>
                                <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- /btn-group -->
                        <div class="btn-group mr-1 mt-2">
                            <b-dropdown variant="light">
                                <template v-slot:button-content>
                                    Light
                                    <i class="mdi mdi-chevron-down"></i>
                                </template>
                                <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- /btn-group -->
                        <div class="btn-group mr-1 mt-2">
                            <b-dropdown variant="success">
                                <template v-slot:button-content>
                                    Success
                                    <i class="mdi mdi-chevron-down"></i>
                                </template>
                                <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- /btn-group -->
                        <div class="btn-group mr-1 mt-2">
                            <b-dropdown variant="info">
                                <template v-slot:button-content>
                                    Info
                                    <i class="mdi mdi-chevron-down"></i>
                                </template>
                                <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- /btn-group -->
                        <div class="btn-group mr-1 mt-2">
                            <b-dropdown variant="warning">
                                <template v-slot:button-content>
                                    Warning
                                    <i class="mdi mdi-chevron-down"></i>
                                </template>
                                <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- /btn-group -->
                        <div class="btn-group mr-1 mt-2">
                            <b-dropdown variant="danger">
                                <template v-slot:button-content>
                                    Danger
                                    <i class="mdi mdi-chevron-down"></i>
                                </template>
                                <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                                <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- /btn-group -->
                    </div>
                </div>
            </div>
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Split button dropdowns</h4>
                    <p class="card-title-desc mb-3">The best part is you can do this with any button variant, too:</p>
                    <b-dropdown split text="Primary" variant="primary" class="mr-1 mt-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown split text="Light" variant="light" class="mr-1 mt-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown split text="Success" variant="success" class="mr-1 mt-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown split text="Info" variant="info" class="mr-1 mt-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown split text="Warning" variant="warning" class="mr-1 mt-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown split text="Danger" variant="danger" class="mr-1 mt-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Sizing</h4>
                    <p class="card-title-desc mb-3">
                        Button dropdowns work with buttons of all sizes, including default
                        and split dropdown buttons.
                    </p>

                    <div>
                        <!-- Large button groups (default and split) -->

                        <b-dropdown variant="primary" size="lg" class="mr-1 mt-2">
                            <template v-slot:button-content>
                                Large button
                                <i class="mdi mdi-chevron-down"></i>
                            </template>
                            <b-dropdown-item-button>Action</b-dropdown-item-button>
                            <b-dropdown-item-button>Another action</b-dropdown-item-button>
                            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                        </b-dropdown>
                        <b-dropdown split text="Large button" size="lg" variant="light" class="mr-1 mt-2">
                            <b-dropdown-item href="#">Action</b-dropdown-item>
                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                        </b-dropdown>
                        <b-dropdown variant="primary" size="sm" class="mr-1 mt-2">
                            <template v-slot:button-content>
                                Small button
                                <i class="mdi mdi-chevron-down"></i>
                            </template>
                            <b-dropdown-item-button>Action</b-dropdown-item-button>
                            <b-dropdown-item-button>Another action</b-dropdown-item-button>
                            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                        </b-dropdown>
                        <b-dropdown split text="Small button" size="sm" variant="light" class="mr-1 mt-2">
                            <b-dropdown-item href="#">Action</b-dropdown-item>
                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <!-- end col -->
    </div>

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Drop variation</h4>
                    <p class="card-title-desc mb-3">
                        Trigger dropdown menus at the right of the elements by adding
                        <code>dropleft</code> and
                        <code>dropright</code> to the parent
                        element.
                    </p>

                    <div class="dropdown mt-1">
                        <b-dropdown dropright variant="success" class="mr-1 mt-2">
                            <template slot="button-content">
                                Drop-right
                                <i class="mdi mdi-chevron-right"></i>
                            </template>
                            <b-dropdown-item-button>Action</b-dropdown-item-button>
                            <b-dropdown-item-button>Another action</b-dropdown-item-button>
                            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                        </b-dropdown>
                        <b-dropdown dropleft variant="info" class="mr-1 mt-2">
                            <template slot="button-content">
                                <i class="mdi mdi-chevron-left"></i>
                                Drop-left
                            </template>
                            <b-dropdown-item-button>Action</b-dropdown-item-button>
                            <b-dropdown-item-button>Another action</b-dropdown-item-button>
                            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                        </b-dropdown>
                        <b-dropdown dropup variant="light" class="mr-1 mt-2">
                            <template slot="button-content">
                                Dropup
                                <i class="mdi mdi-chevron-up"></i>
                            </template>
                            <b-dropdown-item-button>Action</b-dropdown-item-button>
                            <b-dropdown-item-button>Another action</b-dropdown-item-button>
                            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                        </b-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Menu alignment</h4>
                    <p class="card-title-desc">
                        Add
                        <code class="highlighter-rouge">right</code>
                        to a
                        <code class="highlighter-rouge">dropdown</code> to right
                        align the dropdown menu.
                    </p>

                    <b-dropdown right variant="secondary">
                        <template slot="button-content">
                            Menu is right-aligned
                            <i class="mdi mdi-chevron-down"></i>
                        </template>

                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
