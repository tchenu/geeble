<script>
/**
 * Coming-soon component
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
            title: "Coming-soon",
            start: "",
            end: "",
            interval: "",
            days: "",
            minutes: "",
            hours: "",
            seconds: "",
            starttime: "Nov 5, 2010 15:37:25",
            endtime: "Dec 31, 2021 16:37:25",
        };
    },
    middleware: "authentication",
    mounted() {
        this.start = new Date(this.starttime).getTime();
        this.end = new Date(this.endtime).getTime();
        // Update the count down every 1 second
        this.timerCount(this.start, this.end);
        this.interval = setInterval(() => {
            this.timerCount(this.start, this.end);
        }, 1000);
    },
    methods: {
        timerCount: function (start, end) {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = start - now;
            var passTime = end - now;

            if (distance < 0 && passTime < 0) {
                clearInterval(this.interval);
                return;
            } else if (distance < 0 && passTime > 0) {
                this.calcTime(passTime);
            } else if (distance > 0 && passTime > 0) {
                this.calcTime(distance);
            }
        },
        calcTime: function (dist) {
            // Time calculations for days, hours, minutes and seconds
            this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
            this.hours = Math.floor(
                (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
        },
    },
};
</script>

<template>
<div>
    <div class="home-btn d-none d-sm-block">
        <nuxt-link to="/" class="text-dark">
            <i class="mdi mdi-home-variant h2"></i>
        </nuxt-link>
    </div>
    <div class="my-5 pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <nuxt-link to="/" class="mb-5 d-block auth-logo">
                            <img src="~/assets/images/logo-dark.png" alt height="22" class="logo logo-dark" />
                        </nuxt-link>

                        <div class="row justify-content-center mt-5">
                            <div class="col-lg-4 col-sm-5">
                                <div class="maintenance-img">
                                    <img src="~/assets/images/coming-soon-img.png" alt class="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                        </div>

                        <h4 class="mt-5">Let's get started with Geebl</h4>
                        <p class="text-muted">
                            It will be as simple as Occidental in fact it will be
                            Occidental.
                        </p>

                        <div class="row justify-content-center mt-5">
                            <div class="col-lg-10">
                                <div data-countdown="2020/12/31" class="counter-number">
                                    <div class="coming-box">
                                        {{ days }}
                                        <span>Days</span>
                                    </div>
                                    <div class="coming-box">
                                        {{ hours }}
                                        <span>Hours</span>
                                    </div>
                                    <div class="coming-box">
                                        {{ minutes }}
                                        <span>Minutes</span>
                                    </div>
                                    <div class="coming-box">
                                        {{ seconds }}
                                        <span>Seconds</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end col-->
                        </div>
                        <!-- end row-->

                        <div class="row justify-content-center mt-5">
                            <div class="col-lg-6">
                                <div class="input-section pt-4">
                                    <div class="row">
                                        <div class="col">
                                            <div class="position-relative">
                                                <input type="email" class="form-control" placeholder="Enter email address..." />
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <button type="submit" class="btn btn-primary w-md waves-effect waves-light">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
