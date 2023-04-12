import { createRouter, createWebHistory } from 'vue-router';

import NewsPage from './pages/NewsPage.vue';
import NewestPosts from './pages/NewestPosts.vue';
import PastPosts from './pages/PastPosts.vue';
import CommentsPage from './pages/CommentsPage.vue';
import AskPage from './pages/AskPage.vue';
import Showpage from './pages/ShowPage.vue';
import JobsAvailable from './pages/JobsAvailable.vue';
import SubmitPage from './pages/SubmitPage.vue';
import LoginPage from './pages/LoginPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        // TODO: need a dynamic route to each article 
      { path: '/', redirect: '/news' },
      { path: '/news', component: NewsPage },
      { path: '/newest', component: NewestPosts },
      { path: '/front', component: PastPosts },
      { path: '/comments', component: CommentsPage },
      { path: '/ask', component: AskPage },
      { path: '/show', component: Showpage },
      { path: '/jobs', component: JobsAvailable },
      { path: '/submit', component: SubmitPage },
      { path: '/login', component: LoginPage },


    ]
  });
  
  export default router;