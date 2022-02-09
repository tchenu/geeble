<script>
import vue2Dropzone from "vue2-dropzone";
import Multiselect from "vue-multiselect";

import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

/**
 * Add-product component
 */
export default {
    components: {
        vueDropzone: vue2Dropzone,
        Multiselect,
    },
    head() {
        return {
            title: `${this.title} | Geebl`,
        };
    },
    data() {
        return {
            title: "Add Product",
            items: [{
                    text: "Ecommerce",
                },
                {
                    text: "Add Product",
                    active: true,
                },
            ],
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: {
                    "My-Awesome-Header": "header value",
                },
            },
            value1: null,
            options: [
                "High Quality",
                "Leather",
                "Notifications",
                "Sizes",
                "Different Color",
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
        <div class="col-lg-12">
            <div id="addproduct-accordion" class="custom-accordion">
                <div class="card">
                    <a href="javascript: void(0);" class="text-dark" data-toggle="collapse" aria-expanded="true" aria-controls="addproduct-billinginfo-collapse" v-b-toggle.accordion-1>
                        <div class="p-4">
                            <div class="media align-items-center">
                                <div class="me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle bg-soft-primary text-primary">01</div>
                                    </div>
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h5 class="font-size-16 mb-1">Billing Info</h5>
                                    <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                </div>
                                <i class="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                            </div>
                        </div>
                    </a>

                    <b-collapse data-parent="#addproduct-accordion" id="accordion-1" visible accordion="my-accordion">
                        <div class="p-4 border-top">
                            <form>
                                <div class="mb-3">
                                    <label for="productname">Product Name</label>
                                    <input id="productname" name="productname" type="text" class="form-control" />
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="mb-3">
                                            <label for="manufacturername">Manufacturer Name</label>
                                            <input id="manufacturername" name="manufacturername" type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="mb-3">
                                            <label for="manufacturerbrand">Manufacturer Brand</label>
                                            <input id="manufacturerbrand" name="manufacturerbrand" type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="mb-3">
                                            <label for="price">Price</label>
                                            <input id="price" name="price" type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="control-label">Category</label>
                                            <select class="form-control select2">
                                                <option>Select</option>
                                                <option value="EL">Electronic</option>
                                                <option value="FA">Fashion</option>
                                                <option value="FI">Fitness</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="control-label">Specifications</label>
                                            <multiselect v-model="value1" :options="options" :multiple="true"></multiselect>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="productdesc">Product Description</label>
                                    <textarea class="form-control" id="productdesc" rows="4"></textarea>
                                </div>
                            </form>
                        </div>
                    </b-collapse>
                </div>

                <div class="card">
                    <a href="javascript: void(0);" class="text-dark collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="addproduct-img-collapse" v-b-toggle.accordion-2>
                        <div class="p-4">
                            <div class="media align-items-center">
                                <div class="me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle bg-soft-primary text-primary">02</div>
                                    </div>
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h5 class="font-size-16 mb-1">Product Image</h5>
                                    <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                </div>
                                <i class="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                            </div>
                        </div>
                    </a>

                    <b-collapse id="accordion-2" accordion="my-accordion" data-parent="#addproduct-accordion">
                        <div class="p-4 border-top">
                            <vue-dropzone id="dropzone" ref="myVueDropzone" :use-custom-slot="true" :options="dropzoneOptions">
                                <div class="dropzone-custom-content">
                                    <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                                    <h4>Drop files here or click to upload.</h4>
                                </div>
                            </vue-dropzone>
                        </div>
                    </b-collapse>
                </div>

                <div class="card">
                    <a href="javascript: void(0);" class="text-dark collapsed" v-b-toggle.accordion-3>
                        <div class="p-4">
                            <div class="media align-items-center">
                                <div class="me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle bg-soft-primary text-primary">03</div>
                                    </div>
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h5 class="font-size-16 mb-1">Meta Data</h5>
                                    <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                </div>
                                <i class="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                            </div>
                        </div>
                    </a>

                    <b-collapse id="accordion-3" accordion="my-accordion" data-parent="#addproduct-accordion">
                        <div class="p-4 border-top">
                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label for="metatitle">Meta title</label>
                                            <input id="metatitle" name="metatitle" type="text" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label for="metakeywords">Meta Keywords</label>
                                            <input id="metakeywords" name="metakeywords" type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3 mb-0">
                                    <label for="metadescription">Meta Description</label>
                                    <textarea class="form-control" id="metadescription" rows="4"></textarea>
                                </div>
                            </form>
                        </div>
                    </b-collapse>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
