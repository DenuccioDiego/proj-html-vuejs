<template>
     <div class="col-8">
          <div class="text-end">

               <span class="px-3" v-for="(item, index) in link" :key="item[index]"><a href=""> {{item}} </a></span>
               
               <span class="px-3 align-middle">
                    <a href=""><font-awesome-icon class="fs-3 ps-2 " :icon="['fab', 'linkedin']" /></a>
                    <a href=""><font-awesome-icon class="fs-3 ps-2" :icon="['fab', 'instagram']" /></a>
                    <a href=""><font-awesome-icon class="fs-3 ps-2" :icon="['fab', 'facebook']" /></a>
                    <a href=""><font-awesome-icon class="fs-3 ps-2" :icon="['fab', 'twitter']" /></a>
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

a:hover{
     color: var(--buttercup);
}

</style>