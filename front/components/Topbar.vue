<script>
import { userService } from '../helpers/authservice/user.service';

export default {
  data() {
    return {
      menuItems: [
        {
          id: 1,
          label: "Events",
          link: "/",
        },
        {
          id: 2,
          label: "Articles",
          link: "/article",
        },
        {
          id: 3,
          label: "Dashboard",
          link: "/dashboard",
        },
      ],
      user: {
        'username': 'Guest'
      }
    };
  },
  methods: {
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextElementSibling;
      if (nextEl) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.toggle("show");
      }
      return false;
    },

    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },

    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    logoutUser() {
      this.$store.dispatch("auth/logout");
      this.$router.push({
        path: "/account/login",
      });
    },
  },
  async created() {
    if (this.$store.state.auth.status.loggeduser) {
      this.user = await userService.getMe()
    }
  }
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">

        <div class="navbar-brand-box">
          <nuxt-link to="/" class="logo logo-dark">
              <img src="~/assets/images/logo-dark.png" alt height="40" />
          </nuxt-link>
        </div>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
          data-toggle="collapse"
          data-target="#topnav-menu-content"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div v-if="user.username != 'Guest'" class="d-flex">
        <b-dropdown
          class="d-inline-block"
          toggle-class="header-item"
          right
          variant="white"
          menu-class="dropdown-menu-end"
        >
          <template v-slot:button-content>
            <span
              class="d-none d-xl-inline-block ms-1 fw-medium font-size-15"
              >{{ user.username }}</span>
            <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
          </template>

          <router-link to="/profile" class="dropdown-item">Profile</router-link>

          <a
            class="dropdown-item"
            href="javascript: void(0);"
            @click="logoutUser"
          >
            <span class="align-middle">Logout</span>
          </a>
        </b-dropdown>
      </div>
      <div v-else class="d-flex">
        <router-link to="/account/login">Login</router-link>
      </div>
    </div>
    <div class="container-fluid">
      <div class="topnav">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div class="collapse navbar-collapse" id="topnav-menu-content">
            <ul class="navbar-nav">
              <li
                class="nav-item"
                v-for="(item, index) of menuItems"
                :key="index"
              >
                <router-link :to="item.link" class="nav-link arrow-none side-nav-link-ref">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
