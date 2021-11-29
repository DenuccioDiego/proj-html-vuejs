<template>
     <div class="col-8">
          <div class="text-end">

               <span class="px-3" v-for="(item, index) in link" :key="item[index]"><a href=""> {{item}} </a></span>
               
               <span class="px-3 align-middle">
                    
                    <a v-for="(icon, index) in socialIcons" :key="socialIcons[index]" href="">
                         <font-awesome-icon class="fs-3 ps-2 " :icon="['fab', icon]" />
                    </a>
                    
               </span>

          </div>
     
     </div>
</template>

<script>
export default {
  props:{
     link : Array,
     socialIcons : Array,
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