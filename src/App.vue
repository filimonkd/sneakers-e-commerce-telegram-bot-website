<template>
  <div class="relative lg:w-11/12 xl:w-10/12 mx-auto">
    <header1 />
    <Hero />
    <!-- footer  -->
    <footer class="text-center text-sm font-bold py-5 mb-3">
      <p class="mb-1">
        👨🏾‍💻 Coded by
        <a href="https://www.linkedin.com/in/filimon-kifle-264a9b142/" class="underline text-[#ff7d1a] ">
          Filimon K.D.
        </a>
      </p>
      <p>
        🎨 Challenge/design by
        <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
          class="underline text-[#ff7d1a] ">
          Frontend Mentor.
        </a>
      </p>
    </footer>
  </div>
</template>
<script>

import header1 from './components/Header/Header.vue'
import Hero from './components/HeroSection/Hero.vue';
export default {
  name: "App",
  components: {
    Hero,
    header1
  }
}
</script>
<style >

</style>
