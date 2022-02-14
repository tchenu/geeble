<script>
import { eventService } from '../../../helpers/event.service'
import { slotService } from '../../../helpers/slot.service'
import NumberInputSpinner from "vue-number-input-spinner";


export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    components: {
        NumberInputSpinner,
    },
    data() {
        return {
            title: "Events",
            items: [],
            event: {},
            available: {},
            quantity: 0,
            paymentElement: null,
            elements: null,
        };
    },
    async asyncData({ params }) {
        const event = await eventService.get(params.slug);
        const available = await eventService.available(params.slug)

        const items = [
            {
                text: "Geebl",
                href: "/"
            },
            {
                text: "Events",
                href: "/event",
            },
            {
                text: event.slug,
                active: true,
            }
        ]

        return { event, available, items };
    },
    filters: {
        toDate: function (date) {
            date = new Date(date)

            return `${date.getDate().toString().padStart(2, "0")}/${date.getMonth().toString().padStart(2, "0")}/${date.getFullYear()}`
        },
        toPrice: function (price) {
            return (price).toFixed(2);
        }
    },
    methods: {
        async createSlot() {
            const { slotId, clientSecret } = await slotService.add(this.event.slug, this.quantity);

            this.$router.push({name: 'checkout-slot', params: { slot: slotId }, query: { payment_intent_client_secret: clientSecret }})
        }
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-xl-8">
            <div class="card">
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
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Add to Cart</h4>

                    <div v-if="!paymentElement" class="mt-5">
                        <div class="float-end">
                            <div style="width: 120px;" class="product-cart-touchspin">
                                <div class="input-group">
                                    <NumberInputSpinner :min="0" :max="available.availables" :integerOnly="true" v-model="quantity" />
                                </div>
                            </div>
                        </div>
                        <p class="pt-2 card-text">{{ available.availables }} tickets availables</p>
                    </div>

                    <div class="mt-5">
                        <div class="float-end">
                            <h3 class="text-primary">
                                $ <span data-plugin="counterup"><span>{{ event.price * quantity | toPrice }}</span></span>
                            </h3>
                        </div>
                        <h5>Total</h5>
                    </div>
                    <div>
                        <button @click.prevent="createSlot" :disabled="!quantity" class="btn btn-success mt-5 w-100">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style></style>
