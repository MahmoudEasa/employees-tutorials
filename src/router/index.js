import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeePage from "../views/EmployeePage.vue";
import EmployeeList from "../views/EmployeeList.vue";
import AddEmployee from "../views/AddEmployee.vue";
import EditEmployee from "../views/EditEmployee.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/employeeList",
    name: "EmployeeList",
    component: EmployeeList,
  },
  {
    path: "/employee/:id",
    name: "Employee",
    component: EmployeePage,
  },
  {
    path: "/addEmployee",
    name: "AddEmployee",
    component: AddEmployee,
  },
  {
    path: "/employeeList/:id",
    name: "EditEmployee",
    component: EditEmployee,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
