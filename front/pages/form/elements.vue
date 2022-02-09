<script>
/**
 * Elements component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`
        };
    },
    data() {
        return {
            title: "Basic Elements",
            items: [{
                    text: "Forms",
                    href: "/"
                },
                {
                    text: "Basic Elements",
                    active: true
                }
            ],
            checked: true,
            smchecked: true,
            lgchecked: true,
            selectedToogle: "A",
            selectedDefault: "a",
            rightcheck: "accepted",
            status: "accepted"
        };
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
      <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Textual inputs</h4>
            <p class="card-title-desc">
              Here are examples of
              <code>.form-control</code> applied to each textual HTML5
              <code>&lt;input&gt;</code>
              <code>type</code>.
            </p>

            <div class="row">
              <div class="col-12">
                <form class="form-horizontal" role="form">
                  <b-form-group
                    class="mb-3"
                    id="example text"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Text"
                    label-for="text"
                  >
                    <b-form-input
                      for="text"
                      value="Artisanal kale"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-search"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Search"
                    label-for="search"
                    class="mb-3"
                  >
                    <b-form-input
                      id="search"
                      value="How do I shoot web"
                      type="search"
                      name="search"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-email"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Email"
                    label-for="email"
                    class="mb-3"
                  >
                    <b-form-input
                      id="email"
                      value="bootstrap@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-url"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="URL"
                    label-for="url"
                    class="mb-3"
                  >
                    <b-form-input
                      id="url"
                      value="https://getbootstrap.com"
                      type="url"
                      name="url"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-tel"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Telephone"
                    label-for="tele"
                    class="mb-3"
                  >
                    <b-form-input
                      id="tele"
                      value="1-(555)-555-5555"
                      type="tel"
                      name="tel"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-password"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Password"
                    label-for="pwd"
                    class="mb-3"
                  >
                    <b-form-input
                      id="pwd"
                      type="password"
                      value="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-number"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Number"
                    label-for="number"
                    class="mb-3"
                  >
                    <b-form-input
                      id="number"
                      value="42"
                      type="number"
                      name="number"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-date-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date and time"
                    label-for="date-time"
                    class="mb-3"
                  >
                    <b-form-input
                      id="date-time"
                      value="2019-08-19T13:45:00"
                      type="datetime-local"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-date"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date"
                    label-for="date"
                    class="mb-3"
                  >
                    <b-form-input
                      id="date"
                      value="2019-08-19"
                      type="date"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-month"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Month"
                    label-for="month"
                    class="mb-3"
                  >
                    <b-form-input
                      id="month"
                      value="2019-08"
                      type="month"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-week"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Week"
                    label-for="week"
                    class="mb-3"
                  >
                    <b-form-input
                      id="week"
                      value="2019-W33"
                      type="week"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Time"
                    label-for="time"
                    class="mb-3"
                  >
                    <b-form-input
                      id="time"
                      value="13:45:00"
                      type="time"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-color"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Color"
                    label-for="color"
                    class="mb-3"
                  >
                    <b-form-input
                      id="color"
                      type="color"
                      name="color"
                      value="#556ee6"
                      class="form-control form-control-color"
                    ></b-form-input>
                  </b-form-group>

                  <div class="mb-3 row">
                    <label class="col-md-2 col-form-label">Select</label>
                    <div class="col-md-10">
                      <select class="form-select">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <label for="exampleDataList" class="col-md-2 col-form-label"
                      >Datalists</label
                    >
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                      </datalist>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Form layouts</h4>

            <div class="row">
              <div class="col-lg-5">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    groups
                  </h5>
                  <form>
                    <b-form-group
                      label="First name"
                      label-for="formrow-firstname-input"
                      class="mb-3"
                    >
                      <b-form-input
                        type="text"
                        id="formrow-firstname-input"
                      ></b-form-input>
                    </b-form-group>

                    <div class="row">
                      <div class="col-md-6">
                        <b-form-group
                          label="Email"
                          label-for="formrow-email-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="formrow-email-input"
                            type="email"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-6">
                        <b-form-group
                          label="Password"
                          label-for="formrow-password-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="formrow-password-input"
                            type="password"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="formrow-customCheck"
                        />
                        <label
                          class="form-check-label"
                          for="formrow-customCheck"
                          >Check me out</label
                        >
                      </div>
                    </div>
                    <div class="mt-4">
                      <b-button type="submit" variant="primary"
                        >Submit</b-button
                      >
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 ms-lg-auto">
                <div class="mt-5 mt-lg-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Horizontal form
                  </h5>

                  <form>
                    <div class="form-group row mb-4">
                      <label
                        for="horizontal-firstname-input"
                        class="col-sm-3 col-form-label"
                        >First name</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="horizontal-firstname-input"
                        />
                      </div>
                    </div>
                    <div class="form-group row mb-4">
                      <label
                        for="horizontal-email-input"
                        class="col-sm-3 col-form-label"
                        >Email</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="email"
                          class="form-control"
                          id="horizontal-email-input"
                        />
                      </div>
                    </div>
                    <div class="form-group row mb-4">
                      <label
                        for="horizontal-password-input"
                        class="col-sm-3 col-form-label"
                        >Password</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="password"
                          class="form-control"
                          id="horizontal-password-input"
                        />
                      </div>
                    </div>

                    <div class="row justify-content-end">
                      <div class="col-sm-9">
                        <div class="form-check mb-4">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="horizontal-customCheck"
                          />
                          <label
                            class="form-check-label"
                            for="horizontal-customCheck"
                            >Remember me</label
                          >
                        </div>

                        <div>
                          <button type="submit" class="btn btn-primary w-md">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <h5 class="font-size-14 mb-4">
                <i class="mdi mdi-arrow-right text-primary me-1"></i> Inline
                forms layout
              </h5>
              <form class="row row-cols-lg-auto gx-3 gy-2 align-items-center">
                <div class="col-12">
                  <label class="visually-hidden" for="specificSizeInputName"
                    >Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="specificSizeInputName"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="col-12">
                  <label
                    class="visually-hidden"
                    for="specificSizeInputGroupUsername"
                    >Username</label
                  >
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input
                      type="text"
                      class="form-control"
                      id="specificSizeInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck2"
                    />
                    <label class="form-check-label" for="autoSizingCheck2">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Form Layout -->

    <!-- Start Form Sizing -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card mb-5">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc">
              Set heights using size like
              <code>lg</code> and <code>sm</code>.
            </p>

            <form>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="default-input">Default input</label>
                    <b-form-input
                      id="default-input"
                      placeholder="Default input"
                    ></b-form-input>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mt-3">
                    <label for="form-sm-input">Form Small input</label>
                    <b-form-input
                      id="form-sm-input"
                      size="sm"
                      placeholder=".form-control-sm"
                    ></b-form-input>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mt-3 mb-0">
                    <label for="form-lg-input">Form Large input</label>
                    <b-form-input
                      id="form-lg-input"
                      size="lg"
                      placeholder=".form-control-lg"
                    ></b-form-input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End Form Sizing -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Checkboxes</h4>

            <div class="row">
              <div class="col-md-5">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Default Checkboxes
                  </h5>
                  <b-form-checkbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="mb-3"
                    checked
                    plain
                    >Form Checkbox</b-form-checkbox
                  >

                  <b-form-checkbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    v-model="rightcheck"
                    plain
                    >Form Checkbox checked</b-form-checkbox
                  >
                </div>
              </div>
              <div class="col-md-6 ms-auto">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Checkboxes Right
                  </h5>
                  <div class="form-check form-check-right mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="formCheckRight1"
                    />
                    <label class="form-check-label" for="formCheckRight1">
                      Form Checkbox Right
                    </label>
                  </div>

                  <div class="form-check form-check-right">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="formCheckRight2"
                      checked=""
                    />
                    <label class="form-check-label" for="formCheckRight2">
                      Form Checkbox Right checked
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Radios</h4>

            <div class="row">
              <div class="col-md-5">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>Default
                    Radios
                  </h5>
                  <b-form-radio
                    v-model="selectedDefault"
                    class="mb-3"
                    value="a"
                    plain
                    >Form Radio</b-form-radio
                  >
                  <b-form-radio
                    v-model="selectedDefault"
                    class="custom-radio mb-3"
                    value="A"
                    plain
                    >Form Radio checked</b-form-radio
                  >
                </div>
              </div>

              <div class="col-md-6 ms-auto">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>Custom
                    Radios
                  </h5>
                  <b-form-radio
                    v-model="selectedToogle"
                    class="form-check-right mb-3"
                    value="b"
                    plain
                  >
                    Form Radio Right</b-form-radio
                  >
                <br />
                    <b-form-radio
                      v-model="selectedToogle"
                      class="form-check-right"
                      value="B"
                      plain
                    >
                      Form Radio Right checked</b-form-radio
                    >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Switches</h4>
            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the
              <code>.custom-switch</code> class to render a toggle switch.
              Switches also support the <code>disabled</code> attribute.
            </p>

            <div class="row">
              <div class="col-md-6">
                <div>
                  <h5 class="font-size-14 mb-3">Switch examples</h5>
                  <div class="form-check form-switch mb-3" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch1"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitch1"
                      >Toggle this switch element</label
                    >
                  </div>
                  <div class="form-check form-switch" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      disabled=""
                      id="customSwitch2"
                    />
                    <label class="form-check-label" for="customSwitch2"
                      >Disabled switch element</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mt-4 mt-md-0">
                  <h5 class="font-size-14 mb-3">Switch sizes</h5>

                  <div class="form-check form-switch mb-3" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizesm"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitchsizesm"
                      >Small Size Switch</label
                    >
                  </div>

                  <div
                    class="form-check form-switch form-switch-md mb-3"
                    dir="ltr"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizemd"
                    />
                    <label class="form-check-label" for="customSwitchsizemd"
                      >Medium Size Switch</label
                    >
                  </div>

                  <div
                    class="form-check form-switch form-switch-lg mb-3"
                    dir="ltr"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizelg"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitchsizelg"
                      >Large Size Switch</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- end row -->
</div>
</template>
