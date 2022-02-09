<script>
/**
 * Modals component
 */
export default {
    head() {
        return {
            title: `${this.title} | Geebl`
        };
    },
    data() {
        return {
            title: "Modals",
            items: [{
                    text: "UI Elements"
                },
                {
                    text: "Modals",
                    active: true
                }
            ]
        };
    },
    middleware: "authentication"
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Modals Examples</h4>
                    <p class="card-title-desc">
                        Modals are streamlined, but flexible dialog prompts powered by
                        JavaScript. They support a number of use cases from user
                        notification to completely custom content and feature a handful of
                        helpful subcomponents, sizes, and more.
                    </p>
                    <div class="modal bs-example-modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>One fine body&hellip;</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">
                                        Save changes
                                    </button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>
                    <!-- /.modal -->

                    <div>
                        <h4 class="card-title">Default Modal</h4>
                        <p class="card-title-desc">
                            Toggle a working modal demo by clicking the button below. It
                            will slide down and fade in from the top of the page.
                        </p>
                        <button type="button" class="btn btn-primary" v-b-modal.modal-standard>
                            Standard modal
                        </button>
                        <b-modal id="modal-standard" title="Modal Heading" title-class="font-18">
                            <h5>Overflowing text to show scroll behavior</h5>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo
                                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.
                            </p>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur et. Vivamus sagittis lacus vel augue laoreet
                                rutrum faucibus dolor auctor.
                            </p>
                            <p>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent
                                commodo cursus magna, vel scelerisque nisl consectetur et.
                                Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                fringilla.
                            </p>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo
                                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.
                            </p>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur et. Vivamus sagittis lacus vel augue laoreet
                                rutrum faucibus dolor auctor.
                            </p>
                            <p>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent
                                commodo cursus magna, vel scelerisque nisl consectetur et.
                                Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                fringilla.
                            </p>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo
                                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.
                            </p>
                        </b-modal>
                    </div>

                    <div class="mt-5">
                        <h4 class="card-title">Optional sizes</h4>
                        <p class="card-title-desc">
                            Modals have three optional sizes, available via modifier classes
                            to be placed on a <code>.modal-dialog</code>.
                        </p>
                        <div class="button-items">
                            <!-- Extra Large modal -->
                            <button type="button" class="btn btn-primary waves-effect waves-light" v-b-modal.modal-xl>
                                Extra large modal
                            </button>
                            <b-modal id="modal-xl" size="xl" title="Extra large modal" title-class="font-18" hide-footer>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.
                                </p>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl
                                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                                    rutrum faucibus dolor auctor.
                                </p>
                                <p class="mb-0">
                                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                                    commodo cursus magna, vel scelerisque nisl consectetur et.
                                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                    fringilla.
                                </p>
                            </b-modal>
                            <!-- Large modal -->
                            <button type="button" class="btn btn-success waves-effect waves-light" v-b-modal.modal-lg>
                                Large modal
                            </button>
                            <b-modal id="modal-lg" size="lg" title="Large modal" title-class="font-18" hide-footer>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.
                                </p>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl
                                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                                    rutrum faucibus dolor auctor.
                                </p>
                                <p class="mb-0">
                                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                                    commodo cursus magna, vel scelerisque nisl consectetur et.
                                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                    fringilla.
                                </p>
                            </b-modal>
                            <!-- Small modal -->
                            <button type="button" class="btn btn-danger waves-effect waves-light" v-b-modal.modal-sm>
                                Small modal
                            </button>
                            <b-modal id="modal-sm" size="sm" title="Small modal" title-class="font-18" hide-footer>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.
                                </p>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl
                                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                                    rutrum faucibus dolor auctor.
                                </p>
                                <p class="mb-0">
                                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                                    commodo cursus magna, vel scelerisque nisl consectetur et.
                                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                    fringilla.
                                </p>
                            </b-modal>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="row">
                            <div class="col-xl-4 col-md-6">
                                <div class="mt-4">
                                    <h5 class="card-title">Vertically centered</h5>
                                    <p class="card-title-desc">
                                        Add <code>.modal-dialog-centered</code> to
                                        <code>.modal-dialog</code> to vertically center the modal.
                                    </p>
                                </div>
                                <button type="button" v-b-modal.modal-center class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-center">
                                    Center modal
                                </button>
                                <b-modal id="modal-center" centered title="Center modal" title-class="font-18" hide-footer>
                                    <p>
                                        Cras mattis consectetur purus sit amet fermentum. Cras
                                        justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                                        eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                                        rutrum faucibus dolor auctor.
                                    </p>
                                    <p class="mb-0">
                                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Donec sed odio dui. Donec ullamcorper nulla non metus
                                        auctor fringilla.
                                    </p>
                                </b-modal>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="mt-4">
                                    <h5 class="card-title">Scrollable modal</h5>
                                    <p class="card-title-desc">
                                        You can also create a scrollable modal that allows scroll
                                        the modal body by adding
                                        <code>.modal-dialog-scrollable</code> to
                                        <code>.modal-dialog</code>.
                                    </p>
                                    <button type="button" v-b-modal.modal-scrollable class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#exampleModalScrollable">
                                        Scrollable modal
                                    </button>
                                    <b-modal id="modal-scrollable" scrollable title="Scrollable Modal" title-class="font-18">
                                        <p v-for="i in 15" :key="i">
                                            Cras mattis consectetur purus sit amet fermentum. Cras
                                            justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                                            eros.
                                        </p>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
