<template>
  <div id="footer">
     <div class="footer-flex">
       <div class="w-1/4">
         <Logo />
         <p>We are a team of designers and developers that create high quality Magnento, Prestashop, OpenCart.</p>
         <div>
           <i class="fab fa-facebook-f"></i>
           <i class="fab fa-twitter"></i>
           <i class="fab fa-instagram"></i>
           <i class="fab fa-pinterest"></i>
         </div>
       </div>

       <ul>
         <p class="mb-5">INFORMATION</p>
          <li><a href="">Delivery Information</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Returns</a></li>
          <li><a href="">Help</a></li>
       </ul>

       <ul>
         <p class="mb-5">SUPPORT</p>
          <li><a href="">Newsletter</a></li>
          <li><a href="">Community Guildelines</a></li>
          <li><a href="">Advertise Online</a></li>
          <li><a href="">Privacy Notice</a></li>
          <li><a href="">Contact</a></li>
       </ul>

       <ul>
         <p class="mb-5">CONTACT</p>
          <li><a href="">(00) 123 456 789</a></li>
          <li><a href="">info@yourmail.com</a></li>
          <li><a href="">www.yourwebsite.com</a></li>
          <li><a href="">255 Sheet, Your City Name</a></li>
        
       </ul>
     </div> 
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'Footer',
  components: {
    Logo,
  }
}
</script>

<style scoped>


  li {
    font-size: 14px;
    padding: 5px ;
  }
</style>