<script>
/**
 * Lock-screen component
 */
export default {
    layout: "auth",
    head() {
        return {
            title: `${this.title} | Geebl`
        };
    },
    data() {
        return {
            title: "Lock screen"
        };
    }
};
</script>

<template>
<div>
    <div class="home-btn d-none d-sm-block">
        <nuxt-link to="/" class="text-dark"><i class="mdi mdi-home-variant h2"></i></nuxt-link>
    </div>
    <div class="account-pages my-5  pt-sm-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div>
                        <nuxt-link to="/" class="mb-5 d-block auth-logo">
                            <img src="~/assets/images/logo-dark.png" alt="" height="40" class="logo logo-dark" />
                        </nuxt-link>
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Lock screen</h5>
                                    <p class="text-muted">
                                        Enter your password to unlock the screen!
                                    </p>
                                </div>
                                <div class="p-2 mt-4">
                                    <div class="user-thumb text-center mb-4">
                                        <img src="~/assets/images/users/avatar-4.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                        <h5 class="font-size-15 mt-3">Marcus</h5>
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <label for="userpassword">Password</label>
                                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                                        </div>

                                        <div class="mt-3 text-right">
                                            <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">
                                                Unlock
                                            </button>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <p class="mb-0">
                                                Not you ? return
                                                <nuxt-link to="/auth/login-1" class="fw-medium text-primary">Sign In</nuxt-link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
</div>
</template>
