import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

// import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  // You can set your default options here
};

// Vue.use(BootstrapVue);
createApp(App).use(Toast, options).use(store).use(router).mount("#app");
