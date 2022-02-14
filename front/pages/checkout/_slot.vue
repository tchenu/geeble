<script>
import { paymentService } from "~/helpers/payment.service"
import { eventService } from "~/helpers/event.service"
import { slotService } from "~/helpers/slot.service"

export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Checkout",
            items: [
                {
                    text: "Geebl",
                    href: "/"
                },
                {
                    text: "Events",
                    href: "/event",
                },
                {
                    text: 'Checkout',
                    active: true,
                }
            ],
            quantity: 0,
            available: null,
            slot: null,
            paymentId: this.$route.query.payment_intent,
            clientSecret: this.$route.query.payment_intent_client_secret,
            redirect: this.$route.query.redirect_status,
            message: null,
            elements: null,
            error: null,
        };
    },
    async asyncData({ params }) {
        const slot = await slotService.get(params.slot)
        const available = await eventService.available(slot.event.slug)
        const quantity = slot.quantity

        const expire = new Date(slot.createdAt)
        const now = new Date()
        
        let remainingTime = 600000 - (now.getTime() - expire.getTime())

        const timeout = (remainingTime < 0)

        return { slot, available, quantity, remainingTime, timeout };
    },
    async mounted() {
        if (this.paymentId) {
            await this.$stripe.retrievePaymentIntent(this.clientSecret);
            await paymentService.confirmPayment(this.paymentId)
        }

        if (this.$stripe && this.redirect != "succeeded") {
            this.elements = this.$stripe.elements({ clientSecret: this.clientSecret });
            const paymentElement = this.elements.create("payment")
            paymentElement.mount("#payment-element")
        }
    },
    methods: {
        confirmPayment: async function() {
            const { error } = await this.$stripe.confirmPayment({
                elements: this.elements,
                confirmParams: {
                    return_url:  window.location.href,
                },
            });

            this.error = error
        },
        handleCountdownProgress(data) {
            this.timeout = (data.totalSeconds == 0)
        },
    },
    computed: {
        isSucceeded: function() {
            return this.redirect == "succeeded"
        },
        total: function() {
            return this.slot.event.price * this.quantity
        }
    },
    filters: {
        toPrice: function (price) {
            return (price).toFixed(2);
        }
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-xl-4">
            <div class="card checkout-order-summary">
                <div class="card-body">
                    <div class="p-3 bg-light mb-4">
                        <h5 class="font-size-16 mb-0">
                            Order Summary
                        </h5>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-centered mb-0 table-nowrap">
                            <thead>
                                <tr>
                                    <th class="border-top-0" style="width: 110px;" scope="col">Product</th>
                                    <th class="border-top-0" scope="col">Product Desc</th>
                                    <th class="border-top-0" scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <h5 class="font-size-14 text-truncate">
                                            <nuxt-link :to="{name: 'event-slug', params: { slug: slot.event.slug }}" class="text-dark">Ticket for {{ slot.event.name }}</nuxt-link>
                                        </h5>
                                        <p class="text-muted mb-0">$ {{ slot.event.price }} x {{ quantity }}</p>
                                    </td>
                                    <td>$ {{  total | toPrice }}</td>
                                </tr>
                                <tr class="bg-light">
                                    <td colspan="2">
                                        <h5 class="font-size-14 m-0">Total:</h5>
                                    </td>
                                    <td>$ {{ total | toPrice }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <b-alert v-if="!timeout" variant="warning" show>
                        <countdown :time="remainingTime" @progress="handleCountdownProgress">
                            <template slot-scope="props">Time Remaining before auto-cancel：{{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
                        </countdown>
                    </b-alert>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card">
                <div class="p-4">
                    <div class="media align-items-center">
                        <div class="media-body overflow-hidden">
                            <h5 class="font-size-16 mb-1">Payment Info</h5>
                        </div>
                    </div>
                </div>

                <div class="p-4 border-top">
                    <div v-show="isSucceeded">
                        <div class="d-flex align-items-center">
                            <svg style="width:80px;color:#34c38f" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                            </svg>
                            <h5 class="mb-0 ms-3">Payment succeeded ! You can retrieve yours tickets in your Dashboard :)</h5>
                        </div>
                    </div>
                    <div v-show="timeout">
                        <div class="d-flex align-items-center">
                            <svg style="width:80px;color:#f46a6a" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                            </svg>
                            <h5 class="mb-0 ms-3">Too slow ! Your reservation has been canceled</h5>
                        </div>
                    </div>
                    <form v-show="!isSucceeded && !timeout" @submit.prevent="confirmPayment" id="payment-form">
                        <b-alert v-if="error" show dismissible variant="danger">{{ error.message }}</b-alert>
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
