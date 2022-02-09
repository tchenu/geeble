<script>
import { eventService } from '../../helpers/event.service'
import Buttons from '../ui/buttons.vue';

export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Events",
            items: [
                {
                    text: "Geebl",
                    href: "/"
                },
                {
                    text: "Events",
                    active: true,
                }
            ],
            events: []
        };
    },
    async fetch() {
        this.events = await eventService.getAll();
    },
    filters: {
        toDate: function (date) {
            date = new Date(date)

            return `${date.getDate().toString().padStart(2, "0")}/${date.getMonth().toString().padStart(2, "0")}/${date.getFullYear()}`
        }
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div v-for="event in events" :key="event.id" class="card">
        <div class="card-body">
            <div class="float-end">
                <p class="mb-0">{{ event.date | toDate }}</p>
                <p class="text-muted mb-0 text-end">
                    <i class="mdi mdi-map-marker"></i>
                    {{ event.location }}
                </p>
            </div>

            <h4 class="card-title">{{ event.name.toUpperCase() }}</h4>
            <p class="text-muted mb-0">{{ event.organizer }}</p>

            <div class="mt-3">
                <p class="card-text">{{ event.description }}</p>
            </div>

            <div class="mt-3">
                <div class="float-end">
                    <nuxt-link :to="'/event/' + event.slug" class="btn btn-primary">Read more</nuxt-link>
                </div>

                <h3 class="text-primary">
                    $
                    <span data-plugin="counterup">
                        <span>{{ event.price }}</span>
                    </span>
                    <span class="text-muted d-inline-block font-size-15 ml-3">/ ticket</span>
                </h3>
            </div>

            
        </div>
    </div>
</div>
</template>

<style></style>
