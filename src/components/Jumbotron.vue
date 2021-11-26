<template>
  <div id="jumbotron" class="row gx-0 align-items-center position-relative" >

    <div class="col-6">
    </div>

    <div class="col-6 pb-5">
      <h1 class="">Start your Human <br> <span class="color_title">Revolution</span> today</h1>
      <span class="fs-5">A wonderful serenity has taken possession of my entire soul, like <br> these sweet mornings of spring which I enjoy with my whole heart.</span>
    </div>

    <div class="position-absolute top_80 start-50 translate-middle-x w-75 color_buttercup rounded-3">
      <div class="p-5 row gx-0">

        <div class="col-6">
          <h2 class="pb-3 fw-bolder"><span class="text-white">Limited Sale:</span> All courses with 55% off</h2> 
          <div class="position-relative">
            <input class="px-4 border-0" type="email" id="email" pattern=".+@.com" size="60" required placeholder="Enter your E-mail">
            <button class="position-absolute top-50  translate-middle btn">SUBSCRIBE</button>
          </div>
          

        </div>
        
        <div class="col-6">
          <!-- use this format date example:"Jan 5, 2022 15:37:25"-->
          <Countdown deadline="Jan 5, 2022 15:37:25"></Countdown> 
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Countdown from "./Countdown.vue"

export default {
  components: { 
    Countdown
  }

  

}
</script>


<style scoped lang="scss">


#jumbotron{
  background-image: url("../assets/images/slide-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 82.5vh;
}

h1{
  font-size: 4.5rem;
  font-weight: 700;
}

.color_buttercup{
  background-color: var(--buttercup)  ;
  min-height: 20vh;
}

.color_title{
  color: var(--buttercup)
}

input{
  line-height: 60px;
  border-radius: 50px;
  
}

button{
  background-color: var(--buttongrey);
  border-color: var(--buttongrey);
  padding: 18px;
  width: 22%;
  border-radius: 40px;
  font-weight: 600;
  color: white;
}

.top_80{
  top:80%;
}
</style>