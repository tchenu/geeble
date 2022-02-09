<script>
/**
 * Profile component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Profile",
            items: [{
                    text: "Contacts",
                },
                {
                    text: "Profile",
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

    <div class="row mb-4">
        <div class="col-xl-4">
            <div class="card h-100">
                <div class="card-body">
                    <div class="text-center">
                        <b-dropdown class="float-end" variant="white" right toggle-class="font-size-16 text-body p-0">
                            <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                            </template>
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Remove</a>
                        </b-dropdown>
                        <div class="clearfix"></div>
                        <div>
                            <img src="~/assets/images/users/avatar-4.jpg" alt class="avatar-lg rounded-circle img-thumbnail" />
                        </div>
                        <h5 class="mt-3 mb-1">Marcus</h5>
                        <p class="text-muted">UI/UX Designer</p>

                        <div class="mt-4">
                            <button type="button" class="btn btn-light btn-sm">
                                <i class="uil uil-envelope-alt me-2"></i> Message
                            </button>
                        </div>
                    </div>

                    <hr class="my-4" />

                    <div class="text-muted">
                        <h5 class="font-size-16">About</h5>
                        <p>Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
                        <div class="table-responsive mt-4 mb-0">
                            <div>
                                <p class="mb-1">Name :</p>
                                <h5 class="font-size-16">Marcus</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">Mobile :</p>
                                <h5 class="font-size-16">012-234-5678</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">E-mail :</p>
                                <h5 class="font-size-16">marcus@minible.com</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">Location :</p>
                                <h5 class="font-size-16">California, United States</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-8">
            <div class="card mb-0">
                <b-tabs content-class="p-4" justified class="nav-tabs-custom">
                    <b-tab active>
                        <template v-slot:title>
                            <i class="uil uil-user-circle font-size-20"></i>
                            <span class="d-none d-sm-block">About</span>
                        </template>
                        <div>
                            <div>
                                <h5 class="font-size-16 mb-4">Experience</h5>

                                <ul class="activity-feed mb-0 pl-2">
                                    <li class="feed-item">
                                        <div class="feed-item-list">
                                            <p class="text-muted mb-1">2019 - 2020</p>
                                            <h5 class="font-size-16">UI/UX Designer</h5>
                                            <p>Abc Company</p>
                                            <p class="text-muted">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>
                                        </div>
                                    </li>
                                    <li class="feed-item">
                                        <div class="feed-item-list">
                                            <p class="text-muted mb-1">2017 - 2019</p>
                                            <h5 class="font-size-16">Graphic Designer</h5>
                                            <p>xyz Company</p>
                                            <p class="text-muted">It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 class="font-size-16 mb-4">Projects</h5>

                                <div class="table-responsive">
                                    <table class="table table-nowrap table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Projects</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col" style="width: 120px;">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">01</th>
                                                <td>
                                                    <a href="#" class="text-dark">Brand Logo Design</a>
                                                </td>
                                                <td>18 Jun, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-primary font-size-12">Open</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">02</th>
                                                <td>
                                                    <a href="#" class="text-dark">Geebl Admin</a>
                                                </td>
                                                <td>06 Jun, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-primary font-size-12">Open</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">03</th>
                                                <td>
                                                    <a href="#" class="text-dark">Chat app Design</a>
                                                </td>
                                                <td>28 May, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">04</th>
                                                <td>
                                                    <a href="#" class="text-dark">Geebl Landing</a>
                                                </td>
                                                <td>13 May, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">05</th>
                                                <td>
                                                    <a href="#" class="text-dark">Authentication Pages</a>
                                                </td>
                                                <td>06 May, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template v-slot:title>
                            <i class="uil uil-clipboard-notes font-size-20"></i>
                            <span class="d-none d-sm-block">Tasks</span>
                        </template>
                        <div>
                            <h5 class="font-size-16 mb-3">Active</h5>

                            <div class="table-responsive">
                                <table class="table table-nowrap table-centered">
                                    <tbody>
                                        <tr>
                                            <td style="width: 60px;">
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-activeCheck2" />
                                                    <label class="custom-control-label" for="tasks-activeCheck2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">Ecommerce Product Detail</a>
                                            </td>

                                            <td>27 May, 2020</td>
                                            <td style="width: 160px;">
                                                <span class="badge bg-soft-primary font-size-12">Active</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-activeCheck1" />
                                                    <label class="custom-control-label" for="tasks-activeCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">Ecommerce Product</a>
                                            </td>

                                            <td>26 May, 2020</td>
                                            <td>
                                                <span class="badge bg-soft-primary font-size-12">Active</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="font-size-16 my-3">Upcoming</h5>

                            <div class="table-responsive">
                                <table class="table table-nowrap table-centered">
                                    <tbody>
                                        <tr>
                                            <td style="width: 60px;">
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-upcomingCheck3" />
                                                    <label class="custom-control-label" for="tasks-upcomingCheck3"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">Chat app Page</a>
                                            </td>

                                            <td>-</td>
                                            <td style="width: 160px;">
                                                <span class="badge bg-soft-secondary font-size-12">Waiting</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-upcomingCheck2" />
                                                    <label class="custom-control-label" for="tasks-upcomingCheck2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">Email Pages</a>
                                            </td>

                                            <td>04 June, 2020</td>
                                            <td>
                                                <span class="badge bg-soft-primary font-size-12">Approved</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-upcomingCheck1" />
                                                    <label class="custom-control-label" for="tasks-upcomingCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">Contacts Profile Page</a>
                                            </td>

                                            <td>-</td>
                                            <td>
                                                <span class="badge bg-soft-secondary font-size-12">Waiting</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="font-size-16 my-3">Complete</h5>

                            <div class="table-responsive">
                                <table class="table table-nowrap table-centered">
                                    <tbody>
                                        <tr>
                                            <td style="width: 60px;">
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-completeCheck3" />
                                                    <label class="custom-control-label" for="tasks-completeCheck3"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">UI Elements</a>
                                            </td>

                                            <td>27 May, 2020</td>
                                            <td style="width: 160px;">
                                                <span class="badge bg-soft-success font-size-12">Complete</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-completeCheck2" />
                                                    <label class="custom-control-label" for="tasks-completeCheck2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">Authentication Pages</a>
                                            </td>

                                            <td>27 May, 2020</td>
                                            <td>
                                                <span class="badge bg-soft-success font-size-12">Complete</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox text-center">
                                                    <input type="checkbox" class="custom-control-input" id="tasks-completeCheck1" />
                                                    <label class="custom-control-label" for="tasks-completeCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="font-weight-bold text-dark">Admin Layout</a>
                                            </td>

                                            <td>26 May, 2020</td>
                                            <td>
                                                <span class="badge bg-soft-success font-size-12">Complete</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template v-slot:title>
                            <i class="uil uil-envelope-alt font-size-20"></i>
                            <span class="d-none d-sm-block">Messages</span>
                        </template>
                        <div>
                            <div data-simplebar style="max-height: 430px;">
                                <div class="media border-bottom py-4">
                                    <img class="me-2 rounded-circle avatar-xs" src="~/assets/images/users/avatar-3.jpg" alt />
                                    <div class="media-body">
                                        <h5 class="font-size-15 mt-0 mb-1">
                                            Marion Walker
                                            <small class="text-muted float-end">1 hr ago</small>
                                        </h5>
                                        <p class="text-muted">If several languages coalesce, the grammar of the resulting .</p>

                                        <a href="javascript: void(0);" class="text-muted font-13 d-inline-block">
                                            <i class="mdi mdi-reply"></i> Reply
                                        </a>

                                        <div class="media mt-4">
                                            <img class="me-2 rounded-circle avatar-xs" src="~/assets/images/users/avatar-4.jpg" alt />
                                            <div class="media-body">
                                                <h5 class="font-size-15 mt-0 mb-1">
                                                    Shanon Marvin
                                                    <small class="text-muted float-end">1 hr ago</small>
                                                </h5>
                                                <p class="text-muted">It will be as simple as in fact, it will be Occidental. To it will seem like simplified .</p>

                                                <a href="javascript: void(0);" class="text-muted font-13 d-inline-block">
                                                    <i class="mdi mdi-reply"></i> Reply
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="media border-bottom py-4">
                                    <img class="me-2 rounded-circle avatar-xs" src="~/assets/images/users/avatar-5.jpg" alt />
                                    <div class="media-body">
                                        <h5 class="font-size-15 mt-0 mb-1">
                                            Janice Morgan
                                            <small class="text-muted float-end">2 hrs ago</small>
                                        </h5>
                                        <p class="text-muted">To achieve this, it would be necessary to have uniform pronunciation.</p>

                                        <a href="javascript: void(0);" class="text-muted font-13 d-inline-block">
                                            <i class="mdi mdi-reply"></i> Reply
                                        </a>
                                    </div>
                                </div>

                                <div class="media border-bottom py-4">
                                    <img class="me-2 rounded-circle avatar-xs" src="~/assets/images/users/avatar-7.jpg" alt />
                                    <div class="media-body">
                                        <h5 class="font-size-15 mt-0 mb-1">
                                            Patrick Petty
                                            <small class="text-muted float-end">3 hrs ago</small>
                                        </h5>
                                        <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit</p>

                                        <a href="javascript: void(0);" class="text-muted font-13 d-inline-block">
                                            <i class="mdi mdi-reply"></i> Reply
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="border rounded mt-4">
                                <form action="#">
                                    <div class="px-2 py-1 bg-light">
                                        <div class="btn-group" role="group">
                                            <button type="button" class="btn btn-sm btn-link text-dark text-decoration-none">
                                                <i class="uil uil-link"></i>
                                            </button>
                                            <button type="button" class="btn btn-sm btn-link text-dark text-decoration-none">
                                                <i class="uil uil-smile"></i>
                                            </button>
                                            <button type="button" class="btn btn-sm btn-link text-dark text-decoration-none">
                                                <i class="uil uil-at"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <textarea rows="3" class="form-control border-0 resize-none" placeholder="Your Message..."></textarea>
                                </form>
                            </div>
                            <!-- end .border-->
                        </div>
                    </b-tab>
                </b-tabs>
                <!-- Nav tabs -->
                <!-- Tab content -->
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
