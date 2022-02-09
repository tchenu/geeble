<script>
import { menuItems } from "./menu";

/**
 * Horizontal-topbar component
 */
export default {
  data() {
    return {
      menuItems: menuItems,
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
      this.$store.dispatch("authfack/logout");
      this.$router.push({
        path: "/account/login",
      });
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <nuxt-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="~/assets/images/logo-sm.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="~/assets/images/logo-dark.png" alt height="40" />
            </span>
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

        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input
              type="text"
              class="form-control"
              :placeholder="$t('navbar.search.text')"
            />
            <span class="uil-search"></span>
          </div>
        </form>
      </div>

      <div class="d-flex">
        <b-dropdown
          variant="white"
          class="d-inline-block d-lg-none ms-2"
          toggle-class="header-item noti-icon"
          right
          menu-class="dropdown-menu-lg p-0 dropdown-menu-end"
        >
          <template v-slot:button-content>
            <i class="uil-search"></i>
          </template>
          <form class="p-3">
            <div class="form-group m-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="$t('navbar.search.text')"
                  aria-label="Recipient's username"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </b-dropdown>

        <b-dropdown
          class="d-inline-block"
          toggle-class="header-item"
          right
          variant="white"
          menu-class="dropdown-menu-end"
        >
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="~/assets/images/users/avatar-4.jpg"
              alt="Header Avatar"
            />
            <span
              class="d-none d-xl-inline-block ms-1 fw-medium font-size-15"
              >{{ $t("navbar.dropdown.marcus.text") }}</span
            >
            <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
          </template>

          <!-- item-->
          <a class="dropdown-item" href="#">
            <i
              class="uil uil-user-circle font-size-18 align-middle text-muted me-1"
            ></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.profile")
            }}</span>
          </a>
          <a class="dropdown-item" href="#">
            <i
              class="uil uil-wallet font-size-18 align-middle me-1 text-muted"
            ></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.mywallet")
            }}</span>
          </a>
          <a class="dropdown-item d-block" href="#">
            <i
              class="uil uil-cog font-size-18 align-middle me-1 text-muted"
            ></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.settings")
            }}</span>
            <span class="badge bg-soft-success rounded-pill mt-1 ms-2">03</span>
          </a>
          <a class="dropdown-item" href="#">
            <i
              class="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"
            ></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.lockscreen")
            }}</span>
          </a>
          <a
            class="dropdown-item"
            href="javascript: void(0);"
            @click="logoutUser"
          >
            <i
              class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"
            ></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.logout")
            }}</span>
          </a>
        </b-dropdown>

      </div>
    </div>
    <div class="container-fluid">
      <div class="topnav">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div class="collapse navbar-collapse" id="topnav-menu-content">
            <ul class="navbar-nav">
              <li
                class="nav-item dropdown"
                v-for="(item, index) of menuItems"
                :key="index"
              >
                <router-link
                  v-if="!item.subItems"
                  :to="item.link"
                  class="nav-link dropdown-toggle arrow-none side-nav-link-ref"
                >
                  <i :class="`${item.icon} me-2`"></i>
                  {{ $t(item.label) }}
                </router-link>

                <a
                  v-if="item.subItems"
                  class="nav-link dropdown-toggle arrow-none"
                  @click="onMenuClick"
                  href="javascript: void(0);"
                  id="topnav-components"
                  role="button"
                >
                  <i :class="`${item.icon} me-2`"></i>
                  {{ $t(item.label) }}
                  <div class="arrow-down"></div>
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="topnav-dashboard"
                  v-if="hasItems(item)"
                  :class="{
                    'dropdown-mega-menu-xl px-2': item.subItems.length > 11,
                  }"
                >
                  <template v-for="(subitem, index) of item.subItems">
                    <router-link
                      :key="index"
                      class="col dropdown-item side-nav-link-ref"
                      v-if="item.subItems.length < 11 && !hasItems(subitem)"
                      :to="subitem.link"
                      >{{ $t(subitem.label) }}</router-link
                    >
                    <div v-if="item.subItems.length > 11" :key="index">
                      <div v-if="index % 3 == 0" class="row">
                        <div class="col-lg-4">
                          <router-link
                            class="dropdown-item side-nav-link-ref"
                            :to="subitem.link"
                            >{{ $t(item.subItems[index].label) }}</router-link
                          >
                        </div>
                        <div class="col-lg-4" v-if="item.subItems[index + 1]">
                          <router-link
                            class="dropdown-item side-nav-link-ref"
                            :to="item.subItems[index + 1].link"
                            >{{
                              $t(item.subItems[index + 1].label)
                            }}</router-link
                          >
                        </div>
                        <div class="col-lg-4" v-if="item.subItems[index + 2]">
                          <router-link
                            class="dropdown-item side-nav-link-ref"
                            :to="item.subItems[index + 2].link"
                            >{{
                              $t(item.subItems[index + 2].label)
                            }}</router-link
                          >
                        </div>
                      </div>
                    </div>
                    <div class="dropdown" v-if="hasItems(subitem)" :key="index">
                      <a
                        class="dropdown-item"
                        href="javascript: void(0);"
                        @click="onMenuClick"
                      >
                        {{ $t(subitem.label) }}
                        <div class="arrow-down"></div>
                      </a>
                      <div class="dropdown-menu">
                        <router-link
                          v-for="(subSubitem, index) of subitem.subItems"
                          :key="index"
                          :to="subSubitem.link"
                          class="dropdown-item side-nav-link-ref"
                          >{{ $t(subSubitem.label) }}</router-link
                        >
                      </div>
                    </div>
                  </template>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
