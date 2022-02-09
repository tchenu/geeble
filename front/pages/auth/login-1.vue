<script>
/**
 * Login-1 component
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
            title: "Log in"
        };
    }
};
</script>

<template>
<div>
    <div class="home-btn d-none d-sm-block">
        <nuxt-link to="/" class="text-dark"><i class="mdi mdi-home-variant h2"></i></nuxt-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <nuxt-link to="/" class="mb-5 d-block auth-logo">
                            <img src="~/assets/images/logo-dark.png" alt="" height="40" class="logo logo-dark" />
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="text-center mt-2">
                                <h5 class="text-primary">Welcome Back !</h5>
                                <p class="text-muted">Sign in to continue to Geebl.</p>
                            </div>
                            <div class="p-2 mt-4">
                                <form>
                                    <div class="mb-3">
                                        <label for="username">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                                    </div>

                                    <div class="mb-3">
                                        <div class="float-end">
                                            <nuxt-link to="/auth/recoverpwd" class="text-muted">
                                                Forgot password?</nuxt-link>
                                        </div>
                                        <label for="userpassword">Password</label>
                                        <input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                                    </div>

                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="auth-remember-check" />
                                        <label class="form-check-label" for="auth-remember-check">Remember me</label>
                                    </div>

                                    <div class="mt-3 text-end">
                                        <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">
                                            Log In
                                        </button>
                                    </div>

                                    <div class="mt-4 text-center">
                                        <p class="mb-0">
                                            Don't have an account ?
                                            <nuxt-link to="/auth/register-1" class="fw-medium text-primary">
                                                Signup now</nuxt-link>
                                        </p>
                                    </div>
                                </form>
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
