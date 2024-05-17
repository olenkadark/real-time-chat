import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import ChatRoom from '../components/ChatRoom.vue';
import {onAuthStateChanged} from '@/firebase';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/chat', name: 'ChatRoom', component: ChatRoom, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    onAuthStateChanged( (user) => {
        if (requiresAuth && !user) {
            next('/login'); // Redirect to login if not authenticated and trying to access a restricted route
        } else if ((to.path === '/login' || to.path === '/signup') && user) {
            next('/chat'); // Redirect to chat if already logged in and trying to access login or signup
        } else {
            next(); // Proceed normally if the authentication state meets the route requirements
        }
    });
});


export default router;