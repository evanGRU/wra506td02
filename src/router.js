import { createRouter, createWebHistory } from 'vue-router';

import Login from "./views/auth/Login.vue";
import HomePage from "./views/HomePage.vue";
import MovieListPage from "./views/movie/MovieListPage.vue";
import ActorListPage from "./views/actor/ActorListPage.vue";
import CategoryListPage from "./views/category/CategoryListPage.vue";
import MovieDetailPage from "./views/movie/MovieDetailPage.vue";
import ActorDetailPage from "./views/actor/ActorDetailPage.vue";
import AddMovie from "./views/movie/AddMovie.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/movie/list',
            name: 'movieList',
            component: MovieListPage
        },
        {
            path: '/add/movie',
            name: 'addMovie',
            component: AddMovie
        },
        {
            path: '/movie/:id',
            name: 'movieDetail',
            component: MovieDetailPage,
        },
        {
            path: '/actor/list',
            name: 'actorList',
            component: ActorListPage
        },
        {
            path: '/actor/:id',
            name: 'actorDetail',
            component: ActorDetailPage
        },
        {
            path: '/category/list',
            name: 'categoryList',
            component: CategoryListPage
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

export default router;