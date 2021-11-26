<template>
  <div>
    
    <header class="row container mx-auto py-5 gx-0">
      <Logo />
      <NavBar />
    </header>
    

    <main>
      <Jumbotron />
      <SectionDescription />
      <SectionCardNewCourses />

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
import Footer from './components/Footer.vue'



export default {
  

  components: {
    Logo,
    NavBar,
    Jumbotron,
    SectionDescription,
    SectionCardNewCourses,
    Footer,
    
  }
}
</script>

<style lang="scss">

@import "../node_modules/bootstrap/scss/bootstrap.scss";

:root{
  --buttercup: #f2b71d;
  --buttongrey: #2d4649;
  --bgNewCourses: #edf2f5;
}


</style>
