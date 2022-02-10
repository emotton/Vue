import Vue from 'vue'
import App from './App.vue'
import VueQuillEditor from 'vue-quill-editor'

Vue.config.productionTip = false

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

new Vue({
  VueQuillEditor,
  render: h => h(App),
}).$mount('#app')
