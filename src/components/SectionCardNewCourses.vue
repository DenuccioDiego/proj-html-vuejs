<template>

  <div class="bg_NewCourses mt-5">
    
    <h2 class="fw-bolder text-center py-5 fs-1">New Courses</h2>
    <div class="container">
      <div class="row gx-0 justify-content-evenly row_gap_70">
        <div class="w_30 position-relative card col-3 rounded-0 border-0 border_card " v-for="card in cards" :key="card.title">
          
           
          <div class="price_hidden position-relative">
            <!-- {{card.price}} -->
            <div>
              <img class="card-img-top rounded-0" :src="require('../assets/images/'+card.img)">
            </div> 
          </div>

          

          <div class="card-body text-center">
            <h5 class="card-title py-2">{{card.title}}</h5>
            <p class="card-text"><small class="text-muted">{{card.genere}}</small></p>
            <p class="card-text row gx-0 barra_card pt-3">

              <span class="col-4">
                <font-awesome-icon class="fs-5 ps-2 align-sub color_buttercup" :icon="['fas', 'signal']" /> {{card.level}}
              </span>

              <span class="col-4" >
                <font-awesome-icon class="fs-5 ps-2 align-sub color_buttercup" :icon="['fas', 'bars']" /> {{card.lectures}} Lectures
                
              </span>

              <span class="col-4" >
                <font-awesome-icon class="fs-5 ps-2 align-sub color_buttercup" :icon="['fas', 'clock']" /> {{card.lastLectures}} hours
              </span>

            </p>
          </div>
          
          

          <div v-if="card.special" class="position-absolute position-absolute special_button rounded-2 p-1">
            <span>SPECIAL</span>
          </div>

        </div>
        
        
      </div>

      <div class="d-flex py-5">
        <button class="btn_cards text-white mx-auto">LOAD MORE</button>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  
  data(){
    return{
      cards:[
        {
          img : "photo-1496307042754-b4aa456c4a2d-740x400.jpeg",
          title :"How to be a DJ? Make Electronic Music",
          genere : "Eletronic",
          level : "Adavanced",
          lectures : "8",
          lastLectures : "6",
          special : true,
          price : "$59", 
        },
        {
          img : "12345-1-740x400.png",
          title :"Nvidia and UE4 Technologies Practice",
          genere : "Nvidia",
          level : "Adavanced",
          lectures : "8",
          lastLectures : "6",
          special : true,
          price : "$78", 
        },
        {
          img : "photo-1491897554428-130a60dd4757-740x400.jpeg",
          title :"Fashion Photography from professional",
          genere : "Fashion",
          level : "Adavanced",
          lectures : "6",
          lastLectures : "6",
          special : true,
          price : "$50", 
        },
        {
          img : "photo-1416339134316-0e91dc9ded92-740x400.jpeg",
          title :"Design Instruments for Communication",
          genere : "Communication",
          level : "Adavanced",
          lectures : "6",
          lastLectures : "6",
          special : false,
          price : "$90", 
        },
        {
          img : "cathryn-lavery-67852-unsplash-740x400.jpg",
          title :"Make your Concept Right and Beautiful",
          genere : "Art",
          level : "Adavanced",
          lectures : "5",
          lastLectures : "6",
          special : false,
          price : "$70", 
        },
        {
          img : "photo-1475452779376-caebfb988090-740x400.jpeg",
          title :"Road Bike Manual or How to Be a Champion.",
          genere : "Bicycling",
          level : "Adavanced",
          lectures : "6",
          lastLectures : "6",
          special : false,
          price : "$20", 
        },
      ],
    }

  },

  

}
</script>


<style scoped lang="scss">

.bg_NewCourses{
  background-color: var(--bgNewCourses);
}

.barra_card{
  border-top: 1px solid #e0e0e0;
}
 
.row_gap_70{
  row-gap: 45px;
  column-gap: 1px;
}

.w_30{
  width: 28%;
}

.align-sub{
  vertical-align: sub;
}

.border_card{
  border: 1px solid #e0e0e0 !important;
  border-top: none !important;
}

.color_buttercup{
  color:var(--buttercup)
}

.special_button{
  background-color: var(--bho);
  color:white;
  top: 2.5%;
  right: 2.5%;
  font-size: 0.65rem;
  font-weight: 500;
}

.btn_cards{
  position: relative;
  background-color: var(--buttercup) ;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 0.75rem 1.4rem 0.75rem 1.4rem;
}

.price_hidden{
  // background-color: var(--DoveGray);
  color: white;
  background-color: yellow;
  font-size: 2rem;
}


button:hover{
  filter: brightness(0.9);
}
</style>