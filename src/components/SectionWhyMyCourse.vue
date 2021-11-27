<template>
     <div class="pt-5 mt-5">
          <h2 class="text-center fw-bold fs-1 py-4">Why my Courses?</h2>

          <div class="container">
               <div class="row ">
                    
                    <div class="col-6 p-3"
                    v-for="benefit in benefits" :key="benefit.title"
                    >
                    {{benefit.title}}
                    {{benefit.text}}
                    <font-awesome-icon class="fs-5 ps-2 align-sub color_buttercup" :icon="['fas', benefit.img]" /> 
                    
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

</style>
