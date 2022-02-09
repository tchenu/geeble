<script>
import Toolbar from "../toolbar";
import Sidepanel from "../sidepanel";
import {
    emailData
} from "../data-inbox";

/**
 * Read-email component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`
        };
    },
    components: {
        Toolbar,
        Sidepanel
    },
    asyncData({
        params
    }) {
        const emailRead = emailData.find(user => String(user.id) === params.id);
        return {
            emailRead
        };
    },
    data() {
        return {
            title: "Read Email",
            items: [{
                    text: "Email",
                    href: "/"
                },
                {
                    text: "Read Email",
                    active: true
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
    <div class="row">
        <div class="col-12">
            <!-- Left sidebar -->
            <Sidepanel />
            <!-- End Left sidebar -->

            <!-- Right Sidebar -->
            <div class="email-rightbar mb-3">
                <div class="card">
                    <Toolbar />
                    <div class="card-body">
                        <div class="media mb-4">
                            <img class="d-flex me-3 rounded-circle avatar-sm" src="~/assets/images/users/avatar-2.jpg" alt="Generic placeholder image" />
                            <div class="media-body">
                                <h5 class="font-size-14 mt-1">Humberto D. Champion</h5>
                                <small class="text-muted">support@domain.com</small>
                            </div>
                        </div>

                        <h4 class="mt-0 font-size-16">{{ emailRead.title }}</h4>

                        <p>Dear Lorem Ipsum,</p>
                        <p>{{ emailRead.subject }}</p>
                        <p>
                            Sed elementum turpis eu lorem interdum, sed porttitor eros
                            commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam
                            in dui et porta. Sed bibendum orci non tincidunt ultrices.
                            Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna
                            lacinia lacus, vel tincidunt mi nibh sit amet lorem.
                        </p>
                        <p>Sincerly,</p>
                        <hr />
                        <div class="row">
                            <div class="col-xl-2 col-6">
                                <div class="card border shadow-none">
                                    <img class="card-img-top img-fluid" src="~/assets/images/small/img-3.jpg" alt="Card image cap" />
                                    <div class="py-2 text-center">
                                        <a href class="fw-medium">Download</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-6">
                                <div class="card border shadow-none">
                                    <img class="card-img-top img-fluid" src="~/assets/images/small/img-4.jpg" alt="Card image cap" />
                                    <div class="py-2 text-center">
                                        <a href class="fw-medium">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="javascript: void(0);" class="btn btn-secondary waves-effect mt-4">
                            <i class="mdi mdi-reply"></i> Reply
                        </a>
                    </div>
                </div>
            </div>
            <!-- card -->
        </div>
        <!-- end Col-9 -->
    </div>
</div>
</template>
