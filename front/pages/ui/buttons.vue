<script>
/**
 * Buttons component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Buttons",
            items: [{
                    text: "UI Elements",
                },
                {
                    text: "Buttons",
                    active: true,
                },
            ],
            selected: "radio1",
            options: [{
                    text: "Active",
                    value: "radio1",
                },
                {
                    text: "Radio",
                    value: "radio2",
                },
                {
                    text: "Radio",
                    value: "radio3",
                },
            ],
            selectedCheck: ["checked-1"], // Must be an array reference!
            optionsCheck: [{
                    text: "Checked-1",
                    value: "checked-1",
                },
                {
                    text: "Checked-2",
                    value: "checked-2",
                },
                {
                    text: "Checked-3",
                    value: "checked-3",
                },
            ],
        };
    },
    middleware: "authentication"
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Default buttons</h4>
                    <p class="card-title-desc">
                        Bootstrap includes six predefined button styles, each serving its
                        own semantic purpose.
                    </p>
                    <div class="button-items">
                        <b-button variant="primary">Primary</b-button>
                        <b-button variant="light">Light</b-button>
                        <b-button variant="success">Success</b-button>
                        <b-button variant="info">Info</b-button>
                        <b-button variant="warning">Warning</b-button>
                        <b-button variant="danger">Danger</b-button>
                        <b-button variant="dark">Dark</b-button>
                        <b-button variant="link">Link</b-button>
                        <b-button variant="secondary">Secondary</b-button>
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
                    <h4 class="card-title">Outline buttons</h4>
                    <p class="card-title-desc">
                        Replace the default modifier classes with the
                        <code class="highlighter-rouge">outline-*</code> ones to remove
                        all background images and colors on any button.
                    </p>
                    <div class="button-items">
                        <b-button variant="outline-primary">Primary</b-button>
                        <b-button variant="outline-light">Light</b-button>
                        <b-button variant="outline-success">Success</b-button>
                        <b-button variant="outline-info">Info</b-button>
                        <b-button variant="outline-warning">Warning</b-button>
                        <b-button variant="outline-danger">Danger</b-button>
                        <b-button variant="outline-dark">Dark</b-button>
                        <b-button variant="outline-secondary">Secondary</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Rounded buttons</h4>
                    <p class="card-title-desc">
                        Use
                        <code>pill</code> for button round border.
                    </p>
                    <div class="button-items">
                        <b-button pill variant="primary">Primary</b-button>
                        <b-button pill variant="light">Light</b-button>
                        <b-button pill variant="success">Success</b-button>
                        <b-button pill variant="info">Info</b-button>
                        <b-button pill variant="warning">Warning</b-button>
                        <b-button pill variant="danger">Danger</b-button>
                        <b-button pill variant="dark">Dark</b-button>
                        <b-button pill variant="link">Link</b-button>
                        <b-button pill variant="secondary">Secondary</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Soft background buttons</h4>
                    <p class="card-title-desc">
                        Add
                        <code>.btn-soft-*</code> class with
                        <code>.btn-*</code> color
                        button for a Soft background buttons.
                    </p>
                    <div class="button-items">
                        <b-button variant="primary" class="btn-soft-primary">Primary</b-button>
                        <b-button variant="success" class="btn-soft-success">Success</b-button>
                        <b-button variant="info" class="btn-soft-info">Info</b-button>
                        <b-button variant="warning" class="btn-soft-warning">Warning</b-button>
                        <b-button variant="danger" class="btn-soft-danger">Danger</b-button>
                        <b-button variant="dark" class="btn-soft-dark">Dark</b-button>
                        <b-button variant="secondary" class="btn-soft-secondary">Secondary</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Buttons with icon</h4>
                    <p class="card-title-desc">Add icon in button.</p>

                    <div class="button-items">
                        <b-button variant="primary">
                            Primary
                            <i class="uil uil-arrow-right ml-2"></i>
                        </b-button>
                        <b-button variant="success">
                            <i class="uil uil-check me-2"></i>
                            Success
                        </b-button>
                        <b-button variant="warning">
                            <i class="uil uil-exclamation-triangle me-2"></i>
                            Warning
                        </b-button>
                        <b-button variant="danger">
                            <i class="uil uil-exclamation-octagon me-2"></i>
                            Danger
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Buttons Sizes</h4>
                    <p class="card-title-desc">
                        Add
                        <code>lg</code> or
                        <code>sm</code> for additional sizes.
                    </p>

                    <div class="button-items">
                        <b-button size="lg" variant="primary">Large button</b-button>
                        <b-button size="lg" variant="light">Large button</b-button>
                        <b-button size="sm" variant="primary">Small button</b-button>
                        <b-button size="sm" variant="light">Small button</b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Buttons width</h4>
                    <p class="card-title-desc">
                        Add
                        <code>.w-xs</code>,
                        <code>.w-sm</code>,
                        <code>.w-md</code> and
                        <code>.w-lg</code> class for additional buttons width.
                    </p>

                    <div class="button-items">
                        <b-button variant="primary" class="w-xs">Xs</b-button>
                        <b-button variant="danger" class="w-sm ml-1">Small</b-button>
                        <b-button variant="warning" class="w-md ml-1">Medium</b-button>
                        <b-button variant="success" class="w-lg">Large</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Button tags</h4>
                    <p class="card-title-desc">
                        The
                        <code class="highlighter-rouge">.btn</code>
                        classes are designed to be used with the
                        <code class="highlighter-rouge">&lt;button&gt;</code> element.
                        However, you can also use these classes on
                        <code class="highlighter-rouge">&lt;a&gt;</code> or
                        <code class="highlighter-rouge">&lt;input&gt;</code> elements
                        (though some browsers may apply a slightly different rendering).
                    </p>

                    <div class="button-items">
                        <a class="btn btn-primary" href="javascript: void(0);" role="button">Link</a>
                        <button class="btn btn-success" type="submit">Button</button>
                        <input class="btn btn-info" type="button" value="Input" />
                        <input class="btn btn-danger" type="submit" value="Submit" />
                        <input class="btn btn-warning" type="reset" value="Reset" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Toggle states</h4>
                    <p class="card-title-desc">
                        Add
                        <code class="highlighter-rouge">data-toggle="button"</code>
                        to toggle a button’s
                        <code class="highlighter-rouge">active</code>
                        state. If you’re pre-toggling a button, you must manually add the
                        <code class="highlighter-rouge">.active</code> class
                        <strong>and</strong>
                        <code class="highlighter-rouge">aria-pressed="true"</code> to the
                        <code class="highlighter-rouge">&lt;button&gt;</code>.
                    </p>

                    <div class="button-items">
                        <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">Single toggle</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Block Buttons</h4>
                    <p class="card-title-desc">
                        Create block level buttons—those that span the full width of a
                        parent—by adding
                        <code class="highlighter-rouge">.btn-block</code>.
                    </p>

                    <div>
                        <b-button block variant="primary" size="lg">Block Level Button</b-button>
                        <b-button block variant="light" size="sm">Block Level Button</b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Checkbox & Radio Buttons</h4>
                    <p class="card-title-desc">
                        Bootstrap’s
                        <code class="highlighter-rouge">.button</code> styles can be
                        applied to other elements, such as
                        <code class="highlighter-rouge">&lt;label&gt;</code>s, to provide
                        checkbox or radio style button toggling. Add
                        <code class="highlighter-rouge">data-toggle="buttons"</code> to a
                        <code class="highlighter-rouge">.btn-group</code> containing those
                        modified buttons to enable toggling in their respective styles.
                    </p>

                    <div class="row">
                        <div class="col-xl-6">
                            <b-form-checkbox-group v-model="selectedCheck"  class="check-group" button-variant="primary" :options="optionsCheck" name="buttons-1" buttons></b-form-checkbox-group>
                        </div>
                        <div class="col-xl-6">
                            <b-form-radio-group id="btn-radios-1"  class="check-group" button-variant="light" v-model="selected" :options="options" buttons name="radios-btn-default"></b-form-radio-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

   <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Button group</h4>
            <p class="card-title-desc">
              Wrap a series of buttons with
              <code class="highlighter-rouge">.btn</code> in
              <code class="highlighter-rouge">.btn-group</code>.
            </p>

            <div class="row">
              <div class="col-md-6">
                <div class="d-flex flex-wrap gap-2">
                  <b-button-group>
                    <b-button variant="primary">Left</b-button>
                    <b-button variant="primary">Middle</b-button>
                    <b-button variant="primary">Right</b-button>
                  </b-button-group>

                  <b-button-group>
                    <b-button variant="outline-primary">Left</b-button>
                    <b-button variant="outline-primary">Middle</b-button>
                    <b-button variant="outline-primary">Right</b-button>
                  </b-button-group>
                </div>
              </div>

              <div class="col-md-6">
                <div class="d-flex flex-wrap gap-3 mt-4 mt-md-0">
                  <b-button-group class="mt-4 mt-md-0">
                    <b-button variant="light">
                      <i class="bx bx-menu-alt-right"></i>
                    </b-button>
                    <b-button variant="light">
                      <i class="bx bx-menu"></i>
                    </b-button>
                    <b-button variant="light">
                      <i class="bx bx-menu-alt-left"></i>
                    </b-button>
                  </b-button-group>

                  <b-button-group class="mt-4 mt-md-0">
                    <b-button variant="outline-secondary">
                      <i class="bx bx-menu-alt-right"></i>
                    </b-button>
                    <b-button variant="outline-secondary">
                      <i class="bx bx-menu"></i>
                    </b-button>
                    <b-button variant="outline-secondary">
                      <i class="bx bx-menu-alt-left"></i>
                    </b-button>
                  </b-button-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Button toolbar</h4>
            <p class="card-title-desc">
              Combine sets of button groups into button toolbars for more
              complex components. Use utility classes as needed to space out
              groups, buttons, and more.
            </p>

            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-light">1</button>
                <button type="button" class="btn btn-light">2</button>
                <button type="button" class="btn btn-light">3</button>
                <button type="button" class="btn btn-light">4</button>
              </div>
              <div
                class="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <button type="button" class="btn btn-light">5</button>
                <button type="button" class="btn btn-light">6</button>
                <button type="button" class="btn btn-light">7</button>
              </div>
              <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-light">8</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc">
              Instead of applying button sizing classes to every button in a
              group, just add
              <code class="highlighter-rouge">.btn-group-*</code> to each
              <code class="highlighter-rouge">.btn-group</code>, including each
              one when nesting multiple groups.
            </p>

            <div class="d-flex flex-wrap gap-3 align-items-center">
              <div
                class="btn-group btn-group-lg"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-primary">Left</button>
                <button type="button" class="btn btn-primary">Middle</button>
                <button type="button" class="btn btn-primary">Right</button>
              </div>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-light">Left</button>
                  <button type="button" class="btn btn-light">Middle</button>
                  <button type="button" class="btn btn-light">Right</button>
                </div>
                <div
                  class="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" class="btn btn-danger">Left</button>
                  <button type="button" class="btn btn-danger">Middle</button>
                  <button type="button" class="btn btn-danger">Right</button>
                </div>
              
            </div>

            <div class="d-flex flex-wrap gap-3 align-items-center mt-3">
              <div
                class="btn-group btn-group-lg"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-outline-primary">
                  Left
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Middle
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Right
                </button>
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary">
                  Left
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  Middle
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  Right
                </button>
              </div>
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-outline-danger">
                  Left
                </button>
                <button type="button" class="btn btn-outline-danger">
                  Middle
                </button>
                <button type="button" class="btn btn-outline-danger">
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Vertical variation</h4>
            <p class="card-title-desc">
              Make a set of buttons appear vertically stacked rather than
              horizontally. Split button dropdowns are not supported here.
            </p>
            <div class="d-flex flex-wrap gap-3 align-items-center">
              <b-button-group vertical>
                <b-button variant="light">Button</b-button>
                <b-dropdown variant="light">
                  <template slot="button-content">
                    Dropdown
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item>Dropdown Link</b-dropdown-item>
                  <b-dropdown-item>Dropdown Link</b-dropdown-item>
                </b-dropdown>
                <b-button variant="light">Button</b-button>
              </b-button-group>

              <div
                class="btn-group-vertical"
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  autocomplete="off"
                  checked=""
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio1"
                  >Radio 1</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio2"
                  >Radio 2</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio3"
                  >Radio 3</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
</div>
</template>
