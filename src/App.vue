<script >
import sourceData from '@/data.json'
import { RouterLink, RouterView } from 'vue-router'

export  default {
    data(){
        return{
            destinations: sourceData.destinations
        }
    },
   
}

</script>

<template>


      <nav id="nav">
        <RouterLink to="/">Home</RouterLink>

        <div class="left-navbar"> 
          <RouterLink 
              v-for="destination in destinations" 
              :key="destination.id"
              :to="{ name: 'destination.show', params: {id: destination.id, slug: destination.slug }}"
              >
              {{destination.name}}
        </RouterLink>
      </div> 

      </nav>
   
  <routerView v-slot="{Component}" >

   <transition name="slide" mode="out-in">
     <component :is="Component" :key="$route.path"></component>
   </transition>

  </routerView>


</template>

<style scoped>
 .slide-enter-active,
.slide-leave-active{
  transition: opacity 0.5s, transform .3s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-50%);
} 


</style>



