import Vue from "vue";
import Router from "vue-router";
import Posts from "@/components/Posts";
import Edit from "@/components/Edit";
import Create from "@/components/Create";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Posts",
      component: Posts
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    },
    {
      path: "/edit/:id",
      name: "Edit",
      component: Edit
    }
  ]
});
