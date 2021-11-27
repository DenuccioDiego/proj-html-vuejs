<template>
  <div class="col-4">

    <img :src="require('../assets/images/'+logo)" >  
    
  </div>
</template>

<script>
export default {
  props:{
    logo:String,
  }
}
</script>


<style scoped lang="scss">

</style>
