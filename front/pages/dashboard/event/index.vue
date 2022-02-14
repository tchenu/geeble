<script>
import { eventService } from '~/helpers/event.service';

export default {
    head() {
        return {
            title: `${this.title} | Dashboard Geebl`,
        };
    },
    data() {
        return {
            title: "Events",
            items: [
                {
                    text: "Geebl",
                    href: "/",
                },
                {
                    text: "Dashboard",
                    href: "/dashboard",
                },
                {
                    text: "Events",
                    active: true,
                },
            ],
        };
    },
    async asyncData() {
        let events = null

        try {
            events = await eventService.getByMyCompany()
        } catch (exception) {}

        return {
            events,
        }
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <Events v-if="events" :events="events" />
</div>
</template>

<style></style>
