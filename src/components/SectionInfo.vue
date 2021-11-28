<template>
     <div id="bg_image">
          <div class=""
          v-for="oneInfo in info" :key="oneInfo.text"
          >    
               <span>{{oneInfo.count}}</span>
               <span class="text-white">{{oneInfo.text}}</span>
               
               <font-awesome-icon class="fs-1 text-white  align-sub color_buttercup" :icon="['fa', oneInfo.img]" />
          </div>
          

     </div>
</template>

<script>


export default{
    data(){
         return{
               info : [
                    {
                         text : "Online Learner",
                         count : "7500",
                         img : "user-friends",
                    },
                    {
                         text : "Video Courses",
                         count : "55",
                         img : "film",
                    },
                    {
                         text : "Sliders & Images",
                         count : "1025",
                         img : "images",
                    },
                    {
                         text : "Excellent Reviews",
                         count : "3380",
                         img : "thumbs-up",
                    },
               ]
         }
    }
          
    
}
</script>

<style scoped lang="scss">
#bg_image{
     margin-top: 60px;
     background-image: url("../assets/images/slider_1-1917x607-1914x606.jpg");
     background-repeat: no-repeat;
     background-size: cover;
     min-height: 40vh;
}

</style>
