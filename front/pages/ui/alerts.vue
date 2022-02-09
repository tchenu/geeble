<script>
/**
 * Alerts component
 */
export default {
  head() {
    return {
      title: `${this.title} | Geebl`
    };
  },
  data() {
    return {
      title: "Alerts",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Alerts",
          active: true
        }
      ],
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  middleware: "authentication",
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Default Alerts</h4>
            <p class="card-title-desc">
              Alerts are available for any length of text, as well as an
              optional dismiss button. For proper styling, use one of the four
              <strong>required</strong> contextual classes (e.g.,
              <code class="highlighter-rouge">success</code>).
            </p>

            <div class="">
              <b-alert variant="primary" show
                >A simple primary alert—check it out!</b-alert
              >
              <b-alert variant="secondary" show
                >A simple secondary alert—check it out!</b-alert
              >
              <b-alert variant="success" show
                >A simple success alert—check it out!</b-alert
              >
              <b-alert variant="danger" show
                >A simple danger alert—check it out!</b-alert
              >
              <b-alert variant="warning" show
                >A simple warning alert—check it out!</b-alert
              >
              <b-alert variant="info" show class="mb-0"
                >A simple info alert—check it out!</b-alert
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Link color</h4>
            <p class="card-title-desc">
              Use the <code class="highlighter-rouge">.alert-link</code> utility
              class to quickly provide matching colored links within any alert.
            </p>

            <div class="">
              <b-alert show variant="primary">
                A simple primary alert with<a href="#" class="alert-link"
                  >an example link</a
                >. Give it a click if you like.</b-alert
              >
              <b-alert show variant="secondary">
                A simple secondary alert with<a href="#" class="alert-link"
                  >an example link</a
                >. Give it a click if you like.</b-alert
              >

              <b-alert show variant="success">
                A simple success alert with<a href="#" class="alert-link"
                  >an example link</a
                >. Give it a click if you like.</b-alert
              >
              <b-alert show variant="danger">
                A simple danger alert with<a href="#" class="alert-link"
                  >an example link</a
                >. Give it a click if you like.</b-alert
              >
              <b-alert show variant="warning">
                A simple warning alert with<a href="#" class="alert-link"
                  >an example link</a
                >. Give it a click if you like.</b-alert
              >
              <b-alert show variant="info" class="mb-0">
                A simple warning alert with<a href="#" class="alert-link"
                  >an example link</a
                >. Give it a click if you like.</b-alert
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dismissing</h4>
            <p class="card-title-desc">
              Add a dismiss button and the
              <code>.alert-dismissible</code> class, which adds extra padding to
              the right of the alert and positions the
              <code>.close</code> button.
            </p>

            <div class="">
              <b-alert show dismissible variant="primary"
                >A simple primary alert—check it out!</b-alert
              >
              <b-alert show dismissible variant="secondary"
                >A simple secondary alert—check it out!</b-alert
              >
              <b-alert show dismissible variant="success"
                >A simple success alert—check it out!</b-alert
              >
              <b-alert show dismissible variant="danger"
                >A simple danger alert—check it out!</b-alert
              >
              <b-alert show dismissible variant="warning"
                >A simple warning alert—check it out!</b-alert
              >
              <b-alert show dismissible variant="info"
                >A simple info alert—check it out!</b-alert
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">With Icon</h4>

            <div class="">
              <b-alert show dismissible variant="primary">
                <i class="mdi mdi-bullseye-arrow mr-2"></i>A simple primary
                alert—check it out!
              </b-alert>

              <b-alert show dismissible variant="secondary">
                <i class="mdi mdi-grease-pencil mr-2"></i>A simple secondary
                alert—check it out!
              </b-alert>

              <b-alert show dismissible variant="success">
                <i class="mdi mdi-check-all mr-2"></i>A simple success
                alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="danger">
                <i class="mdi mdi-block-helper mr-2"></i>A simple danger
                alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="warning">
                <i class="mdi mdi-alert-outline mr-2"></i>A simple warning
                alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="info">
                <i class="mdi mdi-alert-circle-outline mr-2"></i>A simple info
                alert—check it out!
              </b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Alert Border Examples</h4>
            <p class="card-title-desc">
              Add <code>alert-border</code> class for Alert Border Examples and
              add <code>alert-border-*</code> color classes for border color
              variant
            </p>

            <div class="">
              <b-alert
                variant="primary"
                show
                dismissible
                class="alert-border alert-border-primary"
              >
                <i
                  class="uil uil-user-circle text-primary font-size-16 mr-2"
                ></i>
                A simple border primary alert
              </b-alert>
              <b-alert
                variant="secondary"
                show
                dismissible
                class="alert-border alert-border-secondary"
              >
                <i class="uil uil-pen font-size-16 text-secondary mr-2"></i>
                A simple border secondary alert
              </b-alert>
              <b-alert
                variant="success"
                show
                dismissible
                class="alert-border alert-border-success"
              >
                <i class="uil uil-check font-size-16 text-success mr-2"></i>
                A simple border success alert
              </b-alert>
              <b-alert
                variant="danger"
                show
                dismissible
                class="alert-border alert-border-danger"
              >
                <i
                  class="uil uil-exclamation-octagon font-size-16 text-danger mr-2"
                ></i>
                A simple border danger alert
              </b-alert>
              <b-alert
                variant="warning"
                show
                dismissible
                class="alert-border alert-border-warning"
              >
                <i
                  class="uil uil-exclamation-triangle font-size-16 text-warning mr-2"
                ></i>
                A simple border warning alert
              </b-alert>
              <b-alert
                variant="info"
                show
                dismissible
                class="alert-border alert-border-info mb-0"
              >
                <i
                  class="uil uil-question-circle font-size-16 text-info mr-2"
                ></i>
                A simple border info alert
              </b-alert>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-0">Alert Examples</h4>

            <div class="row">
              <div class="col-sm-6">
                <b-alert
                  variant="success"
                  dismissible
                  show
                  class="text-center mt-4 px-4 mb-0"
                >
                  <i
                    class="uil uil-check-circle d-block display-4 mt-2 mb-3 text-success"
                  ></i>
                  <h5 class="text-success">Success</h5>
                  <p>A simple success alert</p>
                </b-alert>
              </div>

              <div class="col-sm-6">
                <b-alert
                  variant="danger"
                  dismissible
                  show
                  class="text-center mt-4 px-4 mb-0"
                >
                  <i
                    class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"
                  ></i>
                  <h5 class="text-danger">Error</h5>
                  <p>A simple danger alert</p>
                </b-alert>
              </div>

              <div class="col-sm-6">
                <b-alert
                  variant="warning"
                  dismissible
                  show
                  class="alert-border alert-border-warning text-center mt-4 px-4 mb-0"
                >
                  <i
                    class="uil uil-exclamation-triangle d-block display-4 mt-2 mb-3 text-warning"
                  ></i>
                  <h5 class="text-warning">Error</h5>
                  <p>A simple warning alert</p>
                </b-alert>
              </div>

              <div class="col-sm-6">
                <b-alert
                  variant="info"
                  dismissible
                  show
                  class="alert-border alert-border-info text-center mt-4 px-4 mb-0"
                >
                  <i
                    class="uil uil-question-circle d-block display-4 mt-2 mb-3 text-info"
                  ></i>
                  <h5 class="text-info">Info</h5>
                  <p>A simple info alert</p>
                </b-alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Live Example</h4>
            <p class="card-title-desc">
              Click the button below to show an alert (hidden with inline styles
              to start), then dismiss (and destroy) it with the built-in close
              button.
            </p>
            <b-alert
              :show="dismissCountDown"
              dismissible
              variant="warning"
              @dismissed="dismissCountDown = 0"
              @dismiss-count-down="countDownChanged"
            >
              This alert will dismiss after {{ dismissCountDown }} seconds...
            </b-alert>
            <b-button @click="showAlert" variant="primary" class="m-1">
              Show alert with count-down timer
            </b-button>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Additional content</h4>
            <p class="card-title-desc">
              Alerts can also contain additional HTML elements like headings,
              paragraphs and dividers.
            </p>

            <b-alert variant="success" show>
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </b-alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
