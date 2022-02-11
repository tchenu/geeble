<script>
import { transactionService } from "~/helpers/transaction.service"
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
            event: null,
            available: null,
            paymentId: this.$route.query.payment_intent,
            clientSecret: this.$route.query.payment_intent_client_secret,
            redirect: this.$route.query.redirect_status,
            message: null,
            elements: null,
        };
    },
    async asyncData({ params  }) {
        const event = await eventService.get(params.slug);
        const available = await eventService.available(params.slug)
        const quantity = params.quantity

        return { event, available, quantity };
    },
    async created() {
        if (! this.clientSecret) {
            this.clientSecret = await slotService.add(this.event.slug, this.quantity);
        }

        if (this.paymentId) {
            const { paymentIntent } = await this.$stripe.retrievePaymentIntent(this.clientSecret);
            await transactionService.confirmPayment(this.payment_intent)

            if (paymentIntent.status == "succeeded") {
                console.log("succeded")
            }
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
                                    <th scope="row">
                                        <img src="~/assets/images/product/img-1.png" alt="product-img" title="product-img" class="avatar-md" />
                                    </th>
                                    <td>
                                        <h5 class="font-size-14 text-truncate">
                                            <nuxt-link :to="/event/ + event.slug" class="text-dark">Ticket for {{ event.name }}</nuxt-link>
                                        </h5>
                                        <p class="text-muted mb-0">$ {{ event.price }} x {{ quantity }}</p>
                                    </td>
                                    <td>$ {{ event.price * quantity | toPrice }}</td>
                                </tr>
                                <tr class="bg-light">
                                    <td colspan="2">
                                        <h5 class="font-size-14 m-0">Total:</h5>
                                    </td>
                                    <td>$ {{ event.price * quantity | toPrice }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                    <div v-if="redirect == 'succeeded'" class="d-flex align-items-center">
                        <svg style="width:80px;color:#34c38f" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                        </svg>
                        <h5 class="mb-0 ms-3">Payment succeeded !</h5>
                    </div>
                    <form v-else @submit.prevent="confirmPayment" id="payment-form">
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
