import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import BaseFormContainer from "./components/UI/BaseFormContainer.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";

// adding font-awesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCoffee);

const app = createApp(App);

app.use(router);
app.use(store);

app.component("fa", FontAwesomeIcon);
app.component("form-container", BaseFormContainer);
app.component("base-container", BaseContainer);

app.mount("#app");
