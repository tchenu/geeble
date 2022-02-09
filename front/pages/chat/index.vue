<script>
import {
    chatData,
    chatMessagesData,
    groupData
} from "./data";
import {
    required
} from "vuelidate/lib/validators";

/**
 * Chat component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            chatData: chatData,
            groupData: groupData,
            chatMessagesData: chatMessagesData,
            title: "Chat",
            items: [{
                    text: "Apps",
                },
                {
                    text: "Chat",
                    active: true,
                },
            ],
            submitted: false,
            form: {
                message: "",
            },
            username: "Designer",
            member: null,
        };
    },
    validations: {
        form: {
            message: {
                required,
            },
        },
    },
    methods: {
        /**
         * Get the name of user
         */
        chatUsername(name) {
            this.username = name;
            this.usermessage = "Hello";

            this.chatMessagesData = [];
            this.member = null;
            const currentDate = new Date();

            this.chatMessagesData.push({
                name: this.username,
                message: this.usermessage,
                time: currentDate.getHours() + ":" + currentDate.getMinutes(),
            });
        },

        chatGroup(name, memberno, member) {
            this.username = name;
            this.member = memberno;
            this.usermessage = "Hello";
            this.chatMessagesData = [];
            const currentDate = new Date();

            this.chatMessagesData.push({
                name: member,
                message: this.usermessage,
                time: currentDate.getHours() + ":" + currentDate.getMinutes(),
            });
        },

        /**
         * Char form Submit
         */
        // eslint-disable-next-line no-unused-vars
        formSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            } else {
                const message = this.form.message;
                const currentDate = new Date();
                this.chatMessagesData.push({
                    align: "right",
                    name: "Marcus",
                    message,
                    time: currentDate.getHours() + ":" + currentDate.getMinutes(),
                });
            }
            this.submitted = false;
            this.form = {};
        },
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="d-lg-flex mb-4">
        <div class="chat-leftsidebar card">
            <div class="p-3 px-4">
                <div class="media">
                    <div class="align-self-center me-3">
                        <img src="~/assets/images/users/avatar-4.jpg" class="avatar-xs rounded-circle" alt />
                    </div>
                    <div class="media-body">
                        <h5 class="font-size-16 mt-0 mb-1">
                            <a href="#" class="text-dark">
                                Marcus
                                <i class="mdi mdi-circle text-success align-middle font-size-10 ms-1"></i>
                            </a>
                        </h5>
                        <p class="text-muted mb-0">Available</p>
                    </div>

                    <div>
                        <b-dropdown variant="white" class="chat-noti-dropdown" toggle-class="py-0" right>
                            <template v-slot:button-content>
                                <i class="uil uil-ellipsis-h"></i>
                            </template>
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item" href="#">Add Contact</a>
                            <a class="dropdown-item" href="#">Setting</a>
                        </b-dropdown>
                    </div>
                </div>
            </div>

            <div class="p-3">
                <div class="search-box chat-search-box">
                    <div class="position-relative">
                        <input type="text" class="form-control bg-light border-light rounded" placeholder="Search..." />
                        <i class="uil uil-search search-icon"></i>
                    </div>
                </div>
            </div>

            <div class="pb-3">
                <div data-simplebar style="max-height: 470px;">
                    <div class="p-4 border-top">
                        <div>
                            <div class="float-end">
                                <a href class="text-primary">
                                    <i class="mdi mdi-plus"></i> New Group
                                </a>
                            </div>
                            <h5 class="font-size-16 mb-3">
                                <i class="uil uil-users-alt me-1"></i> Groups
                            </h5>

                            <ul class="list-unstyled chat-list group-list">
                                <li v-for="(group, index) in groupData" :key="index" @click="chatGroup(group.name, group.member,group.membername)" :class="{ active: username == group.name }">
                                    <a href="#">
                                        <div class="media align-items-center">
                                            <div class="avatar-xs me-3">
                                                <span v-if="!group.icon" class="avatar-title rounded-circle bg-soft-primary text-primary">G</span>
                                                <span v-if="group.icon" class="avatar-title rounded-circle bg-soft-primary text-primary">
                                                    <i :class="`uil ${group.icon}`"></i>
                                                </span>
                                            </div>

                                            <div class="media-body">
                                                <h5 class="font-size-14 mb-0">{{group.name}}</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 border-top">
                        <div>
                            <div class="float-end">
                                <a href class="text-primary">
                                    <i class="mdi mdi-plus"></i> New Contact
                                </a>
                            </div>
                            <h5 class="font-size-16 mb-3">
                                <i class="uil uil-user me-1"></i> Contacts
                            </h5>

                            <ul class="list-unstyled chat-list">
                                <li v-for="data of chatData" :key="data.id" @click="chatUsername(data.name)" :class="{ active: username == data.name }">
                                    <a href="#">
                                        <div class="media">
                                            <div class="user-img align-self-center me-3" :class="{'away': data.status === 'away','online': data.status === 'online'}">
                                                <img v-if="data.image" :src="data.image" class="rounded-circle avatar-xs" alt />
                                                <div v-if="!data.image" class="avatar-xs align-self-center">
                                                    <span class="avatar-title rounded-circle bg-soft-primary text-primary">{{data.name.charAt(0)}}</span>
                                                </div>
                                                <span class="user-status"></span>
                                            </div>

                                            <div class="media-body overflow-hidden">
                                                <h5 class="text-truncate font-size-14 mb-1">{{ data.name }}</h5>
                                                <p class="text-truncate mb-0">{{ data.message }}</p>
                                            </div>
                                            <div class="font-size-11">{{ data.time }}</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end chat-leftsidebar -->

        <div class="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
            <div class="card">
                <div class="p-3 px-lg-4 border-bottom">
                    <div class="row">
                        <div class="col-md-4 col-6">
                            <h5 class="font-size-16 mb-1 text-truncate">
                                <a href="#" class="text-dark">{{username}}</a>
                            </h5>
                            <p class="text-muted text-truncate mb-0" v-if="member !== null">
                                <i class="uil uil-users-alt me-1"></i>
                                {{member !== null ? member : ''}} Members
                            </p>
                        </div>
                        <div class="col-md-8 col-6">
                            <ul class="list-inline user-chat-nav text-end mb-0">
                                <li class="list-inline-item">
                                    <b-dropdown right menu-class="dropdown-menu-md" variant="white">
                                        <template v-slot:button-content>
                                            <i class="uil uil-search"></i>
                                        </template>

                                        <form class="p-2">
                                            <div>
                                                <input type="text" class="form-control rounded" placeholder="Search..." />
                                            </div>
                                        </form>
                                    </b-dropdown>
                                </li>

                                <li class="list-inline-item">
                                    <b-dropdown right toggle-class="nav-btn" variant="white">
                                        <template v-slot:button-content>
                                            <i class="uil uil-ellipsis-h"></i>
                                        </template>
                                        <a class="dropdown-item" href="#">Profile</a>
                                        <a class="dropdown-item" href="#">Archive</a>
                                        <a class="dropdown-item" href="#">Muted</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </b-dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="px-lg-2 chat-users">
                    <div class="chat-conversation p-3">
                        <simplebar style="max-height: 455px;">
                            <ul class="list-unstyled mb-0">
                                <li class="chat-day-title">
                                    <div class="title">Today</div>
                                </li>
                                <li v-for="data of chatMessagesData" :key="data.id" :class="{ right: `${data.align}` === 'right' }">
                                    <div class="conversation-list">
                                        <div class="ctext-wrap">
                                            <div class="ctext-wrap-content">
                                                <h5 class="font-size-14 conversation-name">
                                                    <a href="#" class="text-dark">{{ data.name }}</a>
                                                    <span class="d-inline-block font-size-12 text-muted ms-2">{{ data.time }}</span>
                                                </h5>
                                                <p class="mb-0">{{ data.message }}</p>
                                            </div>
                                            <b-dropdown class="align-self-start" variant="white">
                                                <template v-slot:button-content>
                                                    <i class="uil uil-ellipsis-v"></i>
                                                </template>
                                                <a class="dropdown-item" href="#">Copy</a>
                                                <a class="dropdown-item" href="#">Save</a>
                                                <a class="dropdown-item" href="#">Forward</a>
                                                <a class="dropdown-item" href="#">Delete</a>
                                            </b-dropdown>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </simplebar>
                    </div>
                </div>

                <div class="p-3 chat-input-section">
                    <form @submit.prevent="formSubmit" class="row">
                        <div class="col">
                            <div class="position-relative">
                                <input type="text" v-model="form.message" class="form-control chat-input rounded" placeholder="Enter Message..." :class="{ 'is-invalid': submitted && $v.form.message.$error }" />
                                <div v-if="submitted && $v.form.message.$error" class="invalid-feedback">
                                    <span v-if="!$v.form.message.required">This value is required.</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary chat-send w-md waves-effect waves-light">
                                <span class="d-none d-sm-inline-block me-2">Send</span>
                                <i class="mdi mdi-send float-end"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End d-lg-flex  -->
</template>
