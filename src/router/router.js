import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/pages/home/index.vue";
import AboutView from "@/pages/about/index.vue";
import ContactView from "@/pages/contact/index.vue";
import ManagementView from "@/pages/management/index.vue";
import AffiliationView from "@/pages/affliation/index.vue";
import BlogView from "@/pages/blogs/index.vue";
import RegView from "@/pages/registrar/index.vue"
import StaffDetails from "@/pages/management/staffDetails.vue";
// import LoginView from "@/pages/login/index.vue";
// import ResultView from "@/pages/result/index.vue"
const routes = [
  { path: "/", component: HomeView, name: "Home", meta: { title: "HOME" } },
  {
    path: "/about",
    component: AboutView,
    name: "About",
    meta: { title: "ABOUT" },
  },
  {
    path: "/contact",
    component: ContactView,
    name: "Contact",
    meta: { title: "CONTACT US" },
  },
  {
    path: "/management",
    component: ManagementView,
    name: "Management",
    meta: { title: "MANAGEMENT" },
  },
  {
    path: "/affiliations",
    component: AffiliationView,
    name: "Aff",
    meta: { title: "AFFILIATIONS" },
  },
  { path: "/blogs", 
    component: BlogView, 
    name: "Blog", 
    meta: { title: "BLOG" } 
  },
  {
    path: "/reg",
    component: RegView,
    name:"Reg",
    meta: {title:"REGISTRAR"}
  },
  {
  path: "/staff/:id",
  name: "StaffDetails",
  component: StaffDetails,
  meta: {title:"STAFF DETAILS"},
  props: true,
}

  // {
  //   path: "/login",
  //   component: LoginView,
  //   name: "Login",
  //   meta: { title: "LOGIN" },
  // },
  // {
  //   path: "/result",
  //   component: ResultView,
  //   name:"Result",
  //   meta:{title:"RESULT"}
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" }; // Ensures smooth scrolling to top
  },
});

router.beforeEach((to, from, next) => {
  const defaultTitle = "Uthman Bin Affan College Home";
  document.title = to.meta.title || defaultTitle;
  next();
});

export default router;
