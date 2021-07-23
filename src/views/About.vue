<template>
  <div>
      <Header />
      <div class="about-cover py-10" style="">
        <div class="w-1/5 mx-auto py-24 text-center">
          <h3 class="">About Us</h3>
        </div>
      </div>

      <div class="wedge">
          <div class="flex items-center justify-between w-11/12 mx-auto my-10">
            <div class="w-1/2">
                <h3 class="font-serif">Our Goal</h3><br/>
                <p>A simplified ritual of powerful oxidant and naturally uplifting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem optio illum magnam repudiandae vitae, hic animi nostrum officia voluptates eveniet natus quibusdam vero, veniam voluptas maxime maiores architecto error!</p>
                <br/><h3 class="font-serif">Our Vision and Mission</h3>
                <br/> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam deleniti magni excepturi animi dicta porro culpa commodi quo ad.</p>
                <p class="text-2xl font-bold" style="font-family: 'script MT';">Ann Adora</p>
                <p class="text-2xl font-serif">Ann Adora</p>
                <p>CEO, BeautEtal...</p>
                <ShopButton class="mt-5" />
            </div>
            <div class="w-1/3 flex items-end">
                <img class="" style="height:300px; width:300px" src="https://images.pexels.com/photos/4672616/pexels-photo-4672616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <!-- <img class="-ml-48 -mb-20 w-72 h-72" src="https://images.pexels.com/photos/4672654/pexels-photo-4672654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""> -->
            </div>
        </div>
      </div>

      <div class="px-100 py-10" style="background-color: #fcfcfc;">
        <div class="wedge">
          <h3 class="text-center">Meet The Team</h3>
          <div class="flex items-center justify-between my-7 gap-5">
            <div>
              <img src="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            </div>
            <div>
              <img src="https://images.pexels.com/photos/2179725/pexels-photo-2179725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            </div>
            <div>
              <img src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            </div>
          </div>
        </div>
      </div>

         <div class="wedge">   
        <div class="home-blog">
          <div class="row-section">
            <div>
              <h3 class="my-7">Blog Update</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illo.</p>
            </div>
              <MoreButton />
          </div>
          <div class="my-10 grid grid-cols-3 gap-10">
            <div class="flex flex-col gap-3">
              <img src="https://images.pexels.com/photos/2564890/pexels-photo-2564890.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <p class="text-xs not-italic">Denolla Witesyn-00/00/00</p>
              <p>The adipisicing elit. Rem possimus inventore quod? Non, minus consectetur?</p>
            </div>
            <div class="flex flex-col gap-3">
              <img src="https://images.pexels.com/photos/4672666/pexels-photo-4672666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <p class="text-xs not-italic">Denolla Witesyn-00/00/00</p>
              <p>The adipisicing elit. Rem possimus inventore quod? Non, minus consectetur?</p>
            </div>
            <div class="flex flex-col gap-3">
              <img src="https://images.pexels.com/photos/6417941/pexels-photo-6417941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <p class="text-xs not-italic">Denolla Witesyn-00/00/00</p>
              <p>The adipisicing elit. Rem possimus inventore quod? Non, minus consectetur?</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'About',
    components: {
        Header,
        Footer,
    }

}
</script>

<style>
  .about-cover {
    background: url('https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    height: 300px;
    background-repeat: none;
    background-size: cover;
    background-position: center;
  }
</style>