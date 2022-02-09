<script>
import { userService } from "../../helpers/authservice/user.service"

export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Dashboard",
            items: [{
                    text: "Geebl",
                },
                {
                    text: "Dashboard",
                    active: true,
                },
            ],
        };
    },
    computed: {
        user () {
            return userService.readJwt(this.$store.state.authfack.user);
        }
  },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <Stat v-if="user.roles.includes('ROLE_ADMIN')"/>

    <div class="row">
        <SalesAnalytics />
        <div class="col-xl-4">
            <div class="card bg-primary">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-sm-8">
                            <p class="text-white font-size-18">
                                Enhance your
                                <b>Campaign</b> for better outreach
                                <i class="mdi mdi-arrow-right"></i>
                            </p>
                            <div class="mt-4">
                                <a href="javascript: void(0);" class="btn btn-success waves-effect waves-light">Upgrade Account!</a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mt-4 mt-sm-0">
                                <img src="~/assets/images/setup-analytics-amico.svg" class="img-fluid" alt />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card-body-->
            </div>
            <!-- end card-->
            <SellingProduct />
        </div>
    </div>

    <div class="row">
        <TopUsers />
        <Activity />
        <SocialSource />
    </div>
</div>
</template>

<style></style>
