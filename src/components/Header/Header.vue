<template>
    <header class=" mx-auto py-3 lg:py-5 flex justify-between items-center md:border-b-2 md:border-gray-200">

        
        <!-- <BgOverlay/> -->

        <!--  dektop nav/ sneakers logo  -->
        <div class="flex gap-x-5 md:gap-x-14 items-center">
            <img src="../../images/icon-menu.svg" alt="hamburger" class="lg:hidden cursor-pointer" onClick={showNav} />
            <img src="../../images/logo.svg" alt="logo" />

            <!-- desktop nav / link lists  -->
            <!-- <nav class="flex lg:flex  gap-x-8 items-center text-gray-500 text-lg font-medium">
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" >
              Collections
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" >
              Men
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" >
              Women
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" >
              About
            </a>
            <a href="#" class="relative after:content-[''] after:block after:h-[5px] after:w-0 after:bg-[#ff7d1a] after:transition-all after:duration-300 hover:after:w-full after:mt-8 after:absolute" >
              Contact
            </a>
      </nav> -->

            <!--  mobile nav  -->
            <!-- <nav
          class=
            "mobileNav left-[0px] w-[70%] "
          
        >
          <img
            src="../../images/icon-close.svg"
            alt="close"
            class="w-[15px] lg:hidden cursor-pointer"
          />
              <a
                href="#"
                class="hover:border-b-2 lg:hidden hover:pb-2 duration-100 hover:border-[#ff7d1a]"
              >
                WMen
              </a>
        </nav> -->
        </div>



        <!--  right  -->
        <div class="flex gap-x-5 md:gap-x-10 items-center relative">
            <img src="../../images/icon-cart.svg" class="h-6 cursor-pointer" alt="carticon" onClick={showCart} />
            <div
                class="bg-[#ff7d1a] px-2 text-white rounded-lg text-[12px] font-bold absolute top-[-1px] md:top-[7px] left-[13px]">
                0
            </div>
            <img src="../../images/image-avatar.png"
                class="h-10 md:h-14 cursor-pointer border-[#ff7d1a] hover:border-2 rounded-full" alt="avatar" />
        </div>
    </header>
</template>

<script>
import BgOverlay from '../UI/BgOverlay.vue'
export default {
    name: "header1",
    components:{
        BgOverlay
    }
}
</script>

<style>

</style>