import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// adding font-awesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCoffee);

const app = createApp(App);

app.use(router);

app.component("fa", FontAwesomeIcon);

app.mount("#app");
