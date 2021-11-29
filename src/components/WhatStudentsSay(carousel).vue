<template>
     <div>

          <h2 class="text-center pt-5 pb-4 fw-bolder fs-1">What Students Say</h2>

          <div class="container pt-4 pb-5">

               <div class="text-center d-flex justify-content-center">
                    <div v-on:click="decrement()" class="fs-1 mx-5 long-arrow-left col-3"></div>

                    <div class="col-6">
                         <img v-for="(studentImage, index) in students" :key="students[index]"
                         :src="require('../assets/images/'+studentImage.img)" alt=""
                         :class="(counter == index) ? 'selection' : ''"
                         class="rounded-circle  px-3"
                         >
                    </div>
                    
                    <div v-on:click="increment()" class="fs-1 mx-5 long-arrow-right col-3"></div>
               </div>

               <div v-show="counter == index" class="pt-3" v-for="(student, index) in students" :key="students[index]">

                    <h5 class="text-center fw-bolder">{{student.title}}</h5>

                    <div class="text-center">
                         <font-awesome-icon v-for="indexStar in (student.rating)" :key="indexStar" class="star" :icon="['fas', 'star']" /> 
                    </div>
                    
                    <p class="w-50 mx-auto text-center pt-3 lh-lg"> {{student.text}} </p>
               </div>

          </div>

     </div>
</template>

<script>


export default{
     data(){
          return{
               students:[
                    {    
                         img : "1-100x100.jpg",
                         title: "Come as you care",
                         rating : 5,
                         text : " MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.",
                    },
                    {    
                         img : "2-100x100.jpg",
                         title: "Paints of the Future",
                         rating : 5,
                         text : " The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.”",
                    },
                    {    
                         img : "4-100x100.jpg",
                         title: "Investing for Your Future",
                         rating : 5,
                         text : " It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life. Thanks again…. I am feeling energized and eager to start teaching my class next week. I can’t wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!",
                    },
               ],

               counter : 1 ,
          }
     },
     
     methods:{
          increment() {
               
               if(this.counter <= 1) {
                    this.counter += 1;

               }
               else{
                    this.counter = 0
               }
               
          },

          decrement() {
               
               if(this.counter >= 1 ){
                    this.counter -= 1;
               }
               else{
                    this.counter = 2
               }

          }
     }

}
</script>

<style scoped lang="scss">



img{
     width: 15%;
}

.star{
     color: var(--starColor);

}

.selection{
     width: 20%;
}

.long-arrow-right,
.long-arrow-left{
  display: block;
  margin: 30px auto;
  width: 25px;
  height: 25px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
}

.long-arrow-right{
 transform: rotate(135deg);
}


.long-arrow-left{
 transform: rotate(-45deg);
}

.long-arrow-right::after,
.long-arrow-left::after{
  content: "";
  display: block;
  width: 2px;
  height: 45px;
  background-color: black;
  transform: rotate(-45deg) translate(15px, 4px);
  left: 0;
  top: 0;
}

.long-arrow-left:hover,
.long-arrow-right:hover{
     cursor: pointer;
}

</style>
