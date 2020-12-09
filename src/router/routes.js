import DashboardLayout from "@/layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Recruiters = () => import(/* webpackChunkName: "common" */ "@/pages/Recruiters.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/trending",
    children: [
      {
        path: "trending",
        name: "Trending Skills",
        component: Dashboard
      },
      {
        path: "recruiters",
        name: "Skilled Based Search for Recruiters",
        component: Recruiters
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
