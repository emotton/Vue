import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import messages from "./i18n/messages";

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // set locale
  messages, // set locale messages
});

new Vue({
  render: (h) => h(App),
  i18n,
}).$mount("#app");
