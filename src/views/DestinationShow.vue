<template>
   <div class="home" v-if="destination">
        <h1>{{destination.name}}</h1>
        <section class="destinations">

                <div class="destination-details">
                    <img :src="`/images/${destination.image}`" :alt="destination.name">

                    <p>{{destination.description}}</p>
                </div>
        </section>
            
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>

            <div class="cards">
                <ExperienceCard 
                    v-for="experience in destination.experiences"

                    :key="experience.slug"
                    :experience="experience"
                    />
            </div>     
        </section>
    </div>     
</template>

<script>
import sourceData from '@/data.json'
import ExperienceCard from '../components/ExperienceCard.vue'

export default {
  components: { ExperienceCard },
    name: 'destination',
    data(){
        return{
            destination: null
        }
    },
    methods: {
        async initData (){
              const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
            this.destination = await response.json()

            console.log(response);
        }
    },


    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },

        // destination(){
        //     return sourceData.destinations.find(destination => destination.id === this.destinationId)
        // } esto era porque tenia un archivo json local, pero la realidad es que casi nunca sera asi, los datos seran recogidos desde una base de datos
    },

     async created(){
         this.initData()
         this.$watch( () => this.$route.params, this.initData)
    }
}

</script>



