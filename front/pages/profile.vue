<script>
import { userService } from '../helpers/authservice/user.service';
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
            items: [
                {
                    text: "Profile",
                    active: true,
                },
            ],
        };
    },
    middleware: "authentication",
    async asyncData() {
        const user = await userService.getMe();

        return { user }
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-4">
        <div class="">
            <div class="card h-100">
                <div class="card-body">
                    <div class="text-left">
                        <h5 class="mt-3 mb-1">{{ user.username}}</h5>
                        <p class="text-muted">{{ user.roles }}</p>
                    </div>

                    <hr class="my-4" />

                    <div class="text-muted">
                        <div class="table-responsive mt-4 mb-0">
                            <div class="mt-4">
                                <p class="mb-1">E-mail :</p>
                                <h5 class="font-size-16">{{ user.email }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
