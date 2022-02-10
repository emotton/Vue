<template>
  <div class="app">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "HelloWorld",
  components: {
    quillEditor,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {
        // some quill options
      },
    };
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}
</style>
