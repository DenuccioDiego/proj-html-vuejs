<template>
  <div>
    
    <header class="row container mx-auto py-5 gx-0">
      <Logo
      :logo="logo"
       />
      <NavBar 
      :link="links" 
      :socialIcons="socialIcons"
      />
    </header>
    

    <main>
      <Jumbotron />
      <SectionDescription />
      <SectionCardNewCourses />
      <SectionOrderWithAmazon />
      <SectionWhyMyCourse
      :benefits="benefit" 
      />
      <SectionInfo />
      <WhatStudentsSayCarousel />
    </main>

    <footer>
      <Footer />
    </footer>
    
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import NavBar from './components/NavBar.vue'
import Jumbotron from './components/Jumbotron.vue'
import SectionDescription from './components/SectionDescription.vue'
import SectionCardNewCourses from './components/SectionCardNewCourses.vue'
import SectionOrderWithAmazon from './components/SectionOrderWithAmazon.vue'
import SectionWhyMyCourse from './components/SectionWhyMyCourse.vue'
import SectionInfo from './components/SectionInfo.vue'
import WhatStudentsSayCarousel from './components/WhatStudentsSay(carousel).vue'
import Footer from './components/Footer.vue'



export default {
  data(){
    return{
      links:[
        "Courses",
        "Courses Formats",
        "Add Course",
        "Pages",
        "Demos",
      ],
      socialIcons :[
        "linkedin",
        "instagram",
        "facebook",
        "twitter",
      ] ,

      logo:"MasterStudy-1.svg",
      benefit : [
        {
          title : "Entrepreneurship",
          text : "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
          img :  "shopping-bag",
        },
        {
          title : "Accelerated learning",
          text : "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
          img : "rocket",
        },
        {
          title : "Productivity",
          text : "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
          img : "thumbs-up",
        },
        {
          title : "Life Coaching",
          text : "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
          img : "cog",
        },
      ],

    }
  },

  components: {
    Logo,
    NavBar,
    Jumbotron,
    SectionDescription,
    SectionCardNewCourses,
    SectionOrderWithAmazon,
    SectionWhyMyCourse,
    SectionInfo,
    WhatStudentsSayCarousel,
    Footer,
    
  }
}
</script>

<style lang="scss">

@import "../node_modules/bootstrap/scss/bootstrap.scss";

:root{
  --starColor: #f2b91e;
  --fuelYellow: #eab830;
  --bho: #f09b23;
  --hoverlinks: #f9c5a3;
  // --buttercup: #f2b71d; cambio colore richiesta cliente
  --buttercup: #0d9213;
  --buttongrey: #2d4649;
  --bgNewCourses: #edf2f5;
  --DoveGray: #6b6b6b;
}


</style>
