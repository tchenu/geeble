<script>
import { slotService } from '~/helpers/slot.service'
import { ticketService } from '~/helpers/ticket.service'

export default {
    props: ['slots'],
    data() {
        return {
            fields: [
                {
                    key: "event.name",
                    label: "Event"
                },
                {
                    key: "date",
                    label: "Date"
                },
                {
                    key: "quantity",
                },
                "price",
                "status",
                "action",
            ],
            tickets: null,
            event: null,
            slot: null,
            remainingTime: 0
        }
    },
    filters: {
        toPrice: function (price) {
            return (price).toFixed(2);
        },
        toDate: function (date) {
            date = new Date(date)

            return `${date.getDate().toString().padStart(2, "0")}/${date.getMonth().toString().padStart(2, "0")}/${date.getFullYear()}`
        }
    },
    methods: {
        statusClass: function (status) {
            switch(status) {
                case "PENDING":
                    return "bg-soft-warning"
                case "COMPLETED":
                    return "bg-soft-success"
                case "CANCELED":
                    return "bg-soft-danger"
                case "REFUND":
                    return "bg-soft-info"
            }
        },
        isCompleted: function (status) {
            return status === "COMPLETED"
        },
        isPending: function (status) {
            return status === "PENDING"
        },
        isTooLate: function () {
            return  new Date() > this.remainingTime
        },
        generateTicket: async function (id, name) {
            this.tickets = await ticketService.get(id)
            this.event = name

            this.$bvModal.show("modal-tickets")
        },
        refundModal: async function (slot) {
            this.event = slot.event.name
            this.slot = slot.id

            const limit = new Date(slot.event.date)
            const now = new Date()
            limit.setDate(limit.getDate() - 2)
            
            this.remainingTime = (limit.getTime() - now.getTime())
            
            this.$bvModal.show("modal-refund")
        },
        refund: async function () {
            await slotService.refund(this.slot)

            this.$bvModal.hide("modal-refund")
            this.$emit("update-slots");
        }
    }
};
</script>

<template>
    <div class="mt-5">
        <div class="card">
            <div class="table-responsive mb-0">
                <b-table class="table table-centered table-nowrap" :items="slots" :fields="fields" responsive="true">
                    <template v-slot:cell(date)="data">
                        {{ data.item.event.date | toDate }}
                    </template>
                    <template v-slot:cell(price)="data">
                        <p>$ {{ data.item.quantity * data.item.event.price | toPrice }}</p>
                    </template>
                    <template v-slot:cell(status)="data">
                        <div class="badge badge-pill font-size-12" :class="[statusClass(data.item.status)]">{{ data.item.status }}</div>
                    </template>
                    <template v-slot:cell(action)="data">
                        <ul class="list-inline mb-0">
                            <li v-if="isCompleted(data.item.status)" class="list-inline-item">
                                <a @click.prevent="generateTicket(data.item.id, data.item.event.name)" class="px-2 text-primary pe-auto" v-b-tooltip.hover title="Get tickets">
                                    <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20,12A2,2 0 0,0 22,14V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V14C3.11,14 4,13.1 4,12A2,2 0 0,0 2,10V6C2,4.89 2.9,4 4,4H20A2,2 0 0,1 22,6V10A2,2 0 0,0 20,12M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5V16.25M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z" />
                                    </svg>
                                </a>
                            </li>
                            <li v-if="isCompleted(data.item.status)" class="list-inline-item">
                                <a @click.prevent="refundModal(data.item)" class="px-2 text-primary pe-auto" v-b-tooltip.hover title="Refound">
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M15.46 18.12L16.88 19.54L19 17.41L21.12 19.54L22.54 18.12L20.41 16L22.54 13.88L21.12 12.46L19 14.59L16.88 12.46L15.46 13.88L17.59 16M14.97 11.62C14.86 10.28 13.58 8.97 12 9C10.3 9.04 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.39 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.62M13 16H7C7 14.9 6.1 14 5 14V10C6.1 10 7 9.1 7 8H17C17 9.1 17.9 10 19 10V10.05C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </template>
                </b-table>

                <b-modal id="modal-tickets" centered :title="`QRCode(s) for ${event}`" title-class="font-18" hide-footer>
                    <div v-if="tickets" >
                        <img v-for="ticket in tickets.images" :key="ticket" :src="ticket" alt="QrCode">
                    </div>
                </b-modal>
                <b-modal id="modal-refund" centered :title="`Refund for ${event}`" title-class="font-18">
                    <div v-if="remainingTime > 0">
                        <p>Are you sur to cancel your order ?</p>
                        <p>This action is irreversible</p>
                        <b-alert variant="info" show>
                            <countdown :time="remainingTime">
                                <template slot-scope="props">Time Remaining：{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
                            </countdown>
                        </b-alert>
                    </div>
                    <div v-else>
                        <p>Sorry, the delay to cancel your order is already spend</p>
                    </div>
                    <template #modal-footer="{ close }">
                        <b-button v-if="remainingTime > 0" variant="success" @click.prevent="refund()">Yes, cancel my order</b-button>
                        <b-button variant="danger" @click="close()">Abort</b-button>
                    </template>
                </b-modal>
            </div>
        </div>
    </div>
<!-- end row-->
</template>
