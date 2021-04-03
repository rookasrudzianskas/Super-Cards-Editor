import { createRouter, createWebHistory } from 'vue-router';
// import Admin from '../views/Admin.vue';
// import AppHome from '../views/AppHome.vue';
// import Create from '../views/Create.vue';
// import Category from '../views/Category.vue';
// import NotFound from '../views/NotFound.vue';

const Admin = () => import(/* webpackChunkName: "Admin" */'@/views/Admin.vue')
const AppHome = () => import(/* webpackChunkName: "AppHome" */'@/views/AppHome.vue')
const Create = () => import(/* webpackChunkName: "card-group" */'@/views/Create.vue')
const Category = () => import(/* webpackChunkName: "card-group" */'@/views/Category.vue')
const NotFound = () => import(/* webpackChunkName: "NotFound" */'@/views/NotFound.vue')


// const loggedIn = false;
//
// function isLoggedIn() {
//   if(!loggedIn) return false
// }
const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome,
  },
  {
    path: '/category/:category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Category,
  },
  {
    path: '/create/:id/:page',
    name: 'Create',
    component: Create,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    // beforeEnter: [isLoggedIn()],
  },
  {
    path: '/:pathName(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to) => {
//   if(to.name === 'Admin'){
//     return router.push('/')
//   }
// })

export default router;
