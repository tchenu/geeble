<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

/**
 * Editor component
 */
export default {
    components: {
        ckeditor: CKEditor.component
    },
    head() {
        return {
            title: `${this.title} | Geebl`
        };
    },
    data() {
        return {
            title: "Form editor",
            items: [{
                    text: "Forms",
                    href: "/"
                },
                {
                    text: "Form editor",
                    active: true
                }
            ],
            editor: ClassicEditor,
            editorData: "<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>"
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
                    <h4 class="card-title">CK Editor</h4>
                    <p class="card-title-desc">
                        Super simple wysiwyg editor on Bootstrap
                    </p>
                    <!-- Editor -->
                    <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
