<script>
import { eventService } from '~/helpers/event.service';
import NumberInputSpinner from "vue-number-input-spinner";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { required } from "vuelidate/lib/validators";

export default {
    components: {
        NumberInputSpinner,
        flatPickr
    },
    head() {
        return {
            title: `${this.title} | Dashboard Geebl`,
        };
    },
    data() {
        return {
            title: "Events",
            submitted: false,
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
                    href: "/dashboard/events/",
                },
                {
                    text: "Create",
                    active: true
                }
            ],
            form: {
                name: "",
                location: "",
                organizer: "",
                date: "",
                description: "",
                price: 5,
                seats: 0,
            },
            
            disabledOption: {
                minDate: "today"
            }
        }
    },
    validations: {
        form: {
            name: {
                required
            },
            location: {
                required
            },
            organizer: {
                required
            },
            date: {
                required
            },
            price: {
                required
            },
            seats: {
                required
            },
        },
    },
    methods: {
        formSubmit(e) {
            this.submitted = true;
            this.$v.$touch();

            console.log(this.form)

        },
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-3">Create a new Event</h4>
                    <form class="needs-validation" @submit.prevent="formSubmit">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="validationName">Name</label>
                                    <input id="validationName" v-model="form.name" type="text" class="form-control" placeholder="Name" value="Mark" :class="{'is-invalid': submitted && $v.form.name.$error}" />
                                    <div v-if="submitted && $v.form.name.$error" class="invalid-feedback">
                                        <span v-if="!$v.form.name.required">This value is required.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="validationOrganizer">Organizer</label>
                                    <input id="validationOrganizer" v-model="form.organizer" type="text" class="form-control" placeholder="Organizer" value="Mark" :class="{'is-invalid': submitted && $v.form.organizer.$error}" />
                                    <div v-if="submitted && $v.form.organizer.$error" class="invalid-feedback">
                                        <span v-if="!$v.form.organizer.required">This value is required.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label for="validationLocation">Location</label>
                                    <input id="validationLocation" v-model="form.location" type="text" class="form-control" placeholder="Location" value="Mark" :class="{'is-invalid': submitted && $v.form.location.$error}" />
                                    <div v-if="submitted && $v.form.location.$error" class="invalid-feedback">
                                        <span v-if="!$v.form.location.required">This value is required.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label for="validationDate">Date</label>
                                    <flat-pickr
                                        class="form-control flatpickr-input"
                                        v-model="form.date"
                                        :config="disabledOption"
                                    ></flat-pickr>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label for="validationSeats">Seats</label>
                                    <b-form-input
                                        id="validationSeats"
                                        value="0"
                                        min="0"
                                        type="number"
                                        name="number"
                                        :class="{'is-invalid': submitted && $v.form.seats.$error}"
                                        v-model="form.seats"
                                    ></b-form-input>
                                    <div v-if="submitted && $v.form.seats.$error" class="invalid-feedback">
                                        <span v-if="!$v.form.seats.required">This value is required.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label for="validationPrice">Price</label>
                                    <b-form-input
                                        id="validationPrice"
                                        value="0"
                                        min="5.00"
                                        step="0.01"
                                        type="number"
                                        name="number"
                                        :class="{'is-invalid': submitted && $v.form.price.$error}"
                                        v-model="form.price"
                                    ></b-form-input>
                                    <div v-if="submitted && $v.form.price.$error" class="invalid-feedback">
                                        <span v-if="!$v.form.price.required">This value is required.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
</div>
</template>

<style></style>
