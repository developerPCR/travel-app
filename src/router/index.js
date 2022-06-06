import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {path: '/', name: 'home',component: HomeView    },

   

    
    
        { 
          path: '/:pathMatch(.*)*', 
          component: () => import(/* webpackChunkName: "error404"*/'@/helpers/error404.vue') 
        },
        
        {
          path: '/destination/:id/:slug', name:'destination.show', 
          component: () => import('../views/DestinationShow.vue'),
          children:[]
        },
    
        
    
    
    
    
      ]
    })
    
    
    



 

export default router
