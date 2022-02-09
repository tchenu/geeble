<script>
/**
 * 500-component
 */
export default {
    layout: "auth",
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Error-500",
        };
    },
    middleware: "authentication"
};
</script>

<template>
<div class="my-5 pt-sm-5">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <div>
                        <div class="row justify-content-center">
                            <div class="col-sm-4">
                                <div class="error-img">
                                    <img src="~/assets/images/500-error.png" alt class="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="text-uppercase mt-4">Internal Server Error</h4>
                    <p class="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                    <div class="mt-5">
                        <nuxt-link to="/" class="btn btn-primary">Back to Dashboard</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
