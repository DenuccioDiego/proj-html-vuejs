<template>
  <div class="footer">

    <div class="container">

      <div class="d-flex pt-5"> 

        <div class="col-3 p-3" v-for="section in sectionFooter " :key="section.title">
          <h4>{{section.title}}</h4>
          <p> {{section.text.text}} </p>
          <span v-for="(icon, index) in section.text.icone" :key="section.text.icone[index]">{{icon}}</span>
          <p> {{section.text.indirizzo}} </p>
          <span> {{section.text.telefono}} </span>
          <p> {{section.text.telefono}} </p>
          <p> {{section.text.email}} </p>
          <ul class="d-inline-block">
            <li class="" v-for="(itemlist, index) in section.text.list" :key="section.text.list[index]"> {{itemlist}} </li>
          </ul>
            
          <div class="d-flex" v-for="(item, index) in section.text.section " :key="section.text.section[index]">
            <img class="col-4" :src="'../assets/images/photo-'+item.img">
            <div class="col-8">
              <h6> {{item.titlephoto}} </h6>
              <span> {{item.date}} </span>
            </div>
            
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {

  data(){

    return{
      sectionFooter:[
        {
          title:"About",
          text : {
            text : "Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.Developed by StylemixThemes.",
            icone : [
              "facebook",
              "twitter",
              "instagram"
            ]
          }
            
        },
        {
          title : "CONTACT",
          text : {
            indirizzo : "USA, Callifornia 20, First Avenue, Callifornia",
            telefono : "Tel.: +1 212 458 300 32",
            fax : "Fax: +1 212 375 24 14",
            email : "info@masterstudy.com"
          }
             
        },
        {
          title: "PAGES",
          text : {
            list : [
              "Blog",
              "Home",
              "Shortcodes",
              "Courses",
              "Membership A...",
              "Typography",
            ]

          }
            
          

          

          

        },
        {
          title : "BLOG",
          text : {
            section : [
              {
                img : "1517520287167-4bbf64a00d66-50x50.jpeg",
                titlephoto :"Our main target is to “Developing Yourself as a Leader",
                date : "August 9, 2018",
              },
              {
                img : "1490376840453-5f616fbebe5b-50x50.jepg",
                titlephoto : "Those Other College Expenses You Aren`t Thinking About",
                date : "June 3, 2015",
              },
            ]

          }
         
        },

      ],
    }
  }
}
</script>


<style scoped lang="scss">

.footer{
  background-color: var(--starColor);
  
  
}

.p_90{
  padding: 90px;
}

</style>