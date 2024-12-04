import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Error404 from '@/views/Error404View.vue';
import Login from '@/views/LoginView.vue';
import Pedidos from '@/views/PedidosView.vue';
import Leitos from '@/views/LeitosView.vue';
import Users from '@/views/UsersView.vue';
import User from '@/views/UserView.vue';
import AuthCallback from '@/views/AuthCallback.vue';
import BedRequestsView from '@/views/BedRequestsView.vue';
import BedsView from '@/views/BedsView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/home', name: 'HomeAlt', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: Login, meta: { hideMenu: true } },
  { path: '/pedidos', name: 'Pedidos', component: Pedidos, meta: { requiresAuth: true } },
  { path: '/leitos', name: 'Leitos', component: Leitos, meta: { requiresAuth: true } },
  { path: '/users', name: 'Users', component: Users, meta: { requiresAuth: true } },
  { path: '/callback', component: AuthCallback },
  { path: '/404', name: 'Error 404', component: Error404, meta: { hideMenu: true } },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
  { path: '/user/:id', name: 'User', component: User, meta: { requiresAuth: true } },
  { path: '/new-user', name: 'NewUser', component: User, meta: { requiresAuth: true } },
  { path: '/bed-requests', name: 'BedRequestsView', component: BedRequestsView, meta: { requiresAuth: true }},
  { path: '/beds', name: 'BedsView', component: BedsView, meta: { requiresAuth: true }},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');

  // console.log('Is authenticated?', isAuthenticated);
  // console.log('Route:', to.name);
  // console.log('Route requires auth?', to.matched.some(record => record.meta.requiresAuth));

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});


export default router;