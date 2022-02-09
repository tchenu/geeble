<script>
/**
 * Colors component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`
        };
    },
    data() {
        return {
            title: "Colors",
            items: [{
                    text: "UI Elements"
                },
                {
                    text: "Colors",
                    active: true
                }
            ]
        };
    },
    middleware: "authentication"
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-primary rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Primary</h5>
                            <p class="mb-2">Hex : #5b73e8</p>
                            <p>RGB : rgb(91, 140, 232)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-success rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Success</h5>
                            <p class="mb-2">Hex : #34c38f</p>
                            <p>RGB : rgb(52, 195, 143)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-info rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Info</h5>
                            <p class="mb-2">Hex : #50a5f1</p>
                            <p>RGB : rgb(80, 165, 241)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-warning rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Warning</h5>
                            <p class="mb-2">Hex : #f1b44c</p>
                            <p>RGB : rgb(241, 180, 76)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-danger rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Danger</h5>
                            <p class="mb-2">Hex : #f46a6a</p>
                            <p>RGB : rgb(244, 106, 106)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-dark rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Dark</h5>
                            <p class="mb-2">Hex : #343a40</p>
                            <p>RGB : rgb(52, 58, 64)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-light rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Light</h5>
                            <p class="mb-2">Hex : #f5f6f8</p>
                            <p>RGB : rgb(245, 246, 248)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="avatar-md bg-secondary rounded mx-auto mt-2 mb-4"></div>
                        <div class="media-body">
                            <h5 class="mb-3">Secondary</h5>
                            <p class="mb-2">Hex : #74788d</p>
                            <p>RGB : rgb(116, 120, 141)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
