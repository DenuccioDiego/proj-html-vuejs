<template>
  <div>
    
    <header>
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

</style>
