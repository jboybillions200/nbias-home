import { createApp } from "vue";
// - import './style.css'
import App from "./App.vue";
import "./assets/index.css";
import router from "./router/router";
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import needed solid icons
import { faMosque, faHandshake, faSeedling, faBroom, faGlobe, faLocation, faRuler, faLeaf, faTape } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(faMosque, faHandshake, faSeedling, faBroom, faGlobe,faLocation,faRuler,faLeaf,faTape,faWhatsapp)


AOS.init({
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false,
});
// const app = createApp(App).use(router).mount("#app");

// app.component('font-awesome-icon', FontAwesomeIcon)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router) // only if using vue-router
app.mount('#app')




