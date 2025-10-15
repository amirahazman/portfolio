import { createRouter, createWebHistory } from "vue-router";

// import HomeView from "@/views/HomeView-old.vue";
import Layout from "@/components/Layout.vue";
import Homepage from "@/views/Homepage.vue";
import Project from "@/views/Projects.vue";
import Skills from "@/views/Skills.vue";
import Contact from "@/views/Contact.vue";

// import Portfolio from "@/views/Portfolio.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Homepage",
        component: Homepage,
      },
      {
        path: "projects",
        name: "Projects",
        component: Project,
      },
      {
        path: "skills",
        name: "Skills",
        component: Skills,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
      // {
      //   path: "/",
      //   name: "Home",
      //   component: HomeView,
      // },
      // {
      //   path: "/portfolio",
      //   name: "Portfolio",
      //   component: Portfolio,
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
