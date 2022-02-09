<script>
import { eventService } from '../../helpers/event.service'
import { slotService } from '../../helpers/slot.service'
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
            paymentElement: null
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
        submitCart: async function() {
            const {slotId, clientSecret} = await slotService.add(this.event.slug, this.quantity);

            console.log({ clientSecret })

            if (this.$stripe) {
                const elements = this.$stripe.elements({ clientSecret });

                this.paymentElement = elements.create("payment")
                this.paymentElement.mount("#payment-element")

            }
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
                    <div v-show="!paymentElement">
                        <button v-on:click="submitCart" :disabled="!quantity" class="btn btn-success mt-5 w-100">Checkout</button>
                    </div>

                    <form v-show="paymentElement" id="payment-form" class="mt-5">
                        <div id="payment-element">
                            <!--Stripe.js injects the Payment Element-->
                        </div>
                        <button id="submit" class="btn btn-success mt-3 w-100">
                            <div class="spinner hidden" id="spinner"></div>
                            <span id="button-text">Pay now</span>
                        </button>
                        <div id="payment-message" class="hidden"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style></style>
