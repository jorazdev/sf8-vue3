import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import "../../styles/app.css";

const app = createApp(App);

app.use(router).use(createPinia()).mount("#app");
