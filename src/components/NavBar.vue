<template>
     <div class="col-8">
          <div class="text-end">
               
               <span class="px-3" v-for="(item, index) in link" :key="item[index]"><a href=""> {{item}} </a></span>
               
               <span class="px-3 align-middle">
                    <font-awesome-icon class="fs-3 ps-2 " :icon="['fab', 'linkedin']" />
                    <font-awesome-icon class="fs-3 ps-2" :icon="['fab', 'instagram']" />
                    <font-awesome-icon class="fs-3 ps-2" :icon="['fab', 'facebook']" />
                    <font-awesome-icon class="fs-3 ps-2" :icon="['fab', 'twitter']" />
               </span>

          </div>
     
     </div>
</template>

<script>
export default {
  props:{
     link : Array,
  },



}
</script>


<style scoped lang="scss">

a{
     text-decoration: none;
     color: black; 
}

span{
     font-weight: 700;
     font-size: 1.25rem;
}

</style>