<template>
     <div>
          <h2 class="text-center pt-5 pb-4">What Students Say</h2>
          <div class="container">
               <div class="text-center">
                    <font-awesome-icon v-on:click="decrement()" class="fs-1 " :icon="['fas', 'arrow-left']" /> 

                    <img v-for="(studentImage, index) in students" :key="students[index]"
                    :src="require('../assets/images/'+studentImage.img)" alt=""
                    :class="(counter == index) ? 'grande' : ''"
                    class="rounded-circle col"
                    >

                    <font-awesome-icon v-on:click="increment()" class="fs-1" :icon="['fas', 'arrow-right']" /> 
               </div>
               <div v-show="counter == index" class="text-center" v-for="(student, index) in students" :key="students[index]">
                    <h6>{{student.title}}</h6>
                    <p> {{student.text}} </p>
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
                         text : " MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.",
                    },
                    {    
                         img : "2-100x100.jpg",
                         title: "Paints of the Future",
                         text : " The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.”",
                    },
                    {    
                         img : "4-100x100.jpg",
                         title: "Investing for Your Future",
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

 .grande{
     width: 10%;
 }

</style>
