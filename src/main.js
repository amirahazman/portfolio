import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// custom component
import ProjectCard from "@/components/ProjectCard.vue";

library.add(faMapLocation, faEnvelope, faPhone);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("project-card", ProjectCard);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
