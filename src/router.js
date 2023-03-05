import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/productos",
      name: "productos",
      component: () => import("./components/ProductsList")
    },
    {
      path: "/productos/:id",
      name: "tutorial-details",
      component: () => import("./components/Product")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddProduct")
    }
  ]
});
