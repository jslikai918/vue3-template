import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/test",
    component: () => import("@/views/test.vue")
  }
];

export default routes;
