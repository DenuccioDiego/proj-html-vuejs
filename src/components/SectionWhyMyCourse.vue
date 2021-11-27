<template>
     <div class="pt-5 mt-5">
          <h2 class="text-center fw-bold fs-1 my-4">Why my Courses?</h2>

          <div class="container">
               <div class="d-flex flex-wrap justify-content-center  ">

                    <div class="col-5 m-3 border_left p-5 d-flex"
                    v-for="benefit in benefits" :key="benefit.title"
                    >

                    <font-awesome-icon class="fs-1  align-sub color_buttercup" :icon="['fas', benefit.img]" /> 

                    <div class=" ps-4">
                         <h4>{{benefit.title}}</h4>
                         <p class="text-muted">{{benefit.text}}</p>
                    </div>     
                         
                    
                    </div>
               </div>
          </div>

     </div>
</template>

<script>


export default{
     props:{
          benefits:Array,
     }
          
     
}
</script>

<style scoped lang="scss">


.color_buttercup{
     color: var(--buttercup);
}
h3{
     font-weight: 700;
}
.border_left{
     border-left: var(--buttercup) 6px solid;
      box-shadow: 0 6px 20px 0 rgb(0 0 0 / 14%)
}

.col-5:hover{
     background-color: var(--buttercup);
}


.col-5:hover .color_buttercup{
     color: white;
}

.col-5:hover p{
     color: black !important;
}
</style>
