<template>
  <header class="mx-auto py-3 lg:py-5 flex justify-between items-center md:border-b-2 md:border-gray-200">
    <BgOverlay v-if="this.$store.state.showNav"/>

    <!--  dektop nav/ sneakers logo  -->
    <div class="flex gap-x-5 md:gap-x-14 items-center">
      <img src="../../images/icon-menu.svg" alt="hamburger" class="lg:hidden cursor-pointer" @click="this.$store.state.showNav = !this.$store.state.showNav" />
      <img src="../../images/logo.svg" alt="logo" />

      <!-- desktop nav / link lists  -->
      <nav class="hidden  lg:flex gap-x-8 items-center text-gray-500 text-lg font-medium">
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" key={linkText.id}>
              Collections
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" key={linkText.id}>
              Men
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" key={linkText.id}>
              Women
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" key={linkText.id}>
              About
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" key={linkText.id}>
              Contact
            </a>
      </nav>

      <!--  mobile nav  -->
      <nav
          v-if="this.$store.state.showNav"
          class="mobileNav "
          :class="this.$store.state.showNav ? 'left-[0px] w-[70%]' : 'left-[-100vw] w-full'"
        >
          <img
            src="../../images/icon-close.svg"
            alt="close"
            class="w-[15px] lg:hidden cursor-pointer"
            @click="this.$store.state.showNav = !this.$store.state.showNav"
          />
              <a
                href="#"
                class="hover:border-b-2 lg:hidden hover:pb-2 duration-100 hover:border-[#ff7d1a]"
                key={linkText.id}
              >
              Collections
              </a>
              <a
                href="#"
                class="hover:border-b-2 lg:hidden hover:pb-2 duration-100 hover:border-[#ff7d1a]"
                key={linkText.id}
              >
              Men
              </a>
              <a
                href="#"
                class="hover:border-b-2 lg:hidden hover:pb-2 duration-100 hover:border-[#ff7d1a]"
                key={linkText.id}
              >
                Women
              </a>
              <a
                href="#"
                class="hover:border-b-2 lg:hidden hover:pb-2 duration-100 hover:border-[#ff7d1a]"
                key={linkText.id}
              >
              About
              </a>
              <a
                href="#"
                class="hover:border-b-2 lg:hidden hover:pb-2 duration-100 hover:border-[#ff7d1a]"
                key={linkText.id}
              >
                Contact
              </a>
        </nav>
    </div>

    <!--  right  -->
    <div class="flex gap-x-5 md:gap-x-10 items-center relative">
      <img src="../../images/icon-cart.svg" class="h-6 cursor-pointer" alt="carticon" @click="this.$store.state.showCart = !this.$store.state.showCart" />
      <div 
        v-if="addToCartCount != 0"
        class="bg-[#ff7d1a] px-2 text-white rounded-lg text-[12px] font-bold absolute top-[-1px] md:top-[7px] left-[13px]">
        {{addToCartCount}}
      </div>
      <img :src="avatar"
        class="h-10 md:h-14 cursor-pointer border-[#ff7d1a] hover:border-2 rounded-full" alt="avatar" />
    </div>
    <Cart v-if="this.$store.state.showCart" />
  </header>
</template>

<script>

import avatar from "../../images/image-avatar.png"
import { mapState, mapMutations } from 'vuex'

import BgOverlay from "../UI/BgOverlay.vue";
import Cart from "../Cart/Cart.vue";
export default {
  name: "header1",
  data() {
    return {
      avatar:avatar,
    };
  },
  components: {
    BgOverlay,
    Cart,
  },
  methods: {
    ...mapMutations(["showCartHandler"]),
  },
  computed: {
    ...mapState(["addToCartCount","showNav"]),
    classObject() {
      if (this.$store.state.showCart == true) return "left-[0px] w-[70%] : left-[-100vw] w-full";
    }
  }
};
</script>

<style>

</style>
