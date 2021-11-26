<template>

  <div class="bg_NewCourses mt-5">
    <h2 class="fw-bolder text-center">NewCourses</h2>
    <div class="container">
      <div class="row">
        <div v-for="card in cards" :key="card.title">
          <img :src="require('../assets/images/'+card.img)"> 
          {{card.title}}
          {{card.genere}}
          {{card.level}}
          {{card.lectures}}
          {{card.lastLectures}}
        </div>
        
        
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
          img : "photo-1496307042754-b4aa456c4a2d-370x200.jpeg",
          title :"How to be a DJ? Make Electronic Music",
          genere : "Eletronic",
          level : "Adavanced",
          lectures : "8",
          lastLectures : "6",
        },
        {
          img : "12345-1-370x200.png",
          title :"Nvidia and UE4 Technologies Practice",
          genere : "Nvidia",
          level : "Adavanced",
          lectures : "8",
          lastLectures : "6",
        },
        {
          img : "photo-1491897554428-130a60dd4757-370x200.jpeg",
          title :"Fashion Photography from professional",
          genere : "Fashion",
          level : "Adavanced",
          lectures : "6",
          lastLectures : "6",
        },
        {
          img : "photo-1416339134316-0e91dc9ded92-370x200.jpeg",
          title :"Design Instruments for Communication",
          genere : "Communication",
          level : "Adavanced",
          lectures : "6",
          lastLectures : "6",
        },
        {
          img : "cathryn-lavery-67852-unsplash-370x200.jpg",
          title :"Make your Concept Right and Beautiful",
          genere : "Art",
          level : "Adavanced",
          lectures : "5",
          lastLectures : "6",
        },
        {
          img : "photo-1475452779376-caebfb988090-370x200.jpeg",
          title :"Road Bike Manual or How to Be a Champion.",
          genere : "Bicycling",
          level : "Adavanced",
          lectures : "6",
          lastLectures : "6",
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
.immagine{
  width: 100px;
  height: 100px;
}

</style>