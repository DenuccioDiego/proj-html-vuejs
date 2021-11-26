<template>
     
     <div class="row fs_3rem text-center text-white font fw-bold gx_negative">
          <div class="col-3 " id="days"></div>
          <div class="col-3 " id="hours"></div>
          <div class="col-3 " id="minutes"></div>
          <div class="col-3 " id="seconds"></div>
     </div>

</template>

<script>


export default{

     props:{
          deadline : {
               type: String
          }
     },

     methods:{

          timer(){
               var dealinevalor = this.deadline
               // Set the date we're counting down to
               var countDownDate = new Date(dealinevalor).getTime();
               
               // Update the count down every 1 second
               var x = setInterval(function() {

                    // Get today's date and time
                    var now = new Date().getTime();
    
                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;
    
                     // Time calculations for days, hours, minutes and seconds

                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
                    // Output the result in an element with id="demo"

                    document.getElementById("days").innerHTML = days+ "<div class='fs-5 text-body'>Days</div>";
                    document.getElementById("hours").innerHTML = + hours + "<div class='fs-5 text-body'>Hours</div>";
                    document.getElementById("minutes").innerHTML = + minutes + "<div class='fs-5 text-body'>Minutes</div>";
                    document.getElementById("seconds").innerHTML = + seconds + "<div class='fs-5 text-body'>Seconds</div>";
                 

                    // If the count down is over, write some text 
                    if (distance < 0) {
                         clearInterval(x);
                         document.getElementById("demo").innerHTML = "EXPIRED";
                    }
               }, 1000);
          },
          
     },

     mounted() {
          this.timer()
               
     },



}
</script>

<style scoped lang="scss">

.fs_3rem{
     font-size: 4rem;
}

.gx_negative{
     --bs-gutter-x: -8rem;
}

</style>
