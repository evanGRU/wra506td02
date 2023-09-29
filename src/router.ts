import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "./views/HomePage.vue";
import MovieListPage from "./views/movie/MovieListPage.vue";
import ActorListPage from "./views/ActorListPage.vue";
import CategoryListPage from "./views/CategoryListPage.vue";
import MovieDetailPage from "./views/movie/MovieDetailPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/api/movie/list',
            component: MovieListPage
        },
        {
            path: '/api/movie/:id',
            component: MovieDetailPage,
            props: {
                movie: Object
            }
        },
        {
            path: '/api/actor/list',
            component: ActorListPage
        },
        {
            path: '/api/category/list',
            component: CategoryListPage
        }
    ]
})

export default router;