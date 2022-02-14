<script>
import { userService } from "../../helpers/authservice/user.service"
import { eventService } from '../../helpers/event.service';
import { slotService } from '../../helpers/slot.service';
import { statService } from '../../helpers/stat.service';

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
    async asyncData() {
        let events = null
        let total = null
        let series = null

        if (await userService.hasCompany()) {
            events = await eventService.getByMyCompany()
        }

        if (await userService.hasRole('ROLE_ADMIN')) {
            const earn = await statService.adminEarn();

            total = earn.total
            series = [{ data: earn.detail.map(day => day['price'])}]
        }

        return {
            slots: await slotService.getMine(),
            events,
            total,
            series,
        }
    },
    methods: {
        async updateSlots() {
            this.slots =  await slotService.getMine()
        }
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <Stat v-if="series != null && total != null" :total="total" :series="series"/>

    <Events v-if="events" :events="events"/>

    <div class="row">
        <Slots :slots="slots" @update-slots="updateSlots"/>
    </div>

</div>
</template>

<style></style>
