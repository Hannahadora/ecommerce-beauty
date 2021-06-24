<template>
  <div id="header">
      <div class="header-content">
          <Logo />
          <Nav class="w-9/12"/>
      </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Nav from './Nav.vue'
export default {
    name: 'Header',
    components: {
        Logo,
        Nav
    }
}
</script>

<style>
    #header {
        background: white;
        padding: 20px 100px;
    }
   .header-content {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
   } 

</style>