<template>
     <div id="bg_image">

          <div class="container">
               <div class="row gx-0 mx-2 ">

                    <div class="col d-flex "
                    v-for="oneInfo in info" :key="oneInfo.text"
                    > 
                         <font-awesome-icon class="col text-white  h_80" :icon="['fa', oneInfo.img]" />
                         <div class="col align-self-end">
                              <p class="counter fs-1">{{oneInfo.count}}</p>
                              <p class="text-white fs-5">{{oneInfo.text}}</p>
                         </div>
                         
                    </div>

               </div>

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
     background-image: url("../assets/images/counter-1919x1101.jpg");
     background-repeat: no-repeat;
     background-position: top;
     background-size: cover;
     min-height: 55vh;
}

.counter{
     color: var(--fuelYellow);
     font-weight: 700;
}

.row{
     padding-top: 15rem;

}

p{
     line-height: 20px;
}

.h_80{
     height: 80px;
}

</style>
