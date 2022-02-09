<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["layout"]),
  mounted() {
    document.body.classList.remove("authentication-bg");
    document.body.setAttribute("data-layout", "horizontal");
    document.body.setAttribute("data-layout-mode", "fluid");
    document.body.setAttribute("data-topbar", "light");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <Topbar/>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <Nuxt />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
