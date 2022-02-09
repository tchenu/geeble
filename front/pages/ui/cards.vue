<script>
/**
 * Cards component
 */
export default {
  head() {
    return {
      title: `${this.title} | Geebl`,
    };
  },
  data() {
    return {
      title: "Cards",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Cards",
          active: true,
        },
      ],
    };
  },
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6 col-xl-3">
        <!-- Simple card -->
        <b-card
          :img-src="require('~/assets/images/small/img-1.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-title>
            <h5 class="card-title">Card title</h5>
          </b-card-title>
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-button href="javascript:void(0);" variant="primary"
            >Button</b-button
          >
        </b-card>
      </div>
      <!-- end col -->

      <div class="col-lg-6 col-xl-3">
        <b-card
          no-body
          :img-src="require('~/assets/images/small/img-2.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-body>
            <b-card-title>
              <h5 class="card-title">Card title</h5>
            </b-card-title>
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card-body>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
          </ul>
          <div class="card-body">
            <a href="javascript:void(0);" class="card-link text-custom"
              >Card link</a
            >
            <a href="javascript:void(0);" class="card-link text-custom"
              >Another link</a
            >
          </div>
        </b-card>
      </div>
      <!-- end col -->

      <div class="col-lg-6 col-xl-3">
        <b-card
          :img-src="require('~/assets/images/small/img-3.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
        </b-card>
      </div>
      <!-- end col -->

      <div class="col-lg-6 col-xl-3">
        <b-card no-body>
          <b-card-body>
            <b-card-title>
              <h5 class="card-title">Card title</h5>
            </b-card-title>
            <b-card-sub-title>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
            </b-card-sub-title>
          </b-card-body>
          <img src="@/assets/images/small/img-4.jpg" class="img-fluid" />
          <b-card-body>
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <a href="javascript:void(0);" class="card-link text-custom"
              >Card link</a
            >
            <a href="javascript:void(0);" class="card-link text-custom"
              >Another link</a
            >
          </b-card-body>
        </b-card>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <b-card no-body>
          <b-card-body>
            <b-card-title>
              <h4 class="card-title">Special title treatment</h4>
            </b-card-title>
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <div class="d-grid">
              <a href="javascript:void(0);" class="btn btn-primary"
                >Go somewhere</a
              >
            </div>
          </b-card-body>
        </b-card>
      </div>
      <div class="col-lg-6">
        <b-card no-body>
          <b-card-body>
            <b-card-title>
              <h4 class="card-title">Special title treatment</h4>
            </b-card-title>
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <div class="d-grid">
              <a href="javascript:void(0);" class="btn btn-primary"
                >Go somewhere</a
              >
            </div>
          </b-card-body>
        </b-card>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-4">
        <div class="card card-body">
          <h4 class="card-title mt-0">Special title treatment</h4>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary waves-effect waves-light"
            >Go somewhere</a
          >
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card card-body text-center">
          <h4 class="card-title mt-0">Special title treatment</h4>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary waves-effect waves-light"
            >Go somewhere</a
          >
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card card-body text-right">
          <h4 class="card-title mt-0">Special title treatment</h4>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary waves-effect waves-light"
            >Go somewhere</a
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <b-card>
          <b-card-title>
            <h5 class="card-title">Special title treatment</h5>
          </b-card-title>
          <h5 slot="header" class="mb-0">Featured</h5>
          <b-card-text>
            With supporting text below as a natural lead-in to additional
            content.
          </b-card-text>
          <b-button href="javascript: void(0);" variant="primary"
            >Go somewhere</b-button
          >
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card header="Quote">
          <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </b-card-text>
          <footer>
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </footer>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card header="Featured" footer="2 days ago">
          <b-card-text>
            <h4 class="card-title">Special title treatment</h4>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="javascript: void(0);" class="btn btn-primary"
              >Go somewhere</a
            >
          </b-card-text>
        </b-card>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-md-4">
        <b-card
          :img-src="require('~/assets/images/small/img-5.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-title>
            <h5 class="card-title">Card title</h5>
          </b-card-title>
          <b-card-text>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </b-card-text>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card
          :img-src="require('~/assets/images/small/img-7.jpg')"
          img-alt="Card image"
          img-bottom
        >
          <b-card-title>
            <h5 class="card-title">Card title</h5>
          </b-card-title>
          <b-card-text>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </b-card-text>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card
          overlay
          :img-src="require('~/assets/images/small/img-6.jpg')"
          img-alt="Card Image"
          text-variant="white"
        >
          <b-card-title>
            <h5 class="card-title text-white">Card title</h5>
          </b-card-title>
          <b-card-text>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              <small class="text-white">Last updated 3 mins ago</small>
            </p>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <b-card no-body>
          <b-row no-gutters class="align-items-center">
            <b-col md="4">
              <b-card-img
                :src="require('~/assets/images/small/img-2.jpg')"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body title="Card title">
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </b-card-text>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <div class="col-lg-6">
        <b-card no-body>
          <b-row no-gutters class="align-items-center">
            <b-col md="8">
              <b-card-body title="Card title">
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </b-card-text>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </b-card-body>
            </b-col>
            <b-col md="4">
              <b-card-img
                :src="require('~/assets/images/small/img-3.jpg')"
                class="rounded-0"
              ></b-card-img>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-md-4">
        <b-card bg-variant="primary" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="mdi mdi-bullseye-arrow me-3"></i> Primary Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card bg-variant="success" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="mdi mdi-check-all me-3"></i> Success Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card bg-variant="info" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="mdi mdi-alert-circle-outline me-3"></i> Info Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-md-4">
        <b-card bg-variant="warning" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="mdi mdi-alert-outline me-3"></i> Warning Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card bg-variant="danger" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="mdi mdi-block-helper me-3"></i> Danger Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card bg-variant="dark" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="mdi mdi-alert-circle-outline me-3"></i> Dark Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-4">
        <b-card
          header-class="bg-transparent border-primary"
          class="border border-primary"
        >
          <template v-slot:header>
            <h5 class="my-0 text-primary">
              <i class="mdi mdi-bullseye-arrow me-3"></i>Primary outline Card
            </h5>
          </template>
          <h5 class="card-title mt-0">card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
      <div class="col-lg-4">
        <b-card
          header-class="bg-transparent border-danger"
          class="border border-danger"
        >
          <template v-slot:header>
            <h5 class="my-0 text-danger">
              <i class="mdi mdi-block-helper me-3"></i>Danger outline Card
            </h5>
          </template>
          <h5 class="card-title mt-0">card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
      <div class="col-lg-4">
        <b-card
          header-class="bg-transparent border-success"
          class="border border-success"
        >
          <template v-slot:header>
            <h5 class="my-0 text-success">
              <i class="mdi mdi-block-helper me-3"></i>Success outline Card
            </h5>
          </template>
          <h5 class="card-title mt-0">card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <h4 class="my-3">Card groups</h4>
        <div class="card-deck-wrapper">
          <div class="card-group">
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="~assets/images/small/img-4.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title mt-0">Card title</h4>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="~assets/images/small/img-5.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title mt-0">Card title</h4>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="~assets/images/small/img-6.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title mt-0">Card title</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
